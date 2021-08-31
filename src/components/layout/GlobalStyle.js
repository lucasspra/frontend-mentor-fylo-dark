import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap');

  body {
    font-size: 14px;
    font-family: 'Open Sans', sans-serif;
    background-color: hsl(218, 28%, 13%);
  }
`;

export default GlobalStyle;
