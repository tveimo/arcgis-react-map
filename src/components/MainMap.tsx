import { type PropsWithChildren, type ReactNode } from "react";

import "@esri/calcite-components/dist/components/calcite-action-bar";
import "@esri/calcite-components/dist/components/calcite-shell";
import "@esri/calcite-components/dist/components/calcite-shell-panel";
import "@esri/calcite-components/dist/components/calcite-option";
import "@esri/calcite-components/dist/components/calcite-select";
import "@esri/calcite-components/dist/components/calcite-tile";
import "@esri/calcite-components/dist/components/calcite-tile-group";
import "@esri/calcite-components/dist/components/calcite-panel";
import "@esri/calcite-components/dist/components/calcite-block";
import "@esri/calcite-components/dist/components/calcite-navigation";
import "@esri/calcite-components/dist/components/calcite-navigation-logo";
import "@esri/calcite-components/dist/components/calcite-input";
import "@esri/calcite-components/dist/components/calcite-link";
import "@esri/calcite-components/dist/components/calcite-label";
import "@esri/calcite-components/dist/components/calcite-button";
import { CalcitePanel, CalciteShell } from "@esri/calcite-components-react";
import { Point as UtilPoint } from "@/utils/parseUtils.ts";
import InformationPanel from "@/components/InformationPanel.tsx";
import "@arcgis/map-components/dist/components/arcgis-map";
import "@arcgis/map-components/dist/components/arcgis-legend";
import "@arcgis/map-components/dist/components/arcgis-zoom";
import "@arcgis/map-components/dist/components/arcgis-locate";
import "@arcgis/map-components/dist/components/arcgis-home";
import "@arcgis/map-components/dist/components/arcgis-print";
import "@arcgis/map-components/dist/components/arcgis-layer-list";
import "@arcgis/map-components/dist/components/arcgis-basemap-gallery";
import "@arcgis/map-components/dist/components/arcgis-basemap-toggle";
import "@arcgis/map-components/dist/components/arcgis-search";
import "@arcgis/map-components/dist/components/arcgis-expand";
import "@arcgis/map-components/dist/components/arcgis-placement";

import {
  ArcgisBasemapGallery,
  ArcgisBasemapToggle,
  ArcgisExpand,
  ArcgisHome,
  ArcgisLayerList,
  ArcgisLegend,
  ArcgisLocate,
  ArcgisMap,
  ArcgisPlacement,
  ArcgisPrint,
  ArcgisSearch,
  ArcgisZoom
} from "@arcgis/map-components-react";
import { TargetedEvent } from "@esri/calcite-components";
import { Point } from "@arcgis/core/geometry";

type MapProps = PropsWithChildren<{
  mapId: string
  mapViewEl?: string
  center: UtilPoint | nullish
  zoom: number | nullish
  onReady?: () => void
}>

const MainMap = ({
                    mapId = '',
                    center,
                    zoom = 8,
                    onReady,
                  }: MapProps): ReactNode => {

  const handleViewReady = (event: TargetedEvent<HTMLArcgisMapElement, void>) => {
    if (onReady) {
      onReady()
    }
    if (zoom) {
      event.target.zoom = zoom
    }
    if (center) {
      event.target.center = new Point(center)
    }
  };

  return (
    <>
      <CalciteShell content-behind>
        <CalcitePanel>
          <ArcgisMap itemId={mapId}
                     onArcgisViewReadyChange={handleViewReady}>
              <ArcgisZoom position="top-left"/>
            <ArcgisLocate position="top-left"/>
            <ArcgisHome position="top-left"/>
            <ArcgisExpand position="top-left">
              <ArcgisLayerList />
            </ArcgisExpand>

            <ArcgisExpand position="top-left">
              <ArcgisLegend />
            </ArcgisExpand>

            <ArcgisExpand position="top-left">
              <ArcgisBasemapGallery/>
            </ArcgisExpand>

            <ArcgisSearch position="top-right" />

            <ArcgisExpand close-on-esc position="top-right" collapseIcon="chevrons-right" expandIcon="print">
              <ArcgisPrint allowed-formats="all" allowed-layouts="all" include-default-templates="false"/>
            </ArcgisExpand>

            <ArcgisBasemapToggle position="bottom-left" nextBasemap="topo-vector"/>

            <ArcgisExpand close-on-esc position="top-right"  collapseIcon="chevrons-right" expandIcon="information"
                          onClick={() => console.log("opening information panel")}>
              <ArcgisPlacement>
                <InformationPanel/>
              </ArcgisPlacement>
            </ArcgisExpand>

          </ArcgisMap>
        </CalcitePanel>
      </CalciteShell>
    </>
  );
}


export default MainMap;