const gulp = require('gulp');
const bs = require('browser-sync').get('bs');
const watch = require('gulp-watch');
const plumber = require('gulp-plumber');
const batch = require('gulp-batch');
const merge = require('merge-stream');
const path = require('path');
const _ = require('lodash');
const exec = require('child_process').exec;

const constants = require('../constants');

/**
 * Registers the `gulp watch` task that compiles js, sass, starts browsersync,
 * begins watching templates, js, and sass code respectively, recompiling and
 * refreshing browsersync after changes.
 */
module.exports = () => {

  gulp.task('watch', ['serve'], () => {

    // Creat meh glob patterns.
    const sass = [`templates/**/*.scss`, `!static/**/*.css`];
    const js = [`templates/**/*.{js|ts}`, `!static/**/*.js`];
    const markup = [
      `**/*.(py|jinja|yaml|md)`,
      `static/**/*`,
      `!static/**/*.(min.js|min.css|html)`,
    ];

    // Start watching.
    const sassStream = watch(sass, () => gulp.start(['sass', 'lint:sass']));

    const jsStream = watch(js, () => gulp.start(['js', 'lint:js']));

    const markupStream = watch(markup).on('change', (cb) => {
      gulp.start(['generate']);
      bs.reload();
    });

    return merge([sassStream, jsStream, markupStream]);
  });

};
