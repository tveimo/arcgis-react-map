import React from 'react';
import { render } from "@testing-library/react";
import { describe, expect, test } from 'vitest'
import InformationPanel from "@/components/InformationPanel.tsx";

describe("InformationPanel", () => {
  test("renders", () => {
    const { container } = render(<InformationPanel />);
    expect(container.firstChild).toBeDefined();
  });
});



