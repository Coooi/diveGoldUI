module.exports = function(grunt) {

  grunt.initConfig({
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
        sourceMapIncludeSources : true
      },
      dist : {
        src  : ['bower_components/jquery/dist/jquery.min.js',
                'bower_components/jquery-ui/jquery-ui.js',
                '/node_modules/**/*.js', 'app/js/**/*.js',
                'bower_components/bootstrap/dist/js/bootstrap.js',
                'bower_components/handlebars/handlebars.js',
                'bower_components/bootstrap-validator/dist/validator.js'],
        dest : 'dist/js/divegold.min.js'
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
        dest : 'dist/css/divegold.min.css'
      }
    },
    copy: {
      main: {
        files: [{
          cwd: 'bower_components/bootstrap/dist/fonts/',
          src: '**',
          dest: 'dist/fonts',
          expand: true
        },{
          cwd: 'bower_components/jquery-ui/themes/base/images',
          src: '**',
          dest: 'dist/css/images',
          expand: true
        }]
    }
  }
      
  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', ['jshint', 'uglify', 'cssmin', 'copy']);

};