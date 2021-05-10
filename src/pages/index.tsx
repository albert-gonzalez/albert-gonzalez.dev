import * as React from "react";
import { Reset } from "styled-reset";
import { Bar } from "../components/bar/Bar";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { Hero } from "../components/hero/Hero";
import { lightTheme } from "../themes/light";
import { graphql } from "gatsby";
import { About } from "../components/section/About";
import { Footer } from "../components/footer/Footer";

const Global = createGlobalStyle`
  body {
    font-family: Arial, Helvetica, sans-serif;
    min-height: 100vh;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
  }
`;
// markup
const IndexPage = () => (
  <React.Fragment>
    <ThemeProvider theme={lightTheme}>
      <Reset />
      <Global />
      <Bar />
      <Hero />
      <About />
      <Footer />
    </ThemeProvider>
  </React.Fragment>
);

export default IndexPage;

export const query = graphql`
  query($language: String!) {
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
