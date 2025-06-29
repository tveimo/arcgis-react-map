import React from 'react';
import {render} from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { expect, test, vi } from 'vitest'
import App from '@/App';

vi.mock('@/components/MainLoader', () => ({ default: (_props: any) => { return <div/> } }))
vi.mock('@/components/MainMap', () => ({ default: (_props: any) => { return <div/> } }))
vi.mock('@arcgis/core/identity/IdentityManager', () => ({ default: (_props: any) => { return <div/> } }))

test('renders', () => {
  const {container} = render(<MemoryRouter initialEntries={ ["?mapId=deadbeef"] }><App/></MemoryRouter>);
  expect(container.firstChild).toBeDefined
});
