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
