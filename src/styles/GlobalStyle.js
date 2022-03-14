import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset};
  
    * {
        box-sizing: border-box;
    }

    html, body {
        height: 100%;
    }

    button {
        padding: 0;
        margin: 0;
    }
`;

export default GlobalStyle;
