import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    cursor: none !important;
  }

  html {
    cursor: none !important;
  }

  a, button, input, [data-cursor="hover"] {
    cursor: none !important;
    &:hover {
      cursor: none !important;
    }
  }
`;

export default GlobalStyle;
