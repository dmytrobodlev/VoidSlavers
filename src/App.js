import "./styles.css";
import React from "react";
import {} from "./firebase";
import Map from "./features/map";
import GlobalStyles from "./ui/global-styles";
import { MainWrap, MapWrap, MessageWrap } from "./global-ui.js";
///////////////////////////////////////////////////////////////////////////////////////////////////

export default function App() {
  return (
    <MainWrap className="App">
      <MapWrap>
        <Map />
      </MapWrap>
      <MessageWrap>Please, rotate phone to Landscape mode</MessageWrap>
      <GlobalStyles />
    </MainWrap>
  );
}
