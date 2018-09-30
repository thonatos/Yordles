const fs = require('fs-extra');
const path = require('path');
const extend = require('deep-extend');

const cwd = process.cwd();
const workspace = path.normalize(cwd.slice(0, cwd.lastIndexOf('node_modules')));
const nodeModule = path.join(workspace, 'node_modules/yordles');

const DEPS = {
  react: '^16.5.1',
  'react-dom': '^16.5.1',
  'react-router': '^4.3.1',
  'react-router-dom': '4.3.1',
};

const DEPS_DEV = {
  autoprefixer: '^9.1.5',
  'babel-plugin-add-module-exports': '^0.2.1',
  'babel-plugin-import': '^1.8.0',
  'babel-plugin-root-import': '^6.1.0',
  'babel-plugin-syntax-dynamic-import': '^6.18.0',
  'babel-plugin-transform-decorators-legacy': '^1.3.5',
  'babel-plugin-transform-object-assign': '^6.22.0',
  'babel-plugin-transform-object-rest-spread': '^6.26.0',
  'babel-preset-env': '^1.6.0',
  'babel-preset-react': '^6.24.1',
  'cross-env': '^5.2.0',
  'easywebpack-cli': '^3.11.3',
  'eslint-plugin-react': '^7.11.1',
  'html-webpack-plugin': '^3.2.0',
  less: '^3.8.1',
  'less-loader': '^4.1.0',
  'postcss-less': '^2.0.0',
  'postcss-scss': '^2.0.0',
  'react-hot-loader': '^4.3.11',
};

const COPY_FILES = [
  '.babelrc',
  '.eslintrc',
  '.eslintignore',
  'webpack.config.js',
  'postcss.config.js',
  'app/web/',
  'app/controller/yordles.js',
  'app/router.js',
];

const ENSURE_DIRS = ['app/view/.gitkeep'];

function copyFiles() {
  COPY_FILES.forEach(f => {
    const src = path.join(nodeModule, f);
    let target = path.join(workspace, f);

    if (fs.pathExistsSync(target)) {
      target = path.join(workspace, '__REPLACE__', f);
    }

    console.log('[copy]', f, target);

    if (f.startsWith('app/')) {
      fs.copySync(path.join(nodeModule, 'test/fixtures/example/' + f), target);
      return;
    }

    fs.copySync(src, target);
  });
}

function ensureDir() {
  ENSURE_DIRS.forEach(d => {
    let target = path.join(workspace, d);

    if (!fs.pathExistsSync(target)) {
      fs.ensureFileSync(target);
    }
  });
}

function updatePackageJSON() {
  const pkgFile = path.join(workspace, 'package.json');
  const backup = path.join(workspace, '_package.json');

  const pkg = fs.readJsonSync(pkgFile);

  // backup
  fs.writeJsonSync(backup, pkg, {
    spaces: 2,
  });

  extend(pkg, {
    dependencies: DEPS,
    devDependencies: DEPS_DEV,
    scripts: {
      build: 'cross-env NODE_ENV=production easywebpack build prod',
    },
    egg: {
      framework: 'yordles',
    },
  });

  // update
  fs.writeJsonSync(pkgFile, pkg, {
    spaces: 2,
  });
}

function inject() {
  console.log('[Yordles] inject config.');
  copyFiles();
  ensureDir();

  console.log('[Yordles] update deps.');
  updatePackageJSON();
  console.log('[Yordles] done. Remenber replace files in "__REPLACE__/"');
}

inject();
