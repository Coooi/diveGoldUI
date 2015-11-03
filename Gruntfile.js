module.exports = function(grunt) {

  var watchFiles = {
    clientCSS: ['app/css/**/*.css'],
    clientJS: ['app/js/**/*.js', 'app/js/templates/*.hbs'],
    clientHTML: ['app/views/**/*.html']
  };

  grunt.initConfig({
    clean: {
      reserva : ["public"],
      admin: ["public-admin"]
    },
    watch: {
      clientCSS: {
        files: watchFiles.clientCSS,
        tasks: ['cssmin'],
        options: {
          livereload: true
        }
      },
      clientJS: {
        files: watchFiles.clientJS,
        tasks: ['jshint', 'uglify', 'jsbeautifier', 'concat', 'copy'],
        options: {
          livereload: true
        }
      },
      clientHTML: {
        files: watchFiles.clientHTML,
        tasks: ['copy'],
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
      // options : {
      //   sourceMap : true,
      //   sourceMapIncludeSources : true
      // },
      minJs: {
         src:  ['app/js/*.js'],
         dest: 'public/js/divegold.js'
      },
      minJsVendor: {
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
      minJsVendorAdmin: {
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
         dest: 'public-admin/js/vendor.min.js'
      },
      reserva: {
         src:  ['app/js/reserva/reserva.js'],
         dest: 'public/js/divegold.js'
      },
      admin: {
         src:  ['app/js/admin/*.js'],
         dest: 'public-admin/js/divegold.js'
      }
    },
    cssmin: {
      options: {
        // rebase: false,
        // sourceMap : true,
        // sourceMapIncludeSources : true
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
      },
      admin : {
        src  : ['bower_components/bootstrap/dist/**/*.css',
                'app/css/**/*.css',
                '/node_modules/**/*.css',
                'bower_components/bootstrap-material-design/dist/css/material.min.css',
                'bower_components/bootstrap-material-design/dist/css/ripples.min.css',
                'bower_components/bootstrap-material-design/dist/css/roboto.min.css',
                'bower_components/dynatable/jquery.dynatable.css',
                'bower_components/sweetalert/dist/sweetalert.css'],
        dest : 'public-admin/css/divegold.min.css'
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
          cwd: 'app/js/templates',
          src: '**',
          dest: 'public/js/templates',
          expand: true
        },{
          cwd: 'app/',
          src: 'login.html',
          dest: 'public',
          expand: true
        }]
    },
    reserva: {
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
          cwd: 'dist/js/',
          src: 'vendor.js.map',
          dest: 'public/js',
          expand: true
        },{
          cwd: 'app/js/templates',
          src: '**',
          dest: 'public/js/templates',
          expand: true
        }]
    },
    admin: {
        files: [{
          cwd: 'bower_components/bootstrap/dist/fonts/',
          src: '**',
          dest: 'public-admin/fonts',
          expand: true
        },{
          cwd: 'bower_components/bootstrap-material-design/dist/fonts/',
          src: '**',
          dest: 'public-admin/fonts',
          expand: true
        },{
          cwd: 'bower_components/jquery-ui/themes/base/images',
          src: '**',
          dest: 'public-admin/css/images',
          expand: true
        },{
          cwd: 'app/views/planilha/',
          src: 'planilha.html',
          dest: 'public-admin/',
          expand: true
        },{
          cwd: 'app/views/confirmacoes/',
          src: 'confirmacoes.html',
          dest: 'public-admin/',
          expand: true
        },{
          cwd: 'app/views/operacoes/',
          src: 'operacoes.html',
          dest: 'public-admin/',
          expand: true
        },{
          cwd: 'app/views/',
          src: 'home.html',
          dest: 'public-admin/',
          expand: true
        },{
          cwd: 'dist/js/',
          src: 'vendor.js.map',
          dest: 'public-admin/js',
          expand: true
        },{
          cwd: 'app/js/templates',
          src: '**',
          dest: 'public-admin/js/templates',
          expand: true
        },{
          cwd: 'app/',
          src: 'login.html',
          dest: 'public-admin',
          expand: true
        }]
    },
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
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');


  grunt.registerTask('default', ['clean', 'jshint', 'cssmin:dist', 'jsbeautifier', 'concat', 'copy:main', 'watch' ]);
  grunt.registerTask('reserva', ['clean:reserva', 'jshint', 'uglify:minJsVendor', 'uglify:reserva', 'cssmin:dist', 'copy:reserva' ]);
  grunt.registerTask('admin', ['clean:admin', 'jshint', 'uglify:minJsVendorAdmin', 'uglify:admin', 'cssmin:admin', 'copy:admin' ]);

};