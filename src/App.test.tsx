import React from 'react';
import {render} from "@testing-library/react";
import '@testing-library/jest-dom'
import App from './App';
import { MemoryRouter } from "react-router-dom";

jest.mock('./MapWrap', () => () => <div />);

// using MemoryRouter, since app is not wrapped in BrowserRouter when testing
test('component rendered', () => {
  const { container } = render(<MemoryRouter><App /></MemoryRouter>);
  expect(container.firstChild).toHaveClass('app');
});
