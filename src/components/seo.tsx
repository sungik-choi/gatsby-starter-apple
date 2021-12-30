import React from "react"
import { Helmet } from "react-helmet"
import useSiteMetadata from "Hooks/useSiteMetadata"
import defaultOpenGraphImage from "../images/og-default.png"

const DEFAULT_LANG = "en"

const SEO = ({ description = "", meta = [], image = null, title }) => {
  const site = useSiteMetadata()
  const metaDescription = description || site.description
  const ogImageUrl = site.siteUrl + (image || defaultOpenGraphImage)

  return (
    <Helmet
      htmlAttributes={{ lang: site.lang ?? DEFAULT_LANG }}
      title={title}
      titleTemplate={`%s | ${site.title}`}
      meta={[
        {
          name: "description",
          content: metaDescription,
        },
        {
          property: "og:title",
          content: title,
        },
        {
          property: "og:description",
          content: metaDescription,
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          name: "twitter:card",
          content: "summary",
        },
        {
          name: "twitter:creator",
          content: site.author,
        },
        {
          name: "twitter:title",
          content: title,
        },
        {
          name: "twitter:description",
          content: metaDescription,
        },
        {
          property: "image",
          content: ogImageUrl,
        },
        {
          property: "og:image",
          content: ogImageUrl,
        },
        {
          property: "twitter:image",
          content: ogImageUrl,
        },
      ].concat(meta)}
    />
  )
}

export default SEO
