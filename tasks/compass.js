module.exports = function(grunt) {
  'use strict';
  var helpers = require('grunt-lib-contrib').init(grunt),
      compass = require('./lib/compass').init(grunt);

  grunt.util = grunt.util || grunt.utils;

  grunt.registerMultiTask('compass', 'compass compile', function () {
    var done = this.async(),
        reference = this.data.reference,
        options = this.options ? this.options() : this.data.options,
        args = helpers.optsToArgs(options);

    grunt.util.async.forEachSeries(
      Object.keys(reference), 
      function(dist, next) {
        compass.compileAll(reference[dist], dist, args, function () {
          next();
        });
      },
      done
    );
  });
};
