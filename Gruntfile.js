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
        src  : ['bower_components/jquery/dist/jquery.min.js', 'app/**/*.js', 'bower_components/bootstrap/dist/js/bootstrap.min.js'],
        dest : 'dist/divegold.min.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.registerTask('default', ['jshint', 'uglify']);

};