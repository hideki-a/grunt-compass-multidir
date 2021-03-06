# grunt-compass-multidir  [![Build Status](https://secure.travis-ci.org/hideki-a/grunt-compass-multidir.png?branch=master)](http://travis-ci.org/hideki-a/grunt-compass-multidir)

Compile sass with multiple directories.

## Getting Started
Install this grunt plugin next to your project's [grunt.js gruntfile][getting_started] with: `npm install git://github.com/hideki-a/grunt-compass-multidir.git`

Then add this line to your project's `grunt.js` gruntfile:

```javascript
grunt.loadNpmTasks('grunt-compass-multidir');
```

[grunt]: http://gruntjs.com/
[getting_started]: https://github.com/gruntjs/grunt/blob/master/docs/getting_started.md

## Documentation
_(Coming soon)_

## An Example Setup
grunt.js
```javascript
module.exports = function(grunt) {
  grunt.initConfig({
    compass: {
      dev: {
        reference: {
          'path/to/cssdir': 'path/to/sassdir',
          'path/to/other/cssdir': 'path/to/other/sassdir'
        },
        options: {
          config: 'config.rb',
          environment: 'development'
        }
      },
      dist: {
        reference: '<config:compass.dev.reference>',
        options: {
          config: 'config.rb',
          environment: 'production',
          force: true
        }
      }
    },
    watch: {
      compass: {
        files: 'htdocs/**/*.scss',
        tasks: 'compass:dev'
      }
    },
    growl: {
      notify: false
    }
  });

  grunt.loadNpmTasks('grunt-compass-multidir');
  grunt.registerTask('develop', ['compass:dev', 'watch']);
};
```
<!-- 
## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt][grunt].
-->

## Release History
_(Nothing yet)_

## License
Copyright (c) 2012 Hideki Abe  
Licensed under the MIT license.
