'use strict';

const path = require('path');

module.exports = appInfo => {
  const config = {};

  config.static = {
    maxAge: 0,
    prefix: '/public/',
    dir: path.join(appInfo.baseDir, 'public'),
  };

  return config;
};
