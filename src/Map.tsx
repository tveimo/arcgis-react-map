import {type PropsWithChildren, type ReactNode, useState} from "react";

import "@arcgis/map-components/dist/components/arcgis-map";
import "@arcgis/map-components/dist/components/arcgis-legend";
import "@arcgis/map-components/dist/components/arcgis-search";
import "@arcgis/map-components/dist/components/arcgis-layer-list";
import "@arcgis/map-components/dist/components/arcgis-basemap-gallery";
import "@arcgis/map-components/dist/components/arcgis-measurement";
import "@arcgis/map-components/dist/components/arcgis-locate";
import "@arcgis/map-components/dist/components/arcgis-basemap-toggle";
import "@arcgis/map-components/dist/components/arcgis-expand";
import "@arcgis/map-components/dist/components/arcgis-placement";
import "@arcgis/map-components/dist/components/arcgis-zoom";
import "@arcgis/map-components/dist/components/arcgis-print";
import "@arcgis/map-components/dist/components/arcgis-bookmarks";

import "@esri/calcite-components/dist/components/calcite-loader";
import "@esri/calcite-components/dist/components/calcite-button";
import "@esri/calcite-components/dist/components/calcite-stack";
import "@esri/calcite-components/dist/components/calcite-input";
import "@esri/calcite-components/dist/components/calcite-shell";
import "@esri/calcite-components/dist/components/calcite-shell-panel";
import "@esri/calcite-components/dist/components/calcite-navigation";
import "@esri/calcite-components/dist/components/calcite-navigation-logo";
import "@esri/calcite-components/dist/components/calcite-action";
import "@esri/calcite-components/dist/components/calcite-action-bar";
import "@esri/calcite-components/dist/components/calcite-action-group";
import "@esri/calcite-components/dist/components/calcite-panel";
import "@esri/calcite-components/dist/components/calcite-label";
import "@esri/calcite-components/dist/components/calcite-rating";
import "@esri/calcite-components/dist/components/calcite-notice";
import "@esri/calcite-components/dist/components/calcite-tile-group";
import "@esri/calcite-components/dist/components/calcite-tile";
import "@esri/calcite-components/dist/components/calcite-modal";
import "@esri/calcite-components/dist/components/calcite-select";
import "@esri/calcite-components/dist/components/calcite-option";

import {
  ArcgisBasemapGallery,
  ArcgisBookmarks,
  ArcgisLayerList,
  ArcgisLegend,
  ArcgisMap,
  ArcgisPlacement,
  ArcgisPrint,
  ArcgisZoom
} from "@arcgis/map-components-react";

import {Point, SpatialReference} from "@arcgis/core/geometry";
import {
  CalciteAction,
  CalciteActionBar,
  CalciteInput,
  CalciteLabel,
  CalciteLoader,
  CalciteModal,
  CalciteNavigation,
  CalciteNavigationLogo,
  CalciteNotice,
  CalciteOption,
  CalcitePanel,
  CalciteSelect,
  CalciteShell,
  CalciteShellPanel,
  CalciteTile,
  CalciteTileGroup,
} from "@esri/calcite-components-react";

type MapProps = PropsWithChildren<{
  mapId: string
}>

