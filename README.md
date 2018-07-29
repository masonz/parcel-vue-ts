# parcel-vue-ts 📦

[![Build Status][travis-image]][travis-url]
[![codecov][codecov-image]][codecov-url]
[![standard][standard-image]][standard-url]

> Boilerplate for Vue.js & Typescript, base on Parcel bundler.

|                Name                 |     Status      | Description  |
| :---------------------------------: | :-------------: | :----------- |
|      [@parcel-vue-ts/cli][cli]      |   ![cli-npm]    | command line |
| [@parcel-vue-ts/template][template] | ![template-npm] | template     |

[cli]: https://github.com/masonz/parcel-vue-ts/tree/master/packages/cli
[cli-npm]: https://img.shields.io/npm/v/@parcel-vue-ts/cli.svg
[template]: https://github.com/masonz/parcel-vue-ts/tree/master/packages/template
[template-npm]: https://img.shields.io/npm/v/@parcel-vue-ts/template.svg

## What's inside? 🗃

* [Vue2](https://github.com/vuejs/vue)
* [Vue-Router](https://github.com/vuejs/vue-router)
* [Vuex](https://github.com/vuejs/vuex)
* [Typescript](https://github.com/Microsoft/TypeScript)
* [Jest](https://github.com/facebook/jest)
* [Parcel bundler](https://github.com/parcel-bundler/parcel)

## Getting Started 🚀

### Install

```
npm install -g @parcel-vue-ts/cli
```

### Usage

```
mkdir demo
cd demo
parcel-vue-ts       // init project...
npm install
```

### Development

```
npm run dev
```

Parcel has a development server built in, which will automatically rebuild your app as you change files and supports hot module replacement for fast development.

### Production

```
npm run build
```

When you build production, parcel defaults to enable miniatation.

### Unit tests

```
npm run test:unit
```

Unit test the code using jest,and you can run through `npm run test:coverage` to get the test coverage.

### Demo

You can preview the result by: https://masonz.github.io/parcel-vue-ts/

## License

[MIT](https://github.com/masonz/parcel-vue-ts/blob/master/LICENSE) © masonz

[travis-image]: https://travis-ci.org/masonz/parcel-vue-ts.svg?branch=master
[travis-url]: https://travis-ci.org/masonz/parcel-vue-ts
[codecov-image]: https://codecov.io/gh/masonz/parcel-vue-ts/branch/master/graph/badge.svg
[codecov-url]: https://codecov.io/gh/masonz/parcel-vue-ts
[standard-image]: https://img.shields.io/badge/code_style-standard-brightgreen.svg
[standard-url]: https://github.com/standard/standard
