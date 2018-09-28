import React, { Component } from 'react';
import { render } from 'react-dom';

if (typeof window === 'object') {
  const state = window.__INITIAL_STATE__;
  render(<div {...state} name="app" />, document.getElementById('app'));
} else {
  module.exports = null;
}
