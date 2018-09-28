'use strict';

const EasyWebpack = require('easywebpack-react');

module.exports = () => {
  const config = {};

  config.development = {
    watchDirs: ['build'],
    ignoreDirs: ['app/web', 'public', 'config'], // 指定过滤的目录（包括子目录）
  };

  config.reactssr = {
    injectCss: true,
  };

  config.webpack = {
    webpackConfigList: EasyWebpack.getWebpackConfig(),
  };

  return config;
};
