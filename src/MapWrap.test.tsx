import React from 'react';
import {render} from "@testing-library/react";
import '@testing-library/jest-dom'
import MapWrap from "./MapWrap.tsx";

jest.mock('./MainMap', () => () => <div />);
jest.mock('@esri/calcite-components-react', () => ({
  CalciteLoader: () => <div/>,
}));

test('component rendered', () => {
  const { container } = render(<MapWrap mapId={"bogus"} center={{latitude: 0, longitude: 0}} zoom={12}/>);
  expect(container.firstChild).toHaveClass("map-wrap");
});
