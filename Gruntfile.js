module.exports = function(grunt) {

  var watchFiles = {
    clientCSS: ['app/css/**/*.css']
  };

  grunt.initConfig({
    watch: {
      clientCSS: {
        files: watchFiles.clientCSS,
        tasks: ['cssmin'],
        options: {
          livereload: true
        }
      }
    },
    jshint: {
      files: ['Gruntfile.js', 'app/js/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    uglify : {
      options : {
        sourceMap : true,
        beautify: true,
        // exceptionsFiles: [ 'app/js/reserva.js' ],
        sourceMapIncludeSources : true
      },
      dist : {
        src  : ['bower_components/jquery/dist/jquery.min.js',
                'bower_components/jquery-ui/jquery-ui.js',
                '/node_modules/**/*.js', 
                'app/js/lib/*.js', 
                // 'app/js/**/*.js',
                'bower_components/bootstrap/dist/js/bootstrap.js',
                'bower_components/handlebars/handlebars.js',
                'bower_components/blockui/jquery.blockUI.js',
                'bower_components/bootstrap-validator/dist/validator.js'],
        dest : 'public/js/divegold.min.js'
      }
    },
    cssmin: {
      options: {
        rebase: false,
        sourceMap : true,
        sourceMapIncludeSources : true
      },
      dist : {
        src  : ['bower_components/bootstrap/dist/**/*.css', 'app/css/**/*.css'],
        dest : 'public/css/divegold.min.css'
      }
    },
    copy: {
      main: {
        files: [{
          cwd: 'bower_components/bootstrap/dist/fonts/',
          src: '**',
          dest: 'public/fonts',
          expand: true
        },{
          cwd: 'bower_components/jquery-ui/themes/base/images',
          src: '**',
          dest: 'public/css/images',
          expand: true
        }]
    }
  },
  jsbeautifier : {
      default: {
        src: ['app/js/**/*.js', 'app/views/**/*.html', 'app/**/*.html'],
        options : {
          config: '.jsbeautifier'
        }
      },
      'precommit-hook': {
        src: ['app/js/**/*.js', 'app/views/**/*.html', 'app/**/*.html'],
        options : {
          config: '.jsbeautifier',
          mode:'VERIFY_ONLY'
        }
      }
  },
  githooks: {
      all: {
        'pre-commit': 'jsbeautifier:precommit-hook'
      }
  }
      
  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-jsbeautifier');
  grunt.loadNpmTasks('grunt-githooks');

  grunt.registerTask('default', ['jshint', 'uglify', 'cssmin', 'copy']);

};