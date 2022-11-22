'use strict';

const eslint = require('gulp-eslint');
const gulp = require('gulp');
const _ = require('lodash');
const constants = require('../constants');

/**
 * Registers the `gulp lint` task that lints js and ts files for style errors.
 */
module.exports = function() {
  const globs = ['gulp/**/*.[js]'];
  _.each(constants.jsSrc, (srcObj) => {
    globs.push(...srcObj.jsLintSrc);
  });
  gulp.task('lint:js', function() {
    return gulp.src(globs)
        .pipe(eslint('.eslintrc'))
        .pipe(eslint.format());
  });
};