import React from "react";
import { Helmet } from "gatsby-plugin-react-i18next";
import { graphql, useStaticQuery } from "gatsby";

interface SeoInput {
  title: string;
  description: string;
  image?: string;
}

const Seo = ({ title, description = "", image }: SeoInput): JSX.Element => {
  const { site } = useStaticQuery(query);

  image = `${site.siteMetadata.siteUrl}${image}`;
  return (
    <Helmet title={title} description={description} image={image}>
      <meta name="description" content={description} />
      <meta name="image" content={image} />
      <meta name="author" content="Albert González" />
      <meta property="og:type" content="Website" />
      {description && <meta property="og:description" content={description} />}
      {image && <meta property="og:image" content={image} />}
      {description && <meta name="twitter:description" content={description} />}
      {image && <meta name="twitter:image" content={image} />}
    </Helmet>
  );
};

export default Seo;

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        siteUrl: url
      }
    }
  }
`;
