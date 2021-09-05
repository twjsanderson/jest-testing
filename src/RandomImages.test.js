import React from 'react'

// import react-testing methods
import { render, fireEvent, waitFor, screen, cleanup } from '@testing-library/react';

// companion lib to react-testing methods
import userEvent from '@testing-library/user-event'

// add custom jest matchers from jest-dom
import '@testing-library/jest-dom'

// Component
import NewButton from './NewButton';

afterEach(() => cleanup())

test('render button', () => {
    render(
        <NewButton 
            name='test button'
            color='primary'
        />
    )

    const button = screen.getByText('test button');

    expect(button).toBeInTheDocument();
    expect(button).not.toBeEmptyDOMElement();
    expect(button).toBeVisible();
})
