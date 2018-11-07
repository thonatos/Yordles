const fs = require('fs-extra');
const path = require('path');
const extend = require('deep-extend');

const cwd = process.cwd();
const workspace = path.normalize(cwd.slice(0, cwd.lastIndexOf('node_modules')));
const nodeModule = path.join(workspace, 'node_modules/yordles');

const DEPS = {
  'cross-env': '^5.2.0',
  easywebpack: '^4.9.3',
  'easywebpack-cli': '^4.0.1',
  'easywebpack-react': '^4.4.0',
  react: '^16.5.1',
  'react-dom': '^16.5.1',
  'react-router': '^4.3.1',
  'react-router-dom': '^4.3.1',
};

const DEPS_DEV = {
  '@babel/core': '^7.1.2',
  '@babel/plugin-proposal-class-properties': '^7.1.0',
  '@babel/plugin-proposal-object-rest-spread': '^7.0.0',
  '@babel/plugin-proposal-decorators': '^7.1.2',
  '@babel/plugin-syntax-dynamic-import': '^7.0.0',
  '@babel/plugin-transform-object-assign': '^7.0.0',
  '@babel/plugin-transform-runtime': '^7.1.0',
  '@babel/preset-env': '^7.1.0',
  '@babel/preset-react': '^7.0.0',
  autoprefixer: '^9.1.5',
  'babel-eslint': '^8.2.6',
  'babel-loader': '^8.0.4',
  'eslint-plugin-react': '^7.11.1',
  'html-webpack-plugin': '^3.2.0',
  less: '^3.8.1',
  'less-loader': '^4.1.0',
  'postcss-less': '^2.0.0',
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

const YORDLES_LOCK = '.yordles';

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

function createLock() {
  const lockFile = path.join(workspace, YORDLES_LOCK);
  fs.ensureFileSync(lockFile);
}

function inject() {
  const lockFile = path.join(workspace, YORDLES_LOCK);

  if (fs.pathExistsSync(lockFile)) {
    console.log(
      `[Yordles] if you need update config, please remove ${YORDLES_LOCK} and try again.`,
    );
    return;
  }

  console.log('[Yordles] inject config.');
  copyFiles();
  ensureDir();
  createLock();

  console.log('[Yordles] update deps.');
  updatePackageJSON();

  console.log('[Yordles] done. Remenber replace files in "__REPLACE__/"');
}

inject();
