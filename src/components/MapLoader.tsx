import { type PropsWithChildren, type ReactNode, useState } from "react";
import MainMap from "@/components/MainMap.tsx";
import { Point } from "@/utils/parseUtils";
import { TailSpin } from "react-loader-spinner";

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
      { loading ? <div className="map-loader"><TailSpin visible={ loading } height="80" width="80" color="#4fa94d"
                                                        ariaLabel="loading.." radius="1"/></div> : null }
    </div>
  )
}

export default MapLoader;
