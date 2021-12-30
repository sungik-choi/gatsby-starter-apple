/* eslint-disable no-undef */
const meta = require('./gatsby-meta-config')

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
    plugins: [
      'gatsby-plugin-robots-txt',
      `gatsby-plugin-sitemap`,
      `gatsby-plugin-feed`,
    ],
  },
  plugins: [
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "Src": "src",
          "Components": "src/components",
          "Constants": "src/constants",
          "Hooks": "src/hooks",
          "Images": "src/images",
          "Layouts": "src/layouts",
          "Pages": "src/pages",
          "Posts": "src/posts",
          "Stores": "src/stores",
          "Styles": "src/styles",
          "Templates": "src/templates",
          "Utils": "src/utils",
          "GraphQlTypes": "src/graphqlTypes.ts",
        },
        extensions: [
          "js",
          "ts",
          "tsx",
        ],
      }
    },
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
        name: meta.title,
        short_name: meta.title,
        description: meta.description,
        lang: meta.lang,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: meta.favicon,
        icon_options: {
          purpose: `any maskable`,
        },
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-typescript',
  ],
}
