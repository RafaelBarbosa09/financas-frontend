import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #312e38;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 16px;
  }

  h1, h2, h3, h4 {
    font-weight: 400;
    color: #fff;
  }

  button {
    cursor: pointer;
  }
`;