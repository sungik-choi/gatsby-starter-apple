import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"

const GlobalStyle = createGlobalStyle`
  ${reset}

  :root {
    font-size: 100%;

    --width: 980px;
    --min-width: 320px;
    --post-width: 650px;
    --nav-height: 54px;
    --footer-height: 60px;

    --grid-gap-sm: 10px;
    --grid-gap-lg: 24px;
    --grid-gap-xl: 36px;

    --padding-sm: 16px;
    --padding-lg: 22px;

    --border-radius-sm: 6px;
    --border-radius-base: 8px;
    --border-radius-lg: 28px;

    --sizing-xs: 4px;
    --sizing-sm: 8px;
    --sizing-base: 16px;
    --sizing-md: 24px;
    --sizing-lg: 40px;
    --sizing-xl: 64px;

    --text-xs: 0.625rem;
    --text-sm: 0.75rem;
    --text-base: 1rem;
    --text-md: 1.125rem;
    --text-title: 1.25rem;
    --text-lg: 1.5rem; 
    --text-xl: 3rem;

    --device-xs-max-width: 419px;
    --device-sm-max-width: 767px;
    --device-md-max-width: 1023px;
    --device-lg-max-width: 1441px;

    --device-xs-max-width-query: (max-width: 419px);
    --device-sm-max-width-query: (max-width: 767px);
    --device-md-max-width-query: (max-width: 1023px);
    --device-lg-max-width-query: (max-width: 1441px);

    --font-weight-regular: 400;
    --font-weight-medium: 500;
    --font-weight-semi-bold: 600;
    --font-weight-bold: 700;
    --font-weight-extra-bold: 800;

    --color-outline: rgba(0,125,250,0.6);

    body.light {
      --color-text: #1d1d1d;
      --color-text-2: #1d1d1d;
      --color-text-3: #696969;
      --color-white: #ffffff;
      --color-nav-bar: rgba(255, 255, 255, 0.7);
      --color-nav-border: rgba(200, 200, 200, 0.7);
      --color-category-button: #f2f2f2;
      --color-background: #f2f2f2;
      --color-post-background: #ffffff;
      --color-card: #ffffff;
      --color-code: #f2f2f2;
      --color-code-block: #fafafa;
      --color-code-highlight: rgba(0, 0, 0, 0.05);
      --color-code-highlight-border: rgba(0, 0, 0, 0.2);
      --color-gray-1: #f2f2f2;
      --color-gray-2: #e0e0e0;
      --color-gray-3: #d1d1d1;
      --color-gray-4: #868686;
      --color-gray-5: #6e6e6e;
      --color-gray-6: #696969;
      --color-divider: rgba(0, 0, 0, 0.15);
      --color-dimmed: rgba(0, 0, 0, 0.15);
      --color-floating-button: rgba(255, 255, 255, 0.7);
      --color-floating-button-hover: rgba(50, 50, 50, 0.7);
      --color-floating-button-border: rgba(230, 230, 230, 0.7);
      --color-floating-button-border-hover: rgba(255, 255, 255, 0.2);
      --color-floating-button-text: #202020;
      --color-floating-button-text-hover: #f2f2f2;
      --color-floating-button-shadow: rgba(0, 0, 0, 0.2);
      --color-floating-button-shadow-hover: rgba(0, 0, 0, 0.4);
      --color-blue: #0066cc;
      --color-icon: #2c2c2c;
    }

    body.dark {
      --color-text: #e6e6e6;
      --color-text-2: #d1d1d1;
      --color-text-3: #8c8c8c;
      --color-white: #e6e6e6;
      --color-nav-bar: rgba(29, 29, 29, 0.7);
      --color-nav-border: rgba(255, 255, 255, 0.2);
      --color-category-button: #484848;
      --color-background: #1c1c1c;
      --color-post-background: #1c1c1c;
      --color-card: #2c2c2c;
      --color-code: #3a3a3a;
      --color-code-block: #242424;
      --color-code-highlight: rgba(255, 255, 255, 0.05);
      --color-code-highlight-border: rgba(255, 255, 255, 0.2);
      --color-gray-1: #1c1c1c;
      --color-gray-2: #2c2c2c;
      --color-gray-3: #3a3a3a;
      --color-gray-4: #484848;
      --color-gray-5: #646464;
      --color-gray-6: #868686;
      --color-divider: rgba(255, 255, 255, 0.15);
      --color-dimmed: rgba(0, 0, 0, 0.15);
      --color-floating-button: rgba(50, 50, 50, 0.7);
      --color-floating-button-hover: rgba(255, 255, 255, 0.7);
      --color-floating-button-border: rgba(255, 255, 255, 0.2);
      --color-floating-button-border-hover: rgba(230, 230, 230, 0.7);
      --color-floating-button-text: #d1d1d1;
      --color-floating-button-text-hover: #202020;
      --color-floating-button-shadow: rgba(0, 0, 0, 0.4);
      --color-floating-button-shadow-hover: rgba(0, 0, 0, 0.4);
      --color-blue: #0a84ff;
      --color-icon: #d1d1d1;
    }
  }

  html, body, #___gatsby, #gatsby-focus-wrapper {
    min-height: 100%;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
    background-color: var(--color-post-background);
    -webkit-font-smoothing: antialiased;

    * {
      color: var(--color-text);
    }
  }

  :lang(ko) {
    word-break: keep-all; 
  }

  ul, ol, li, dl, dt, dd, h1, h2, h3, h4, h5, h6, hgroup, p, blockquote, figure, form, fieldset, input, legend, pre, abbr, button {
    margin: 0;
    padding: 0;
  }

  h1 a, li a  {
    text-decoration: none;
  }

  a {
    text-decoration: none;
  }

  *:focus:not(:focus-visible) {
    outline: none;
  }

  :focus-visible {
    outline: 4px solid var(--color-outline);
    outline-offset: 1px;
  }

  .js-focus-visible :focus:not(.focus-visible) {
    outline: none;
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(1px, 1px, 1px, 1px);
    white-space: no-wrap;
  }
`

export default GlobalStyle
