import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const CenteredImg = ({ src, alt }) => {
  const data = useStaticQuery(graphql`
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
  `);

  const image = data.allImageSharp.edges.find((edge) => edge.node.id === src);

  if (!alt) alt = 'Thumbnail Image';

  return (
    <ThumbnailWrapper>
      <InnerWrapper>
        <Img alt={alt} fluid={{ ...image.node.fluid, aspectRatio: 16 / 9 }} />
      </InnerWrapper>
    </ThumbnailWrapper>
  );
};

export const ThumbnailWrapper = styled.div`
  position: relative;
  width: 100%;
  &::after {
    content: '';
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
`;

const InnerWrapper = styled.div`
  overflow: hidden;
`;

export default CenteredImg;
