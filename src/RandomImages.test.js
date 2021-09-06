import React from 'react'

// Mock Service Worker for mock api calls
import { rest } from 'msw'
import { setupServer } from 'msw/node'

// import react-testing methods
import { render, fireEvent, waitFor, screen, cleanup } from '@testing-library/react';

// companion lib to react-testing methods
import userEvent from '@testing-library/user-event'

// add custom jest matchers from jest-dom
import '@testing-library/jest-dom'

// assests
// import test_image from './test_image.jpg';

// Component
import RandomImages from './RandomImages';

const server = setupServer(
    rest.get('/test_route', (req, res, ctx) => {
        return res(ctx.json({ url: './test_image.jpg' }))
    }),
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

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

