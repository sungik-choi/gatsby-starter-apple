const meta = require("./gatsby-meta-config")

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
    postTitle: "All",
    menuLinks: [
      {
        link: "/",
        name: "Home",
      },
      {
        link: "/about/",
        name: "About",
      },
      {
        link: meta.links.github,
        name: "Github",
      },
    ],
  },
  plugins: [
    {
      resolve: "gatsby-plugin-alias-imports",
      options: {
        alias: {
          Src: "src",
          Components: "src/components",
          Constants: "src/constants",
          Hooks: "src/hooks",
          Images: "src/images",
          Layouts: "src/layouts",
          Pages: "src/pages",
          Posts: "src/posts",
          Stores: "src/stores",
          Styles: "src/styles",
          Templates: "src/templates",
          Types: "src/types",
          Utils: "src/utils",
        },
        extensions: ["js", "ts", "tsx"],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "src/styles/typography",
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-copy-linked-files",
          `gatsby-remark-copy-linked-files`,
          {
            resolve: "gatsby-remark-vscode",
            options: {
              theme: {
                default: "Github Light Theme",
                parentSelector: {
                  "body[data-theme=dark]": "Dark Github",
                },
              },
              extensions: ["vscode-theme-github-light", "dark-theme-github"],
            },
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: meta.title,
        short_name: meta.title,
        description: meta.description,
        lang: meta.lang,
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#ffffff",
        display: "standalone",
        icon: meta.favicon,
        icon_options: {
          purpose: "any maskable",
        },
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ "content:encoded": edge.node.html }],
                })
              })
            },
            query: `
              {
                allMarkdownRemark(
                  filter: { fileAbsolutePath: { regex: "/(posts/blog)/" } }
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { slug }
                      frontmatter {
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: `${meta.title}'s RSS Feed`,
          },
        ],
      },
    },
    "gatsby-plugin-sitemap",
    "gatsby-plugin-robots-txt",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-offline",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-typescript",
  ],
}
