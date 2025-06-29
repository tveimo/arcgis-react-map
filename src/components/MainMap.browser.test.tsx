import React from 'react';
import { render } from "@testing-library/react";
import { describe, expect, test, vi } from 'vitest'
import MainMap from "@/components/MainMap.tsx";

vi.mock('@arcgis/core/views/MapView', () => {
  const mockMyClassInstance = {
    doSomething: vi.fn(() => 'Mocked something!'),
    when: vi.fn(),
  };
  return {
    default: vi.fn(() => mockMyClassInstance),
  };
})

vi.mock('@arcgis/core/views/MapView2', () => {
  return {
    default: () => ({
      when: vi.fn(),
    }),
  }
})

vi.mock('@arcgis/core/widgets/MapView', () => {
  return {
    default: vi.fn(() => ({}))
  }
})

vi.mock('@arcgis/core/widgets/LayerList', () => ({ default: (_props: any) => { return <div/>} }))
vi.mock('@arcgis/core/widgets/BasemapGallery', () => ({ default: (_props: any) => { return <div/>} }))
vi.mock('@arcgis/core/widgets/Print', () => ({ default: (_props: any) => { return <div/>} }))
vi.mock('@arcgis/core/widgets/BasemapToggle', () => ({ default: (_props: any) => { return <div/>} }))
vi.mock('@arcgis/core/widgets/Search', () => ({ default: (_props: any) => { return <div/>} }))
vi.mock('@arcgis/core/widgets/Expand', () => ({ default: (_props: any) => { return <div/>} }))
vi.mock('@arcgis/core/widgets/Home', () => ({ default: (_props: any) => { return <div/>} }))
vi.mock('@arcgis/core/widgets/Locate', () => ({ default: (_props: any) => { return <div/>} }))
vi.mock('@arcgis/core/widgets/Legend', () => ({ default: (_props: any) => { return <div/>} }))
vi.mock('@arcgis/core/widgets/BasemapToggle', () => ({ default: (_props: any) => { return <div/>} }))
vi.mock('@arcgis/core/widgets/BasemapToggle', () => ({ default: (_props: any) => { return <div/>} }))

// @arcgis and @esri components must be tested in a browser environment
describe("MainMap", () => {
  test("renders", () => {
    const { container } = render(<MainMap mapId={"bogus"} center={{longitude: 0, latitude: 0}} zoom={12} />);
    expect(container.firstChild).toBeDefined();
  });

});



