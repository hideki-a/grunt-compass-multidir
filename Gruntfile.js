module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    compass: {
      dev: {
        reference: {
          'htdocs/common/css': 'htdocs/_scss',
          'htdocs/category/css': 'htdocs/category/_scss'
        },
        options: {
          config: 'config.rb',
          environment: 'development'
        }
      },
      dist: {
        reference: '<%= compass.dev.reference %>',
        options: {
          config: 'config.rb',
          environment: 'production',
          force: true
        }
      },
      test: {
        reference: {
          'tmp/': 'test/fixtures/'
        },
        options: {
          config: 'config.rb',
          environment: 'production'
        }
      }
    },
    test: {
      files: ['test/*_test.js']
    },
    lint: {
      files: ['grunt.js', 'tasks/**/*.js', 'test/*_test.js']
    },
    watch: {
      files: '<%= lint.files %>',
      tasks: 'default'
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        node: true,
        es5: true
      },
      globals: {}
    },
    clean: {
      test: ['tmp', '.sass-cache']
    },
    nodeunit: {
      tasks: ['test/*_test.js']
    },
    growl: {
      notify: false
    }
  });

  // Load npm tasks.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Load local tasks.
  grunt.loadTasks('tasks');

  // Regist tasks.
  grunt.registerTask('mkdir', function(dir) {
    require('fs').mkdirSync(dir);
  });

  // Default task.
  grunt.registerTask('default', 'lint test');
  grunt.registerTask('test', ['clean', 'mkdir:tmp', 'compass:test', 'nodeunit', 'clean']);
};
