import { parseNumber, parsePoint } from "./parseUtils.ts"
import {expect, test} from '@jest/globals';

test("parseNumber", () => {
  expect(parseNumber(null, 0)).toEqual(0)
  expect(parseNumber("", 0)).toEqual(0)
  expect(parseNumber("", 45)).toEqual(45)
  expect(parseNumber("45", 0)).toEqual(45)
  expect(parseNumber("34", 0)).toEqual(34)
  expect(parseNumber("34.1", 0)).toEqual(34)
  expect(parseNumber("34.1.2", 3)).toEqual(34)
})

test("parsePoint", () => {
  expect(parsePoint(null, null)).toEqual(null);
})
