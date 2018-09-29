# Yordles

> Opinions differ as to where exactly the land of the Yordles is to be found. Some maintain these fey creatures live far to the southeast, beyond a range of impassable mountains. Others claim the Yordles live under grassy green hills or deep in the hearts of impenetrable forests. ——《League Of Legends》

Another isomorphic framework for server-rendered React apps.

[![NPM version][npm-image]][npm-url]
[![All Contributors][contributors-img]][contributors-url]

[contributors-url]: #contributors
[contributors-img]: https://img.shields.io/badge/all_contributors-0-orange.svg?style=flat-square

[npm-url]: https://www.npmjs.com/package/yordles
[npm-image]: https://img.shields.io/npm/v/yordles.svg?style=flat-square


## Quick start

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

# production
$ npm run build
$ npm start
```

## How to Contribute

Please let us know how can we help. Do check out [issues](https://github.com/eggjs/egg/issues) for bug reports or suggestions first.

To become a contributor, please follow our [contributing guide](CONTRIBUTING.md).

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars2.githubusercontent.com/u/958063?v=4" width="60px;"/><br /><sub><b>Suyi</b></sub>](https://www.thonatos.com)<br />[💻](https://github.com/Suyi/Yordles/commits?author=thonatos "Code") | [<img src="https://avatars2.githubusercontent.com/u/4983042?v=4" width="60px;"/><br /><sub><b>sky</b></sub>](https://yuque.com/hubcarl)<br />[💻](https://github.com/Suyi/Yordles/commits?author=hubcarl "Code") | [<img src="https://avatars2.githubusercontent.com/u/16814336?v=4" width="60px;"/><br /><sub><b>ZhengFang</b></sub>](https://github.com/Foveluy)<br />[📢](#talk-Foveluy "Talks") |
| :---: | :---: | :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

## License

[MIT](LICENSE)
