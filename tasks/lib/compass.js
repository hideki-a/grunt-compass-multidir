exports.init = function (grunt) {
  'use strict';
  var exports = {};

  grunt.util = grunt.util || grunt.utils;

  exports.compileAll = function (sassDir, cssDir, args, callback) {
    var dirOption = ['--css-dir', cssDir, '--sass-dir', sassDir],
        compass,
        childProcess = require('child_process');

    compass = grunt.util.spawn({
      cmd: 'compass',
      args: ['compile'].concat(dirOption).concat(args)
    }, function (err, stdout, stderr) {
      if (stderr && grunt.config('growl').notify) {
        childProcess.exec('growlnotify -t "Grunt Compass Task" -m "Compile Error"');
      }
    });

    compass.stdout.pipe(process.stdout);
    compass.stderr.pipe(process.stderr);
    compass.on('exit', function () {
      callback();
    });
  };

  return exports;
};