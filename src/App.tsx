import { useEffect, useState } from "react"
import MapWrap from "./MapWrap.tsx";
import { useSearchParams } from 'react-router-dom';
import { Point, parseNumber, parsePoint } from "./parseUtils";

function App() {

  const [searchParams] = useSearchParams();

  const [mapId, setMapId] = useState<string>("")
  const [zoom, setZoom] = useState<number | null>(null)
  const [center, setCenter] = useState<Point | null>()

  useEffect(() => {
    const mapId = searchParams.get("mapId")
    setZoom(parseNumber(searchParams.get("zoom"), null))
    setCenter(parsePoint(searchParams.get("center"), null))
    setMapId(mapId ? mapId : "05e015c5f0314db9a487a9b46cb37eca")
  }, [searchParams])

  return (
    <>
      <main className="app">
        <MapWrap mapId={mapId} zoom={zoom} center={center} />
      </main>
    </>
  );
}


export default App
