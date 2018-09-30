# Quick Start

## Init application

```bash
$ npm i egg-init -g
$ egg-init egg-example --type=simple
$ cd egg-example
$ npm i
```

## Install yordles

```bash
$ npm install --save yordles
$ npm i
```

> Please update your rules or configiration for eslint/postcss/webpack. files can be found under `__REPLACE__/`.

## Add page/controller

- controller

```js
'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    await ctx.render('yordles/index.js', {
      message: 'Hello Yordles.',
    });
  }
}

module.exports = HomeController;
```

- page

```js
import React, { Component } from 'react';

import './index.css';
export default class Home extends Component {
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
