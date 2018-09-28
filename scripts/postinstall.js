const fs = require('fs-extra');
const path = require('path');

const cwd = process.cwd();
const workspace = path.normalize(cwd.slice(0, cwd.lastIndexOf('node_modules')));

const nodeModule = path.join(workspace, 'node_modules/yordles');

console.log(workspace);

function copyFiles() {
  const files = [
    '.babelrc',
    'webpack.config.js',
    'postcss.config.js',
    'app/web/',
  ];

  files.forEach(f => {
    const src = path.join(nodeModule, f);
    let target = path.join(workspace, f);

    if (fs.pathExistsSync(target)) {
      target = path.join(workspace, '_' + f);
    }

    console.log('[copy]', f, target);

    if (f.startsWith('app/web/')) {
      fs.copySync(path.join(nodeModule, 'test/fixtures/example/' + f), target);
      return;
    }

    fs.copySync(src, target);
  });
}

function inject() {
  console.log('[Yordles] inject');
  copyFiles();
  console.log('[Yordles] inject done. Remenber filename with "_${fileName}".');
}

inject();
