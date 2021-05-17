module.exports = {
  pathPrefix: "/albert-gonzalez.dev",
  siteMetadata: {
    title: "Albert González - Software Developer",
    description: "Site about Albert González and his projects",
    url: "https://albert-gonzalez.dev",
    twitterUsername: "@vacilone",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-typescript",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/locales`,
        name: `locale`,
      },
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locale`, // name given to `gatsby-source-filesystem` plugin.
        languages: [`en`, `es`, `ca`],
        defaultLanguage: `en`,
        // if you are using Helmet, you must include siteUrl, and make sure you add http:https
        //siteUrl: `https://example.com/`,
        // you can pass any i18next options
        // pass following options to allow message content as a key
        i18nextOptions: {
          interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
          },
          keySeparator: false,
          nsSeparator: false,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Albert González - Software Developer`,
        short_name: `Albert González`,
        start_url: `/`,
        icon: "src/images/icons/favicon.png",
      },
    },
  ],
};
