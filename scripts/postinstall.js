const fs = require('fs-extra');
const path = require('path');

const workspace = process.cwd();
const nodeModule = path.join(workspace, 'node_modules/yordles');

const files = [
  '.babelrc',
  'webpack.config.js',
  'postcss.config.js',
  'test/fixtures/example/app/web/',
];

console.log('[Yordles] inject');

files.forEach(f => {
  const src = path.join(nodeModule, f);
  const target = path.join(workspace, f);

  if (f.startsWith('test')) {
    fs.copySync(src, path.join(workspace, 'app/web'));
    return;
  }

  fs.copySync(src, target);
});

console.log('[Yordles] inject done.');
