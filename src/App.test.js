import { useState } from 'react'

// import react-testing methods
import { render, fireEvent, waitFor, screen, cleanup } from '@testing-library/react';

// companion lib to react-testing methods
// import userEvent from '@testing-library/user-event'

// add custom jest matchers from jest-dom
import '@testing-library/jest-dom'

// Component
import NewButton from './NewButton';

const TestComponent = () => {
    const [text, setText] = useState('start');

    const changeState = () => setText('end');

    return (
        <>
            <p>{text}</p>
            <NewButton 
                name='test button'
                color='primary'
                func={changeState}
            />
        </>
    )
}

beforeAll(() => cleanup())
afterEach(() => cleanup())
afterAll(() => cleanup())

test('clicking a button updates the DOM', () => {
    render(<TestComponent />)

    const button = screen.getByText('test button');
    const text = screen.getByText('start');

    expect(text).toBeVisible('start');
    expect(text).toHaveTextContent('start');

    fireEvent.click(button);

    expect(text).toBeVisible('end');
    expect(text).toHaveTextContent('end');

});