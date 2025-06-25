import { type PropsWithChildren, type ReactNode, useState } from "react";
import { CalciteLoader } from "@esri/calcite-components-react";
import MainMap from "./MainMap.tsx";
import { Point } from "@/parseUtils.ts";

type MapProps = PropsWithChildren<{
  mapId: string
  center: Point | nullish
  zoom: number | nullish
}>

const MapWrap = ({ mapId = "", ...props } : MapProps): ReactNode => {

  const [loading, setLoading] = useState<boolean>(true);

  return (

    <div className="map-wrap">
      <MainMap mapId={mapId}
               mapViewEl="mapViewEl"
               center={props.center}
               zoom={props.zoom}
               onReady={() => {
         setLoading(false);
        }}>
        </MainMap>
      {loading ?
        <CalciteLoader id="calciteLoader" className="calcite-loader" label="loading" text="Loading..."></CalciteLoader> : null}
    </div>
  )

}

export default MapWrap;
