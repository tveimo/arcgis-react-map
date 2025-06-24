import { useEffect, useState } from "react"
import { Point } from "@arcgis/core/geometry";
import MapWrap from "./MapWrap.tsx";

function App() {

  const [mapId, setMapId] = useState<string>("")
  const [zoom, setZoom] = useState<number | null>(null)
  const [center, setCenter] = useState<Point | null>()


  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search)

    const mapId = searchParams.get("mapId")
    setZoom(parseNumber(searchParams.get("zoom"), null))
    setCenter(parsePoint(searchParams.get("center"), null))
    setMapId(mapId ? mapId : "05e015c5f0314db9a487a9b46cb37eca")
  }, [])

  return (
    <>
      <main>
        <MapWrap mapId={mapId} zoom={zoom} center={center} />
      </main>
    </>
  );
}

function parseNumber(value: string | null | undefined, defaultValue: number | null): number | null {
  const parsed = parseInt(value ?? "", 10);
  return isNaN(parsed) ? defaultValue : parsed;
}

function parsePoint(value: string | null | undefined, defaultValue: Point | null): Point | null {
  if (value && value.length > 3) {
    try {
      const values: number[] = value.split(",").map(str => parseFloat(str));
      console.log("got values: ", values);
      if (values.length > 1) {
        return new Point({latitude: values[0], longitude: values[1]})
      }
    } catch (e) {
      console.error("unable to parse point: ", e)
    }
  }
  return defaultValue;
}

export default App
