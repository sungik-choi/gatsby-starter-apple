# Gatsby Starter Apple

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![semantic-release: angular](https://img.shields.io/badge/semantic--release-angular-e10079?logo=semantic-release)](https://github.com/semantic-release/semantic-release)
[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fsungik-choi%2Fgatsby-starter-apple&count_bg=%23FC2350&title_bg=%23555555&icon=gatsby.svg&icon_color=%23E7E7E7&title=HITS&edge_flat=false)](https://hits.seeyoufarm.com)

**Gatsby blog starter kit with beautiful responsive design**

![Screenshot](.github/screenshot.png)

## 🍎 Demo

👉 **View [Demo Page](https://apple.gatsbyjs.io/)**

## ✨ Features

- Lighthouse 100 + PWA
- styled-components
- Apple style responsive design
- Prefect dynamic theme (Comment + Code highlight)
- Beautiful mobile menu animation
- Code highlighting with [gatsby-remark-vscode](https://github.com/andrewbranch/gatsby-remark-vscode)
- [Utterances](https://utteranc.es/) Comment
- Categories support
- Infinite Scroll with Intersection Observer
- RSS Feed
- SEO
- Offline support
- Prettier & ESLint

## 🚀 Quick Start

### 1. Create a Gatsby site

Use the Gatsby CLI to create a new site, specifying the blog starter.

```shell
# create a new Gatsby site using the blog starter
gatsby new my-blog-starter https://github.com/sungik-choi/gatsby-starter-apple
```

### 2. Start developing

Navigate into your new site’s directory and start it up.

```shell
cd my-blog-starter/
gatsby develop
```

### 3. Open the source code and start editing

Your site is now running at `http://localhost:8000`!

_Note: You'll also see a second link:_`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.com/tutorial/part-five/#introducing-graphiql)._

Open the `my-blog-starter` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

### 4. Fix meta data

Open **`gatsby-meta-config.js`** and fix meta data of your blog.

```js
module.exports = {
  title: "Dev Ed", // Your website title
  description: `Ed's Blog`, // Your website description
  author: "Ed", // Maybe your name
  siteUrl: "https://gatsby-starter-apple.netlify.app", // Your website URL
  lang: "en", // Language
  utterances: "sungik-choi/gatsby-starter-apple-comment", // Github repository to store comments
  links: {
    github: "https://github.com/sungik-choi/gatsby-starter-apple", // Your github repository
  },
  icon: "src/images/icon.png", //  Favicon Path
}
```
