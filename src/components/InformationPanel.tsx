import { type ReactNode } from "react";
import "@esri/calcite-components/dist/components/calcite-notice";
import "@esri/calcite-components/dist/components/calcite-panel";
import "@esri/calcite-components/dist/components/calcite-link";
import "@esri/calcite-components/dist/components/calcite-button";
import { CalciteLink, CalciteNotice, CalcitePanel } from "@esri/calcite-components-react";

const InformationPanel = (): ReactNode => {

  return (
    <CalcitePanel heading="Sample ArcGIS JavaScript SDK React App" icon="information">
      <CalciteNotice open width="full">
        <div slot="message">
          <p>This is a sample mapping app implemented using the ArcGIS JavaScript SDK with React and the ESRI
            Calcite GUI Components.</p>
          <p>
            Any public map on the ArcGIS Online portal can be loaded by
            providing a mapId query parameter for the portal item,
            eg <CalciteLink target="_blank"
                            href="https://tveimo.github.io/arcgis-react-map/?mapId=f2e9b762544945f390ca4ac3671cfa72"
                            icon-end="launch">San Francisco</CalciteLink>
          </p>
          <p>
            The source code for this app is available
            on <CalciteLink target="_blank"
                            href="https://github.com/tveimo/arcgis-react-map/"
                            icon-end="launch">GitHub</CalciteLink>
          </p>

          <p>
            <CalciteLink target="_blank" href="https://www.esri.com/en-us/legal/overview" icon-end="launch">ESRI
            Information</CalciteLink>
          </p>
        </div>
      </CalciteNotice>
    </CalcitePanel>
  )
}

export default InformationPanel;