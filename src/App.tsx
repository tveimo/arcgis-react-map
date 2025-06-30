import { useEffect, useState } from "react"
import MapLoader from "@/components/MapLoader";
import { useSearchParams } from 'react-router-dom';
import { Point, parseNumber, parsePoint } from "@/utils/parseUtils";
import esriId from "@arcgis/core/identity/IdentityManager";

// https://developers.arcgis.com/calcite-design-system/get-started/
// import { defineCustomElements } from "@esri/calcite-components/loader";

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

    if ("true" == searchParams.get("force")) { // Disable password login for unavailable layers?
      // See https://community.esri.com/t5/arcgis-javascript-maps-sdk-questions/disabling-the-esri-javascript-api-v4-x/td-p/1223257
      esriId.on('dialog-create', () => {
        console.log('cancelling login dialog');
        esriId.dialog.visible = false;
        window.setTimeout(function () {
          esriId.dialog.destroy();
        }, 150);
      });
    }

  }, [searchParams])


  return (
    <>
      <main className="app">
        <MapLoader mapId={mapId} zoom={zoom} center={center} />
      </main>
    </>
  );
}


export default App
