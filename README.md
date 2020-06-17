# UQ User Interface Development Framework (UIDF)

> Documentation for contributors. If you want to *use* the UIDF in your project,
> please visit our docs at: [ui.uq.edu.au](#) **(TODO: confirm domain)**.

--------------------------------------------------------------------------------

## Contents

- [About](#about)
- [Setup instructions](#setup-instructions)
- [Using Storybook as a styleguide for component development](#using-storybook-as-a-styleguide-for-component-development)
- [Creating a new package](./docs/create-a-package.md)
- [Bundling](./docs/bundling.md)
- [Code standards](./docs/standards/standards.md)
  - [CSS standards](./docs/standards/stylesheets.md)
  - [JS standards](./docs/standards/javascript.md)
- [Staff onboarding](./docs/training/onboarding.md)
  - [Storybook for HTML](./docs/training/storybook.md)
  - [Task automation](./docs/training/task-automation.md)
  - [JS packages and registries](./docs/training/javascript-packages.md)
- [Accessibility requirements](./docs/accessibility.md)
- Package docs
  - [`icons`](./packages/icon/MAINTENANCE.md)
  - [`private-design-output`](./packages/private-design-output#readme)
  - [`storybook-html`](./packages/storybook-html#readme)
- [FUTURE] Accessibility testing
- [FUTURE] Visual unit/regression testing
- [FUTURE] Release management
  - Publishing Storybook
  - Publishing packages
- [FUTURE] CI/CD

--------------------------------------------------------------------------------

## About

Developing the UIDF. This project is managed using
[Lerna](https://github.com/lerna/lerna). The target audience of this
documentation is currently limited to ADS-Design members at this stage.

## Setup instructions

1. Install dependencies

> Firstly, you will need [Node](https://nodejs.org/en/) installed on your
> system. We recommended installing the _current_ (not LTS) version for this
> project. If you use Node for other projects, you may want to use
> [NVM](https://github.com/nvm-sh/nvm) to manage different versions.

```shell
$ npm i
```

2. Set up package dependencies w/ Lerna

```shell
$ npx lerna bootstrap
```

**[⬆ back to top](#contents)**

## Using Storybook as a styleguide for component development

1. Change to the `storybook-html` package directory
```shell
$ cd packages/storybook-html
```
2. Run Storybook to launch the application at localhost:6006
```shell
$ npm run storybook
```

**[⬆ back to top](#contents)**
