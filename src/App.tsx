import Map from './Map'

import {useEffect, useState} from "react"

function App() {

  const [mapId, setMapId] = useState<string>("")

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search)

    const mapId = searchParams.get("mapId")
    console.log("loading mapId;", mapId)
    setMapId(mapId ? mapId : "")
  }, [])

  return (
    <>
      <main>
        <Map mapId={mapId} />
      </main>
    </>
  );
}

export default App
