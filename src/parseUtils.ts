export interface Point {
  latitude: number;
  longitude: number;
}

export function parseNumber(value: string | null | undefined, defaultValue: number | null): number | null {
  const parsed = parseInt(value ?? "", 10);
  return isNaN(parsed) ? defaultValue : parsed;
}

export function parsePoint(value: string | null | undefined, defaultValue: Point | null): Point | null {
  if (value && value.length > 3) {
    try {
      const values: number[] = value.split(",").map(str => parseFloat(str));
      console.log("got values: ", values);
      if (values.length > 1) {
        return {latitude: values[0], longitude: values[1]}
      }
    } catch (e) {
      console.error("unable to parse point: ", e)
    }
  }
  return defaultValue;
}
