# Yordles

> Opinions differ as to where exactly the land of the Yordles is to be found. Some maintain these fey creatures live far to the southeast, beyond a range of impassable mountains. Others claim the Yordles live under grassy green hills or deep in the hearts of impenetrable forests. ——《League Of Legends》

Anothter isomorphic framework for server-rendered React apps.

[![NPM version][npm-image]][npm-url]

[npm-image]: https://img.shields.io/npm/v/yordles.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/yordles

## TODO

> add example, docs.

## Usage

- init egg

```bash
$ npm i egg-init -g
$ egg-init egg-example --type=simple
$ cd egg-example
$ npm i
```

- install yordles

```bash
$ npm install --save yordles
```

> Please update your rules or configiration for eslint/postcss/webpack. files can be found under `__REPLACE__/`.

- update deps

```bash
$ npm i
```

- change controller

```js
'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    await ctx.render('home/index.js', {
      msg: 'Hello Yordles.',
    });
  }
}

module.exports = HomeController;
```

- run app

```bash
# dev
$ npm run dev

# product
$ npm run build
$ npm start
```

## How to Contribute

Please let us know how can we help. Do check out [issues](https://github.com/eggjs/egg/issues) for bug reports or suggestions first.

To become a contributor, please follow our [contributing guide](CONTRIBUTING.md).

## License

[MIT](LICENSE)
