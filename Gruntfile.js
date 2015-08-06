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
        sourceMapIncludeSources : true
      },
      // minVendor: {
      //    src:  ['bower_components/dynatable/jquery.dynatable.js',
      //           'bower_components/blockui/jquery.blockUI.js',
      //           'bower_components/modernizr/modernizr.js'],
      //    dest: 'dist/js/vendor.js'
      // }
      // ,
      // minJs: {
      //    src:  ['app/js/*.js'],
      //    dest: 'public/js/divegold.js'
      // }
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
                'bower_components/dynatable/jquery.dynatable.css',
                'bower_components/sweetalert/dist/sweetalert.css'],
        dest : 'public/css/divegold.min.css'
      }
    },
    concat: {
      vendorMin: {
        src  : ['bower_components/jquery/dist/jquery.min.js',
                'bower_components/jquery-ui/jquery-ui.min.js',
                'bower_components/bootstrap/dist/js/bootstrap.min.js',
                'bower_components/handlebars/handlebars.min.js',
                'bower_components/bootstrap-material-design/dist/js/material.min.js',
                'bower_components/bootstrap-material-design/dist/js/ripples.min.js',
                'bower_components/moment/min/moment.min.js',
                'bower_components/sweetalert/dist/sweetalert.min.js',
                'bower_components/dynatable/jquery.dynatable.js',
                'bower_components/blockui/jquery.blockUI.js',
                'bower_components/modernizr/modernizr.js',
                'app/js/lib/*.js'],
        dest: 'public/js/vendor.min.js'
      },
      minJs: {
         src:  ['app/js/*.js'],
         dest: 'public/js/divegold.js'
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
          cwd: 'app/views/planilha/',
          src: 'planilha.html',
          dest: 'public/',
          expand: true
        },{
          cwd: 'app/views/confirmacoes/',
          src: 'confirmacoes.html',
          dest: 'public/',
          expand: true
        },{
          cwd: 'app/views/operacoes/',
          src: 'operacoes.html',
          dest: 'public/',
          expand: true
        },{
          cwd: 'app/views/',
          src: 'home.html',
          dest: 'public/',
          expand: true
        },{
          cwd: 'dist/js/',
          src: 'vendor.js.map',
          dest: 'public/js',
          expand: true
        },{
          cwd: 'app/',
          src: 'login.html',
          dest: 'public',
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
      }
  }
  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-jsbeautifier');
  grunt.loadNpmTasks('grunt-githooks');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('default', ['jshint', 'uglify', 'cssmin', 'jsbeautifier', 'concat', 'copy' ]);

};