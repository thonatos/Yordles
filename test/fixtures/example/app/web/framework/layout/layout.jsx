import React, { Component } from 'react';

export default class Layout extends Component {
  render() {
    const { meta, children } = this.props || {};
    const { title, keywords, description } = meta || {};
    return (
      <html>
        <head>
          <title>{title}</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui"
          />
          <meta name="keywords" content={keywords} />
          <meta name="description" content={description} />
          <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        </head>
        <body>
          <div id="app">{children}</div>
        </body>
      </html>
    );
  }
}
