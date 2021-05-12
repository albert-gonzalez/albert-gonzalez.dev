import * as React from "react";
import { graphql } from "gatsby";
import { About } from "../components/section/About";
import { Footer } from "../components/footer/Footer";
import { Projects } from "../components/section/Projects";
import { Experience } from "../components/section/Experience";
import Layout from "../components/layout/Layout";
import { Hero } from "../components/hero/Hero";

const IndexPage = (): JSX.Element => (
  <Layout>
    <Hero />
    <About />
    <Projects />
    <Experience />
  </Layout>
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
