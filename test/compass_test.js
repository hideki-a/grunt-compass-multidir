var grunt = require('grunt');

exports.compass = {
  compile: function (test) {
    'use strict';
    test.expect(1);

    var scss = grunt.file.read('tmp/test.css'),
        expected = grunt.file.read('test/expected/test.css');

    test.equal(scss, expected, 'Compile SCSS to CSS.');
    test.done();
  }
};