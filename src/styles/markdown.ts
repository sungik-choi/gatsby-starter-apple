import styled from "styled-components"

import type typography from "./typography"

const Markdown = styled.article<{ rhythm: (typeof typography)["rhythm"] }>`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: var(--font-weight-bold);
  }

  td,
  th {
    border-bottom: 1px solid var(--color-gray-3);
  }

  strong {
    font-weight: var(--font-weight-semi-bold);
  }

  a,
  p {
    font-weight: var(--font-weight-regular);
  }

  a {
    text-decoration: none;
    color: var(--color-blue) !important;
    * {
      color: var(--color-blue) !important;
    }
    &:hover,
    &:active {
      text-decoration: underline;
    }
  }

  & > *:first-child {
    margin-top: 0;
  }

  h1 {
    font-size: 2.5rem;

    @media (max-width: ${({ theme }) => theme.device.sm}) {
      font-size: 2rem;
    }
  }

  h2 {
    font-size: 1.75rem;
    line-height: 1.3;
    margin-bottom: ${({ rhythm }) => rhythm(1)};
    margin-top: ${({ rhythm }) => rhythm(2.25)};

    @media (max-width: ${({ theme }) => theme.device.sm}) {
      font-size: 1.3125rem;
    }
  }

  h3 {
    font-size: 1.31951rem;
    line-height: 1.3;
    margin-bottom: ${({ rhythm }) => rhythm(1)};
    margin-top: ${({ rhythm }) => rhythm(1.5)};

    @media (max-width: ${({ theme }) => theme.device.sm}) {
      font-size: 1.1875rem;
    }
  }

  h4,
  h5,
  h6 {
    margin-bottom: ${({ rhythm }) => rhythm(0.5)};
    margin-top: ${({ rhythm }) => rhythm(1)};
  }

  ul,
  ol {
    margin-top: ${({ rhythm }) => rhythm(1)};
    margin-bottom: ${({ rhythm }) => rhythm(1)};
    margin-left: ${({ rhythm }) => rhythm(1.25)};
  }

  li > ul,
  li > ol {
    margin-top: 0;
    margin-bottom: 0;
  }

  li > p {
    margin-bottom: 0;
  }

  li > ol,
  li > ul {
    margin-left: ${({ rhythm }) => rhythm(1.25)};
  }

  li {
    margin-bottom: ${({ rhythm }) => rhythm(0.3)};
  }

  p,
  li,
  blockquote {
    font-size: 1.0625rem;
  }

  p {
    line-height: 1.68;
    text-align: left;
    margin-bottom: var(--sizing-md);
  }

  hr {
    margin: var(--sizing-lg) 0;
    background: var(--color-gray-3);
  }

  blockquote {
    border-left: 0.25rem solid var(--color-gray-2);
    padding-left: var(--sizing-base);
    margin: var(--sizing-md) 0;
    * {
      color: var(--color-gray-6);
    }
  }

  img {
    display: block;
  }

  pre,
  code {
    font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;
    background-color: var(--color-code-block);
  }

  pre {
    border: 1px solid var(--color-gray-3);
  }

  pre.grvsc-container {
    margin: var(--sizing-md) 0;
  }

  .grvsc-line-highlighted::before {
    background-color: var(--color-code-highlight) !important;
    box-shadow: inset 4px 0 0 0 var(--color-code-highlight-border) !important;
  }

  *:not(pre) > code {
    background-color: var(--color-code);
    padding: 0.2rem 0.4rem;
    margin: 0;
    font-size: 85%;
    border-radius: 3px;
  }
`

export default Markdown
