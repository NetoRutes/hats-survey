'use strict';

const gulp = require('gulp');
const header = require('gulp-header');

/**
 * Registers the `gulp build` task that build the FE
 */
module.exports = () => {

  // concat header of Closure files
  gulp.task('closure-survey', gulp.series(() => {
    return gulp.src('./src/hats-survey.js')
      .pipe(header('const HaTSSurveyConfig = goog.require(\'hats-survey-config\');\n'))
      .pipe(header('goog.module(\'hats-survey\');\n\n'))
      .pipe(gulp.dest('./dist/closure/'))
  }));

  gulp.task('closure-survey-config', gulp.series(() => {
    return gulp.src('./src/hats-survey-config.js')
      .pipe(header('goog.module(\'hats-survey-config\');\n'))
      .pipe(gulp.dest('./dist/closure/'))
  }));

  // concat header of JS files
  gulp.task('js-survey', gulp.series(() => {
    return gulp.src('./src/hats-survey.js')
      .pipe(header('import {HaTSSurveyConfig} from \'./hats-survey-config.js\';\n\n'))
      .pipe(gulp.dest('./dist/js/'))
  }));

  gulp.task('js-survey-config', gulp.series(() => {
    return gulp.src('./src/hats-survey-config.js')
      .pipe(gulp.dest('./dist/js/'))
  }));

  // Build use in dev and prod.
  gulp.task('build', gulp.series('closure-survey', 'closure-survey-config', 'js-survey', 'js-survey-config'));

};
