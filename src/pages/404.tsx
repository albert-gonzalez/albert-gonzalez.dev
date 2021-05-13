import * as React from "react";
import Layout from "../components/layout/Layout";
import { Helmet, Link, useTranslation } from "gatsby-plugin-react-i18next";
import { graphql } from "gatsby";
import styled from "styled-components";
import image404 from "../images/icons/404.png";

const NotFound = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: ${(props) => props.theme.components.margin};
  text-align: center;

  img {
    margin-bottom: ${(props) => props.theme.components.margin};
  }
`;

// markup
const NotFoundPage = (): JSX.Element => {
  const { t } = useTranslation();
  return (
    <Layout>
      <Helmet title={`Albert González - ${t("404error")}`} />
      <NotFound>
        <img src={image404} />
        <h3>{t("404error")}</h3>
        <h4>
          <Link to="/">{t("goToMainPage")}</Link>
        </h4>
      </NotFound>
    </Layout>
  );
};

export default NotFoundPage;

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
