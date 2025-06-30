import React from 'react';
import { render } from "@testing-library/react";
import { expect, test } from 'vitest'
import Spinner from "@/components/SimpleSpinner.tsx";

test('renders', () => {
  const { container } = render(<Spinner />);
  expect(container.firstChild).toBeDefined;
});
