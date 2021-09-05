// import react-testing methods
import { render, fireEvent, waitFor, screen, cleanup } from '@testing-library/react';

// companion lib to react-testing methods
import userEvent from '@testing-library/user-event'

// add custom jest matchers from jest-dom
import '@testing-library/jest-dom'

// Component
import NewButton from './NewButton';

beforeAll(() => cleanup())
afterEach(() => cleanup())
afterAll(() => cleanup())

test('render button to DOM', () => {
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
    expect(button).toHaveClass('btn btn-primary');
    expect(button).toHaveTextContent('test button');
});

test('button calls onClick prop when clicked', () => {
    const handleClick = jest.fn()
    render(
        <NewButton 
            name='test button'
            color='primary'
            func={handleClick}
        />
    )
    const button = screen.getByText(/test button/i);
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
});






