import styled from "styled-components";
// ui
import { Flex } from "./ui";
/// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const MainWrap = styled("div")`
  position: relative;
`;
export const MapWrap = styled("div")`
  @media only screen and (orientation: portrait) {
    & {
      visibility: hidden;
    }
  }
  @media only screen and (orientation: landscape) {
    & {
      visibility: unset;
    }
  }
`;

export const MessageWrap = styled(Flex)`
  width: 100vw;
  height: 100vh;
  padding: 5vw;
  position: fixed;
  top: 0;
  left: 0;
  @media only screen and (orientation: portrait) {
    & {
      display: block;
    }
  }
  @media only screen and (orientation: landscape) {
    & {
      display: none;
    }
  }
`;
