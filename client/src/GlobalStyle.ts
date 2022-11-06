import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    color: white;
    font-family: system-ui;
    #someselector {
      all: initial;
    }

    input, button {
      border: none;
    }

    textarea:focus, input:focus{
      outline: none;
    }

    #someselector * {
      all: unset
    }

    *:focus {
      outline: none;
    }


    h1 { 
      margin: 0;
      line-height: 1.1;
    }

    h2 { 
      margin: 0;
      line-height: 1.1;
    }

    h3 {
    margin: 0;
    line-height: 1.1;
    }
    p {
      margin: 0;
      line-height: 1.1;
    }
  }
  html {
    background: black;
    width: 100%;
  }
  body {
    padding-top: 35px;
    padding-left: 78px;
    padding-right: 78px;
  }
`;
