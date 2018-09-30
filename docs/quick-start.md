# Quick Start

## Init application

```bash
$ npm i egg-init -g
$ egg-init mojito --type=simple
$ cd mojito
$ npm install --save yordles
$ npm i
```

> Please update your rules or configiration for eslint/postcss/webpack. files can be found under `__REPLACE__/`.

## Add page/controller

- controller

```js
'use strict';

const Controller = require('egg').Controller;

class YordlesController extends Controller {
  async index() {
    const { ctx } = this;
    await ctx.render('yordles/index.js', {
      message: 'Hello Yordles.',
    });
  }
}

module.exports = YordlesController;
```

- page

```js
import React, { Component } from 'react';

import './index.css';
export default class Yordles extends Component {
  render() {
    const { message } = this.props || {};
    return (
      <div className="container">
        <h3>{message}</h3>
      </div>
    );
  }
}
```

## Run application

```bash
# dev
$ npm run dev

# production
$ npm run build
$ npm start
```

After that, navigate to http://localhost:7001/
