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

const Global = createGlobalStyle<{ theme: Theme }>`
  ${reset};

  body {
    font-family: Arial, Helvetica, sans-serif;
    min-height: 100vh;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    background-color: ${(props) => props.theme.colors.lightGray}
  }

  h2,
  h3 {
    margin: ${(props) => props.theme.components.margin};
  }

  h2 {
    font-size: 2.5em;
  }

  h3 {
    font-size: 1.8em;
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
