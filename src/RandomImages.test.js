import React from 'react'

// import react-testing methods
import { render, screen } from '@testing-library/react';

// add custom jest matchers from jest-dom
import '@testing-library/jest-dom'

// Component
import RandomImages from './RandomImages';

test('render buttons to DOM', () => {
    render(
        <RandomImages />
    )

    const generateImageButton = screen.getByText('Generate Image');
    const clearImageButton = screen.getByText('Clear Image');

    expect(generateImageButton).toBeInTheDocument();
    expect(generateImageButton).not.toBeEmptyDOMElement();
    expect(generateImageButton).toBeVisible();
    expect(clearImageButton).toBeInTheDocument();
    expect(clearImageButton).not.toBeEmptyDOMElement();
    expect(clearImageButton).toBeVisible();
})

