import { type PropsWithChildren, type ReactNode, useEffect, useState } from "react";
import MapView from "@arcgis/core/views/MapView";

import WebMap from "@arcgis/core/WebMap";

import "@esri/calcite-components/dist/components/calcite-action-bar";
import "@esri/calcite-components/dist/components/calcite-shell";
import "@esri/calcite-components/dist/components/calcite-shell-panel";
import "@esri/calcite-components/dist/components/calcite-panel";
import "@esri/calcite-components/dist/components/calcite-block";
import "@esri/calcite-components/dist/components/calcite-navigation";
import "@esri/calcite-components/dist/components/calcite-navigation-logo";
import "@esri/calcite-components/dist/components/calcite-input";
import "@esri/calcite-components/dist/components/calcite-link";
import "@arcgis/map-components/components/arcgis-layer-list";
import "@arcgis/map-components/components/arcgis-print";
import {
  CalciteAction,
  CalciteActionBar,
  CalciteLink,
  CalciteNavigation,
  CalciteNavigationLogo,
  CalcitePanel,
  CalciteShell,
  CalciteShellPanel
} from "@esri/calcite-components-react";
import { ArcgisPrint } from "@arcgis/map-components-react";
import LayerList from "@arcgis/core/widgets/LayerList";
import BasemapGallery from "@arcgis/core/widgets/BasemapGallery";
import Print from "@arcgis/core/widgets/Print";
import BasemapToggle from "@arcgis/core/widgets/BasemapToggle";
import Search from "@arcgis/core/widgets/Search";
import Expand from "@arcgis/core/widgets/Expand";
import Home from "@arcgis/core/widgets/Home";
import Locate from "@arcgis/core/widgets/Locate";
import Legend from "@arcgis/core/widgets/Legend";
import { Point } from "@/parseUtils.ts";

type MapProps = PropsWithChildren<{
  mapId: string
  mapViewEl?: string
  center: Point | nullish
  zoom: number | nullish
  onReady?: () => void
}>

