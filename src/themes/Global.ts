import { createGlobalStyle } from "styled-components";
import { Theme } from "./light";
import reset from "styled-reset";

export const Global = createGlobalStyle<{ theme: Theme }>`
  ${reset};

  body {
    font-family: Arial, Helvetica, sans-serif;
    min-height: 100vh;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    background-color: ${(props) => props.theme.colors.lightGray}
  }

  h2,
  h3,
  h4, h5 {
    margin: ${(props) => props.theme.components.margin};
    font-weight: bold;
  }

  h2 {
    font-size: 2.2em;
  }

  h3 {
    font-size: 1.8em;
  }

  h4 {
    font-size: 1.5em;
  }

  h5 {
    font-size: 1.3em;
  }

  p {
    text-align: justify;
    margin: ${(props) => props.theme.components.margin};
  }

  p, li {
    font-size: 1.2em;
    line-height: 1.6em;
    margin-top: 0;
  }

  ul {
    list-style-type: square;
    margin: ${(props) => props.theme.components.margin};
    margin-top: 0;
  }

  li {
      margin-left: 2em;
      margin-bottom: 10px;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.secondary};
  }
`;
