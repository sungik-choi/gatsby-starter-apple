import React, { useMemo } from "react"

import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import type { IGatsbyImageData } from "gatsby-plugin-image"
import styled from "styled-components"

import type Post from "~/src/types/Post"

interface CenteredImgProps extends Pick<Post, "alt"> {
  src: Post["thumbnail"]
}

const DEFAULT_ALT = "Thumbnail Image"

const CenteredImg: React.FC<CenteredImgProps> = ({ src, alt }) => {
  const data = useStaticQuery<Queries.Query>(graphql`
    query CenteredImg {
      allImageSharp {
        edges {
          node {
            id
            gatsbyImageData(
              layout: CONSTRAINED
              aspectRatio: 1.77
              placeholder: BLURRED
            )
          }
        }
      }
    }
  `)

  const image = useMemo(() => {
    const imageSharp = data.allImageSharp.edges.find(
      edge => edge.node.id === src
    )
    return imageSharp?.node.gatsbyImageData as IGatsbyImageData
  }, [src, data.allImageSharp.edges])

  return (
    <ThumbnailWrapper>
      <InnerWrapper>
        <GatsbyImage image={image} loading="eager" alt={alt ?? DEFAULT_ALT} />
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

export default React.memo(CenteredImg)
