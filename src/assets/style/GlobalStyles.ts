import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    border: 0;
    font-family: Roboto, sans-serif;
  }
  html, body, #root {
    max-height: 100vh;
    max-width: 100vw;
    width: 100%;
    height: 100%;
  }
  body, input, button {
    font-size: 62.5%;
    font-family: 'Roboto', sans-serif;
  }
  body {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  }
`;