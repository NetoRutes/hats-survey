'use strict';

var path = require('path');
var recursiveReadSync = require('recursive-readdir-sync');

/**
 * Reads the gulp directory and requires every js file to register tasks.
 */
recursiveReadSync('./gulp/tasks')
    .filter(file => path.extname(file) === '.js')
    .forEach(file => require(path.join(__dirname, file))());

