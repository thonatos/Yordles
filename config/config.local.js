'use strict';

const path = require('path');
const EasyWebpack = require('easywebpack-react');

module.exports = app => {
  const config = {};

  config.development = {
    watchDirs: ['build'],
    ignoreDirs: ['app/web', 'public', 'config'], // 指定过滤的目录（包括子目录）
  };

  config.reactssr = {
    injectCss: true,
    layout: path.join(app.baseDir, 'app/web/view/layout.html')
  };

  config.webpack = {
    webpackConfigList: EasyWebpack.getWebpackConfig(),
    browser: false,
  };

  return config;
};