export const Map = ({mapId = ''}: MapProps): ReactNode => {

  const [loading, setLoading] = useState<boolean>(true);
  const [activeItem, setActiveItem] = useState<string>("");

  const initialPoint = new Point({latitude: -27.4705, longitude: 153.0260});
  const zoom = 13;

  const elementClose = () => {
    setActiveItem("")
  }

  const actionToggle = (event: React.MouseEvent<HTMLCalciteActionElement & { class?: string | undefined }>) => {
    const target = event.currentTarget;
    setActiveItem(target?.dataset?.actionId ? target.dataset.actionId : "");
  };

  return (

    <>
      <CalciteShell content-behind>
        <CalciteNavigation slot="header">
          <CalciteNavigationLogo id="header-title" heading-level="1" slot="logo"> Maps
          </CalciteNavigationLogo>
        </CalciteNavigation>

        <CalciteShellPanel slot="panel-start" display-mode="float-content">
          <CalciteActionBar slot="action-bar">
            <CalciteAction data-action-id="layers" icon="layers" text="Layers"
                           onClick={actionToggle}></CalciteAction>
            <CalciteAction data-action-id="basemaps" icon="basemap" text="Basemaps"
                           onClick={actionToggle}></CalciteAction>
            <CalciteAction data-action-id="legend" icon="legend" text="Legend"
                           onClick={actionToggle}></CalciteAction>
            <CalciteAction data-action-id="bookmarks" icon="bookmark" text="Bookmarks"
                           onClick={actionToggle}></CalciteAction>
            <CalciteAction data-action-id="print" icon="print" text="Print"
                           onClick={actionToggle}></CalciteAction>
            <CalciteAction data-action-id="disclaimer" icon="information" text="Disclaimer"
                           onClick={actionToggle}></CalciteAction>
          </CalciteActionBar>

          <CalcitePanel heading="Layers" height-scale="l" data-panel-id="layers" closed={activeItem != 'layers'}
                        onCalcitePanelClose={elementClose}
                        closable>
            <ArcgisLayerList drag-enabled reference-element="mapEl" visibility-appearance="checkbox"></ArcgisLayerList>
          </CalcitePanel>
          <CalcitePanel heading="Basemaps" height-scale="l" data-panel-id="basemaps" closed={activeItem != 'basemaps'}
                        onCalcitePanelClose={elementClose}
                        closable>
            <ArcgisBasemapGallery reference-element="mapEl"></ArcgisBasemapGallery>
          </CalcitePanel>

          <CalcitePanel heading="Legend" height-scale="l" data-panel-id="legend" closed={activeItem != 'legend'}
                        onCalcitePanelClose={elementClose}
                        closable>
            <ArcgisLegend legend-style="classic" reference-element="mapEl"></ArcgisLegend>
          </CalcitePanel>
          <CalcitePanel heading="Bookmarks" height-scale="l" data-panel-id="bookmarks"
                        closed={activeItem != 'bookmarks'}
                        onCalcitePanelClose={elementClose}
                        closable>
            <ArcgisBookmarks editing-enabled="false" reference-element="mapEl"></ArcgisBookmarks>
          </CalcitePanel>
          <CalcitePanel heading="Print" height-scale="l" data-panel-id="print" closed={activeItem != 'print'}
                        onCalcitePanelClose={elementClose}
                        closable>
            <ArcgisPrint allowed-formats="all" allowed-layouts="all" include-default-templates="false"
                         reference-element="mapEl"></ArcgisPrint>
          </CalcitePanel>

          <CalcitePanel heading="Reports" data-panel-id="reports" closed={activeItem != 'reports'}
                        closable
                        onCalcitePanelClose={elementClose}>
            <ArcgisPlacement>
              <div id="report-content">
                <CalcitePanel>
                  <b>Reports</b>

                  <CalciteLabel>
                    Report type
                    <CalciteSelect>
                      <CalciteOption value="mountains">Mountains</CalciteOption>
                      <CalciteOption value="rivers">Rivers</CalciteOption>
                      <CalciteOption value="lakes">Lakes</CalciteOption>
                      <CalciteOption value="buttes">Buttes</CalciteOption>
                      <CalciteOption value="fjords">Fjords</CalciteOption>
                    </CalciteSelect>
                  </CalciteLabel>

                  <CalciteLabel>
                    Choose default user role
                    <CalciteTileGroup selection-mode="single">
                      <CalciteTile selected heading="Drawn Features" description="Select Draw Mode"></CalciteTile>
                      <CalciteTile heading="Selected Features" description=""></CalciteTile>
                    </CalciteTileGroup>
                  </CalciteLabel>

                  <CalciteLabel>
                    Customer Reference
                    <CalciteInput placeholder="">
                    </CalciteInput>
                  </CalciteLabel>
                  <CalciteLabel>
                    Email Sddress
                    <CalciteInput placeholder="">
                    </CalciteInput>
                  </CalciteLabel>

                  <CalciteNotice open icon="pencil" width="full">
                    <div slot="message">TBD</div>
                  </CalciteNotice>

                </CalcitePanel>
              </div>
            </ArcgisPlacement>
          </CalcitePanel>
        </CalciteShellPanel>

        <CalciteModal aria-labelledby="modal-title" id="example-modal" open={activeItem == 'disclaimer'}
                      onCalciteModalClose={elementClose}>
          <div slot="header" id="modal-title">
            Information
          </div>
          <div slot="content">
            <CalciteNotice open icon="pencil" width="full">
              <div slot="message">
                <p>TBD</p>
              </div>
            </CalciteNotice>
          </div>
        </CalciteModal>


        <ArcgisMap
          id="mapEl"
          itemId={mapId}
          basemap="topo-vector"
          spatialReference={SpatialReference.WebMercator}
          center={initialPoint}
          zoom={zoom}
          onArcgisViewReadyChange={(event) => {
            console.log("MapView ready", event);
            setLoading(false);
          }}
        >
          <ArcgisZoom position="top-right"></ArcgisZoom>

        </ArcgisMap>

      </CalciteShell>
      {loading ?
        <CalciteLoader id="calciteLoader" label="loading" text="Loading..."></CalciteLoader> : null}
    </>
  )

}

export default Map;
