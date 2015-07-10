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
        sourceMapIncludeSources : true
      },
      dist : {
        src  : ['bower_components/jquery/dist/jquery.min.js',
                'bower_components/jquery-ui/jquery-ui.js',
                'app/js/lib/*.js', 
                'app/js/**/*.js',
                'bower_components/bootstrap/dist/js/bootstrap.js',
                'bower_components/handlebars/handlebars.js',
                'bower_components/blockui/jquery.blockUI.js',
                'bower_components/bootstrap-material-design/dist/js/material.min.js',
                'bower_components/bootstrap-material-design/dist/js/ripples.min.js',
                'bower_components/sweetalert/dist/sweetalert-dev.js'],
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
        src  : ['bower_components/bootstrap/dist/**/*.css',
                'app/css/**/*.css',
                '/node_modules/**/*.css',
                'bower_components/bootstrap-material-design/dist/css/material.min.css',
                'bower_components/bootstrap-material-design/dist/css/ripples.min.css',
                'bower_components/bootstrap-material-design/dist/css/roboto.min.css',
                'bower_components/sweetalert/dist/sweetalert.css'],
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
          cwd: 'bower_components/bootstrap-material-design/dist/fonts/',
          src: '**',
          dest: 'public/fonts',
          expand: true
        },{
          cwd: 'bower_components/jquery-ui/themes/base/images',
          src: '**',
          dest: 'public/css/images',
          expand: true
        },{
          cwd: 'app/views/reserva/',
          src: 'reservas.html',
          dest: 'public/',
          expand: true
        },{
          cwd: 'app/views/',
          src: 'home.html',
          dest: 'public/',
          expand: true
        },{
          cwd: 'app/',
          src: 'login.html',
          dest: 'public/',
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

  grunt.registerTask('default', ['jshint', 'uglify', 'cssmin', 'copy', 'jsbeautifier']);

};