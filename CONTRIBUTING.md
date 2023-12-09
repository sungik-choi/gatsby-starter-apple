# Contributing to gatsby-starter-apple

Welcome to gatsby-starter-apple. We want to make contributing to this project as easy and transparent as possible, whether it's:

- Reporting a bug
- Discussing the current state of the code
- Submitting a fix
- Proposing new features
- Becoming a maintainer

## We Develop with GitHub

We use GitHub to host code, to track issues and feature requests, as well as accept pull requests.

## Make Pull request

We actively welcome your pull requests:

1. Fork the repo and create your branch from `main`.
2. Make sure your code lints.
3. (Recommended) Commit with [commitizen(cz-cli)](https://github.com/commitizen/cz-cli).

   1. Install commitizen globally.

      ```bash
      yarn dlx commitizen
      ```

   2. Commit with commitizen.

      ```bash
      git cz
      ```

4. Push to your forked repository.
5. Issue that pull request (from forked repository to origin).

## Commit Convention

We are using commitizen as described above.
In more detail, it follows the [AngularJS's commit message convention](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#type). You will add what kind of commit belongs to using the commitizen, and the types are as follows.

- feat: A new feature
- fix: A bug fix
- docs: Documentation only changes
- style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- refactor: A code change that neither fixes a bug nor adds a feature
- perf: A code change that improves performance
- test: Adding missing or correcting existing tests
- chore: Changes to the build process or auxiliary tools and libraries such as documentation generation

## License

See [LICENSE](./LICENSE).

## References

This document was adapted from the open-source contribution guidelines for [Facebook's Draft](https://github.com/facebook/draft-js/blob/7b2a6168e651f3a27a0665d43e596d987341b06f/CONTRIBUTING.md)
