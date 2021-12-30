---
title: "Getting Started"
category: "Instruction"
date: "2020-03-01 12:00:00 +09:00"
desc: "Let's start making blogs step by step!"
thumbnail: "./images/getting-started/thumbnail.jpg"
alt: "apple and shaking hands"
---

## Add Post

### Set Front matter

```md
---
title: "Getting Started"  // Post title
category: "Instruction"   // Post category
date: "2020-03-01 12:00:00 +09:00"  // Current time
desc: "Let's start making blogs step by step!"  // Post desc
thumbnail: "./images/getting-started/thumbnail.jpg" // Post thumbnail
alt: "apple and shaking hands"  // [optional] thumbnail image alt
---
```

- _NOTE_ : Properties other than alt must be required.

## Edit About Page

Easy. You can modify the `blog/about.md` file. If you need additional styling, give an id or class to a specific element in `about.md` and try to control it in the `pages/about.js` file.

An example is shown below.

### blog/about.md

```md
<h2 id="title">Hello</h2>
```

### pages/about.js

```js
const About = () => {
  /* ... */
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

  /* You can Add Additional Styling here */

  #title {
    font-size: 60px;
  }
`

export default About
```

## Other Customization

You can freely customize each componentfile using the styled-component. If you want to change the style globally, you can change the `styles/globalStyle` file.

Thank you for using `gatsby-starter-apple`. If you have any questions, please leave them on this **[link](https://github.com/sungik-choi/gatsby-starter-apple/issues).**
