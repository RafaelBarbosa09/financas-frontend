import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #F4F3EF;
    -webkit-font-smoothing: antialiased;

    color: #66615b;
  }

  body, input, button {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 16px;
  }

  h1, h2, h3, h4 {
    font-weight: 400;
  }

  button {
    cursor: pointer;
  }

  /**
    border-bottom: 1px solid rgba(0,0,0,.125);
  */
`;