const MainMap = ({
                              mapId = '',
                              mapViewEl = '_mapViewEl',
                              center,
                              zoom = 8,
                              onReady,
                            }: MapProps): ReactNode => {


  const [activeItem, setActiveItem] = useState<string>("");
  const [activeItemTitle, setActiveItemTitle] = useState<string>("");
  const [activeFeature, setActiveFeature] = useState<string>("");

  const elementClose = () => {
    setActiveItem("")
  }

  const actionToggle = (event: React.MouseEvent<HTMLCalciteActionElement & { class?: string | undefined }>) => {
    const target = event.currentTarget;

    if (target?.dataset?.actionId) {
      if (activeItem == target.dataset.actionId) {
        setActiveItem("")
        setActiveItemTitle("")
      } else {
        setActiveItem(target.dataset.actionId)
        setActiveItemTitle(target.text)
      }
    }

    setActiveItem(target?.dataset?.actionId ? activeItem == target.dataset.actionId ? "" : target.dataset.actionId ? target.dataset.actionId : "" : "");

  };

  // create the map after react has rendered the DOM
  useEffect(
    () => {
      const webmap = new WebMap({
        portalItem: {
          id: mapId,
        },
      });

      const view = new MapView({
        map: webmap,
        container: mapViewEl,
        ...(zoom ? { zoom: zoom } : {}),
        ...(center ? { center: center } : {}),
    });

      view.when(() => {
        if (onReady) {
          onReady()
        }

        new Print({
          view: view,
          container: "print-container"
        });

        const searchWidget = new Search({
          view: view,
          popupEnabled: false
        })
        const searchExpand = new Expand({
          view: view,
          content: searchWidget,
          expanded: false,
          placement: "right"
        });

        const layerWidget = new LayerList({
          view: view,
        })
        const layerExpand = new Expand({
          view: view,
          content: layerWidget,
          expanded: false,
        })
        const homeWidget = new Home({
          view: view
        });
        const locateWidget = new Locate({
          view: view,
        });

        const legendWidget = new Legend({
          view: view,
        })

        const legendExpand = new Expand({
          view: view,
          content: legendWidget,
        })
        const basemapToggleWidget = new BasemapToggle({
          view: view,
          nextBasemap: "topo-vector"
        })
        const basemapGallery = new BasemapGallery({
          view: view,
        })

        const basemapExpand = new Expand({
          view: view,
          content: basemapGallery,
          expanded: false,
        });

        view.ui.move([{component: "zoom", position: "top-left", index: 1}]);
        view.ui.add([
          { component: searchExpand, position: "top-left", index: 0 },
          { component: locateWidget, position: "top-left", index: 2 },
          { component: homeWidget, position: "top-left", index: 3 },
          { component: layerExpand, position: "top-left", index: 4 },
          { component: legendExpand, position: "top-left", index: 5 },
          { component: basemapExpand, position: "top-left", index: 6 },
          { component: basemapToggleWidget, position: "bottom-left", index: 0 },
        ])
      });

      return () => {
        if (!!view) {
          view.container = null;
        }
      };
    },
    [mapId, zoom, center]
  );

  return (

    <CalciteShell>
      <CalciteNavigation slot="header">
        <CalciteNavigationLogo id="header-title" heading-level="1" slot="logo"></CalciteNavigationLogo>
      </CalciteNavigation>
      <CalciteShellPanel slot="panel-start" position="start"
        // display-mode="float-content"
                         collapsed={activeItem==""}>
        <CalciteActionBar slot="action-bar">
          <CalciteAction data-action-id="print" icon="print" text="Print"
                         onClick={actionToggle}></CalciteAction>
          <CalciteAction data-action-id="disclaimer" icon="information" text="Disclaimer"
                         onClick={actionToggle}></CalciteAction>
        </CalciteActionBar>

        <CalcitePanel heading={activeItemTitle} height-scale="l" data-panel-id="basemaps" closed={activeItem == ''}
                      onCalcitePanelClose={elementClose}
                      closable>
          <div style={{ display: activeItem == 'legend' ? 'block' : 'none'}} id="legend-container"></div>
          <div style={{ display: activeItem == 'print' ? 'block' : 'none'}} id="print-container">
            <ArcgisPrint allowed-formats="all" allowed-layouts="all" include-default-templates="false"
                         reference-element="mapViewEl"></ArcgisPrint>
          </div>
          <div style={{ display: activeItem == 'disclaimer' ? 'block' : 'none'}} id="disclaimer-container">
            <div id="disclaimer-content">
              <div id="item-disclaimer">
                <p>This is a sample mapping app implemented using the ArcGIS JavaScript SDK with React and the ESTI Calcite GUI Components.</p>
                <p>These maps are provided by ESRI. Any public map on the ArcGIS Online portal can be loaded by providing a
                  mapId query parameter for the portal item, eg <CalciteLink target="_blank" href="https://arcgis-react-map.netlify.app/?mapId=f2e9b762544945f390ca4ac3671cfa72" icon-end="launch">San Francisco</CalciteLink>
                </p>
                <p>The source code for this map is available on <CalciteLink target="_blank" href="https://github.com/tveimo/arcgis-react-map/" icon-end="launch">GitHub</CalciteLink></p>
                <p><CalciteLink target="_blank" href="https://www.esri.com/en-us/legal/overview" icon-end="launch">ESRI Information</CalciteLink>
                </p>
              </div>
            </div>
          </div>
        </CalcitePanel>
      </CalciteShellPanel>
      <CalcitePanel>
        <div id={mapViewEl}/>
      </CalcitePanel>
      <CalciteShellPanel slot="panel-end" position="end" width-scale="l"
                         class="animate-out-down"
                         collapsed={activeFeature == ""}>
        <CalcitePanel heading="Feature Details" onCalcitePanelClose={() => setActiveFeature("")}
                      closed={activeFeature == ""} closable>
          <div id="features-widget"></div>
        </CalcitePanel>
      </CalciteShellPanel>
    </CalciteShell>

  );
}

export default MainMap;