import { type PropsWithChildren, type ReactNode, useState } from "react";

import { Point } from "@arcgis/core/geometry";
import { CalciteLoader, } from "@esri/calcite-components-react";
import MainMap from "./MainMap.tsx";

type MapProps = PropsWithChildren<{
  mapId: string
  center: Point | nullish
  zoom: number | nullish
}>

const MapWrap = ({ mapId = "", ...props } : MapProps): ReactNode => {

  const [loading, setLoading] = useState<boolean>(true);

  return (

    <>
      <MainMap mapId={mapId}
               mapViewEl="mapViewEl"
               center={props.center}
               zoom={props.zoom}
               onReady={() => {
         setLoading(false);
        }}>
        </MainMap>
      {loading ?
        <CalciteLoader id="calciteLoader" label="loading" text="Loading..."></CalciteLoader> : null}
    </>
  )

}

export default MapWrap;
