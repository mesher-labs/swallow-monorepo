import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }
  html {
    background: black;
    width: 100%;
  }
  body {
    padding-top: 95px;
    padding-left: 78px;
    padding-right: 78px;
  }
`;
