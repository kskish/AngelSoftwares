// globalStyles.js
import { createGlobalStyle } from "styled-components";

//Base CSS for entire website
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    /* font-family: Open-Sans, Helvetica, Sans-Serif; */
    font-family: 'Poppins', sans-serif;
    display: flex;
    justify-content:center;
    flex-direction: column;
  }html, body {
    max-width: 100%;
    overflow-x: hidden;
}
`;

export default GlobalStyle;
