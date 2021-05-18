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
        localeJsonSourceName: `locale`,
        languages: [`en`, `es`, `ca`],
        defaultLanguage: `en`,
        i18nextOptions: {
          interpolation: {
            escapeValue: false,
          },
          keySeparator: false,
          nsSeparator: false,
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-ECWE3HNDPM", // Google Analytics / GA
        ],
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
        },
        pluginConfig: {
          head: false,
          respectDNT: true,
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
