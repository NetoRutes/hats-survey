'use strict';

const argv = require('yargs').argv;
const path = require('path');
const util = require('gulp-util');

const compilerPath = 'node_modules/google-closure-compiler/compiler.jar';
const closurePath = 'node_modules/google-closure-library/closure/goog/';
const gluePath = 'node_modules/@google/glue/';
const glueLibPath = `${gluePath}lib/`;
const glueExternsPath = `${gluePath}externs/`;
const externsPath = 'node_modules/google-closure-compiler/contrib/externs/';

const jsSrc = ['templates/**/*.js', '!src/static/**/*.js'];
const tsSrc = ['templates/**/*.ts'];

module.exports = {
  deps: [
    path.join(glueLibPath, '**/*.ts'),
    '!' + path.join(glueLibPath, '**/*_test.ts'),
    `${gluePath}/index.ts`,
  ],
  closureLib: [
    path.join(closurePath, '**/*.js'),
    '!' + path.join(closurePath, '**/*_test.js'),
  ],
  externs: [
    path.join(externsPath, 'angular-1.6.js'),
    path.join(externsPath, 'angular-1.6-q_templated.js'),
    path.join(externsPath, 'angular-1.6-http-promise_templated.js'),
    path.join(externsPath, 'angular-1.6-resource.js'),
    path.join(externsPath, 'google_youtube_iframe.js'),
    path.join(glueExternsPath, 'hammerjs-2.0.2.js'),
  ],
  paths: {
    COMPILER: compilerPath,
    CLOSURE: closurePath,
  },
  jsSrc: [
    {
      entry: './templates/demo-site/index',
      dist: './static/js/index.min.js',
      jsLintSrc: jsSrc,
      tsLintSrc: tsSrc,
      src: jsSrc.concat(tsSrc),
    },
  ],
  sassSrc: [
    {
      src: 'templates/demo-site/index.scss',
      dist: 'static/css',
    },
  ],
  compLevel: 'SIMPLE_OPTIMIZATIONS',
  root: '/',
  isDevMode: !util.env.prod,
  isProdMode: !!util.env.prod,
  startPath: '/',
};
