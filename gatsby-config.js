const meta = require('./gatsby-meta-config');

module.exports = {
  siteMetadata: {
    title: meta.title,
    description: meta.description,
    author: meta.author,
    siteUrl: meta.siteUrl,
    lang: meta.lang,
    utterances: {
      repo: meta.utterances,
    },
    postTitle: 'All',
    menuLinks: [
      {
        link: '/',
        name: 'Home',
      },
      {
        link: '/about/',
        name: 'About',
      },
      {
        link: meta.links.github,
        name: 'Github',
      },
    ],
    plugins: ['gatsby-plugin-robots-txt', `gatsby-plugin-sitemap`],
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/styles/typography`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-copy-linked-files`,
          {
            resolve: `gatsby-remark-vscode`,
            options: {
              theme: {
                default: 'Github Light Theme',
                parentSelector: {
                  'body[data-theme=dark]': 'Dark Github',
                },
              },
              extensions: ['vscode-theme-github-light', 'dark-theme-github'],
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: meta.name,
        short_name: meta.name,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: meta.icon,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-alias-imports`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
  ],
};
