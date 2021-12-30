import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import type { Query, ImageSharpFluid } from "Types/GraphQL"
import type { DeepNonNullable } from "Types/Utils"
import type Post from "Types/Post"

interface CenteredImgProps extends Pick<Post, "alt"> {
  src: Post["thumbnail"]
}

const DEFAULT_ALT = "Thumbnail Image"

const CenteredImg: React.FC<CenteredImgProps> = ({ src, alt }) => {
  const data = useStaticQuery<Query>(graphql`
    query {
      allImageSharp {
        edges {
          node {
            id
            fluid {
              ...GatsbyImageSharpFluid
              originalName
            }
          }
        }
      }
    }
  `)

  const image = data.allImageSharp.edges.find(edge => edge.node.id === src)
  const fluid = image?.node.fluid as DeepNonNullable<ImageSharpFluid>

  if (!alt) alt = DEFAULT_ALT

  return (
    <ThumbnailWrapper>
      <InnerWrapper>
        <Img alt={alt} fluid={{ ...fluid, aspectRatio: 16 / 9 }} />
      </InnerWrapper>
    </ThumbnailWrapper>
  )
}

export const ThumbnailWrapper = styled.div`
  position: relative;
  width: 100%;
  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    background-color: var(--color-dimmed);
    transition: 0.3s ease;
  }
`

const InnerWrapper = styled.div`
  overflow: hidden;
`

export default CenteredImg
