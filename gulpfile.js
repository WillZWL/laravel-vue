var elixir = require('laravel-elixir');
elixir.config.js.browserify.watchify.options.poll = true;

require('laravel-elixir-vueify');
require('laravel-elixir-livereload');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix.styles(['custom.css'], 'public/css/custom.css');
    mix.browserify('main.js');
    mix.browserify('custom.js');
    //version
    mix.version(['public/js/main.js', 'public/js/custom.js']);

    //copy javascript file from bower_components
    mix.copy('./bower_components/jquery/dist/jquery.min.js', 'public/js/jquery.min.js');
    mix.copy('./bower_components/bootstrap/dist/js/bootstrap.min.js', 'public/js/bootstrap.min.js');
    mix.copy('./bower_components/fastclick/lib/fastclick.js', 'public/js/fastclick.js');
    mix.copy('./bower_components/jquery.tagsinput/src/jquery.tagsinput.js', 'public/js/jquery.tagsinput.js');
    mix.copy('./bower_components/iCheck/icheck.min.js', 'public/js/icheck.min.js');
    mix.copy('./bower_components/jquery-pjax/jquery.pjax.js', 'public/js/jquery.pjax.js');
    //copy css file from bower_components
    mix.copy('./bower_components/bootstrap/dist/css/bootstrap.min.css', 'public/css/bootstrap.min.css');
    mix.copy('./bower_components/bootstrap/dist/css/bootstrap.min.css.map', 'public/css/bootstrap.min.css.map');
    mix.copy('./bower_components/bootstrap/dist/fonts/', 'public/fonts/');
    mix.copy('./bower_components/font-awesome/', 'public/css/font-awesome/');
    mix.copy('./bower_components/iCheck/', 'public/css/iCheck/');

    //combine scripts
    mix.scripts([
            "./bower_components/datatables.net/js/jquery.dataTables.min.js",
            "./bower_components/datatables.net-bs/js/dataTables.bootstrap.min.js",
            "./bower_components/datatables.net-buttons/js/dataTables.buttons.min.js",
            "./bower_components/datatables.net-buttons-bs/js/buttons.bootstrap.min.js",
            "./bower_components/datatables.net-buttons/js/buttons.flash.min.js",
            "./bower_components/datatables.net-buttons/js/buttons.html5.min.js",
            "./bower_components/datatables.net-buttons/js/buttons.print.min.js",
            "./bower_components/datatables.net-fixedheader/js/dataTables.fixedHeader.min.js"
        ], "public/js/datatable-net.js");
    //combine css
    mix.styles([
            "./bower_components/datatables.net-bs/css/dataTables.bootstrap.min.css",
            "./bower_components/datatables.net-buttons-bs/css/buttons.bootstrap.min.css",
            "./bower_components/datatables.net-fixedheader-bs/css/fixedHeader.bootstrap.min.css"
        ], "public/css/datatables-net.css");

    // mix.browserSync();
    mix.livereload();
});
