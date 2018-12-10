# CSS Module

**rule**

```bash
{name}.module.{css|less}
```

**example**

```js
import React, { Component } from 'react';

import './index.css';
import style from './index.module.css';

export default class Yordles extends Component {
  render() {
    const { message } = this.props || {};
    return (
      <div className="container">
        <h3 className={style.title}>{message}</h3>
      </div>
    );
  }
}
```
