import { type PropsWithChildren, type ReactNode, useState } from "react";
import MainMap from "@/components/MainMap.tsx";
import { Point } from "@/utils/parseUtils";
import Spinner from "@/components/SimpleSpinner.tsx";

type MapProps = PropsWithChildren<{
  mapId: string
  center: Point | nullish
  zoom: number | nullish
}>

const MapLoader = ({ mapId = "", ...props } : MapProps): ReactNode => {

  const [loading, setLoading] = useState<boolean>(true);

  return (

    <div className="map-wrap">
      <MainMap mapId={ mapId }
               mapViewEl="mapViewEl"
               center={ props.center }
               zoom={ props.zoom }
               onReady={ () => {
                 setLoading(false);
               } }>
      </MainMap>
      { loading ? (<div className="map-loader"><Spinner /></div>) : null}
    </div>
  )
}

export default MapLoader;
