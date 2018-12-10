'use strict';

const path = require('path');
const resolve = (filepath) => path.resolve(__dirname, filepath);

module.exports = {
  egg: true,
  framework: 'react',
  devtool: 'source-map',
  entry: {
    include: [
      'app/web/page',
    ],
    exclude: [],
    loader: {
      client: 'app/web/framework/entry/client-loader.js',
      server: 'app/web/framework/entry/server-loader.js',
    },
  },
  alias: {
    '~': 'app/web',
  },
  dll: ['react', 'react-dom', 'react-router', 'react-router-dom'],
  loaders: {
    eslint: true,
    babel: {
      include: [resolve('app/web'), resolve('node_modules')],
    },
    less: {
      include: [resolve('app/web'), resolve('node_modules')],
      options: {
        javascriptEnabled: true,
        modifyVars: {},
      },
    },    
  },
  plugins: {
    imagemini: false,    
  },

  done() {
    console.log('---webpack compile finish---');
  },
};
