import React from "react"

import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

import SEO from "~/src/components/seo"
import Layout from "~/src/layouts/layout"
import Markdown from "~/src/styles/markdown"
import { rhythm } from "~/src/styles/typography"

const About = () => {
  const data = useStaticQuery<Queries.Query>(graphql`
    query About {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/about/" } }) {
        edges {
          node {
            html
          }
        }
      }
    }
  `)

  const markdown = data.allMarkdownRemark.edges[0].node.html

  return (
    <Layout>
      <SEO title="About" />
      <Container
        dangerouslySetInnerHTML={{ __html: markdown ?? "" }}
        rhythm={rhythm}
      ></Container>
    </Layout>
  )
}

const Container = styled(Markdown).attrs({
  as: "main",
})`
  width: var(--post-width);
  margin: 0 auto;
  margin-top: 80px;
  margin-bottom: 6rem;

  @media (max-width: ${({ theme }) => theme.device.sm}) {
    margin-top: var(--sizing-xl);
    width: 87.5%;
  }

  h1 {
    margin-bottom: 2rem;
  }

  h2 {
    margin-top: var(--sizing-lg);

    @media (max-width: ${({ theme }) => theme.device.sm}) {
      font-size: 1.75rem;
    }
  }

  h3 {
    @media (max-width: ${({ theme }) => theme.device.sm}) {
      font-size: 1.25rem;
    }
  }
`

export default About
