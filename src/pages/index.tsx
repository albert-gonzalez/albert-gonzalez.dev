import * as React from "react";
import reset from "styled-reset";
import { Bar } from "../components/bar/Bar";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { Hero } from "../components/hero/Hero";
import { lightTheme, Theme } from "../themes/light";
import { graphql } from "gatsby";
import { About } from "../components/section/About";
import { Footer } from "../components/footer/Footer";
import { Helmet } from "gatsby-plugin-react-i18next";
import { Projects } from "../components/section/Projects";
import { Experience } from "../components/section/Experience";

const Global = createGlobalStyle<{ theme: Theme }>`
  ${reset};

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

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
    font-size: 1.3em;
    line-height: 1.6em;
    margin: ${(props) => props.theme.components.margin};
    margin-top: 0;
    text-align: justify;
  }

  a {
    text-decoration: none;
  }
`;
// markup
const IndexPage = (): JSX.Element => (
  <React.Fragment>
    <ThemeProvider theme={lightTheme}>
      <Helmet title="Albert González - Software Developer" />
      <Global />
      <Bar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Footer />
    </ThemeProvider>
  </React.Fragment>
);

export default IndexPage;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
