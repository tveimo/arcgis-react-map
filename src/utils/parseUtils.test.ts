import { parseNumber, parsePoint } from "@/utils/parseUtils"
import { expect, test } from 'vitest'

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
  expect(parsePoint("34,122", null)).toEqual({"latitude": 34, "longitude": 122});
  expect(parsePoint("34.23,122.12", null)).toEqual({"latitude": 34.23, "longitude": 122.12});
  expect(parsePoint("34.32.23,124.23", null)).toEqual({"latitude": 34.32, "longitude": 124.23});
})
