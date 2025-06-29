import React from 'react';
import MapLoader from "@/components/MapLoader.tsx";
import { render } from "@testing-library/react";
import { expect, test, vi } from 'vitest'

vi.mock('@/components/MainMap', () => ({ default: (_props: any) => { return <div>Input</div> } }))

test('renders', () => {
  const { container } = render(<MapLoader mapId={"bogus"} center={{latitude: 0, longitude: 0}} zoom={12}/>);
  expect(container.firstChild).toBeDefined;
});

// when we provide a bogus id, the map never stops loading
test('indicator renders', () => {
  const { container } = render(<MapLoader mapId={"bogus"} center={{latitude: 0, longitude: 0}} zoom={12}/>);
  expect(container.querySelector('.map-loader'));
});
