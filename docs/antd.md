# Antd

## Install & Usage

**install**

```bash
npm i antd --save
```

**usage**

```js
// app/web/page/home/index.jsx

import React, { Component } from 'react';
import { Card } from 'antd';
import './index.css';

export default class Yordles extends Component {
  render() {
    const { message } = this.props || {};
    return (
      <div className="container">
        <h3>{message}</h3>
        <Card title="Card title" extra={<a href="#">More</a>} style={{ width: 300 }}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </div>
    );
  }
}
```

## Import on Demand

```js
// .babelrc

{
  "env": {
    // ...
    "web": {
      "plugins": [
        // ...
        [
          "import", {
            "libraryName": "antd",
            "libraryDirectory": "lib",
            "style": true
          },
          "antd"
        ]
      ]
    }
  },
  // ...
}
```

## Customize Theme

```js
// webpack.config.js

module.exports = {
  loaders: {
    less: {
      include: [resolve('app/web'), resolve('node_modules')],
      options: {
        javascriptEnabled: true,
        modifyVars: {
          '@primary-color': '#7646C9',
        },
      },
    },
  },
  // ...
};
```

- [default.less](https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less)
