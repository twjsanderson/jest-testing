npm install --save-dev @testing-library/react -> is a replacement for Enzyme

React testing library enables us to test specific React components in isolation accessing the DOM directly.

React testing library -> https://testing-library.com/docs/react-testing-library/intro

- It also exposes a recommended way to find elements by a data-testid as an "escape hatch" for elements where the text content and label do not make sense or is not practical.

- ...you want your testbase to be maintainable in the long run so refactors of your components (changes to implementation but not functionality) don't break your tests and slow you and your team down.

--------------------------------------------------------------------

npm install --save-dev @testing-library/jest-dom

Jest is a testing framework that uses 'matchers' to help you test values in your application in different ways.

jest-dom -> https://github.com/testing-library/jest-dom

- Write tests that assert various things about the state of a DOM. This library provides a set of custom jest matchers that you can use to extend jest. These will make your tests more declarative, clear to read and to maintain.

--------------------------------------------------------------------

npm install --save-dev @testing-library/user-event @testing-library/dom

user-event is a companion library for React Testing Library that provides more advanced simulation of browser interactions than the built-in fireEvent method.

User-Event -> https://testing-library.com/docs/ecosystem-user-event

- Note: All userEvent methods are synchronous with one exception: when delay option used with userEvent.type...