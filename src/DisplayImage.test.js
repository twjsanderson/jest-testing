import React from 'react'

// import react-testing methods
import { render, screen } from '@testing-library/react';

// add custom jest matchers from jest-dom
import '@testing-library/jest-dom'

// assests
import test_image from './test_image.jpg';

// Component
import DisplayImage from './DisplayImage';

test('render image to the DOM ', () => {
    render(
        <DisplayImage image={test_image} error={null} />
    )

    const image = screen.getByAltText('something cool')

    expect(image).toBeInTheDocument();
    expect(image).toHaveClass('w-25 h-25')
    expect(image).toBeVisible();
})