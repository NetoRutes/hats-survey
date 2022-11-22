const gulp = require('gulp');
const exec = require('child_process').exec;

module.exports = () => {
  gulp.task('generate', (cb) => {
    exec('python generate.py', function (err, stdout, stderr) {
       console.log(stdout);
       console.log(stderr);
       cb(err);
    });
  });
};
