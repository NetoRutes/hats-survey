'use strict';
const gulp = require('gulp');
const gulpStylelint = require('gulp-stylelint');
const logger = require('../logger');
/**
 * Registers the `gulp lint:sass` task that lint
 * scss files for common style errors.
 */
module.exports = () => {
  gulp.task('lint:sass', () => {
    return gulp.src([`templates/**/*.scss`]).pipe(
      gulpStylelint({
        reporters: [{ formatter: 'string', console: true }],
      })
    );
  });
};
