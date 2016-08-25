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
    mix.copy('bower_components/jquery/dist/jquery.min.js', 'public/bower_components/jquery/dist/jquery.min.js');
    mix.copy('bower_components/bootstrap/dist/js/bootstrap.min.js', 'public/bower_components/bootstrap/dist/js/bootstrap.min.js');
    mix.copy('bower_components/fastclick/lib/fastclick.js', 'public/bower_components/fastclick/lib/fastclick.js');
    mix.copy('bower_components/datatables.net/js/jquery.dataTables.min.js', 'public/bower_components/datatables.net/js/jquery.dataTables.min.js');
    mix.copy('bower_components/datatables.net-bs/js/dataTables.bootstrap.min.js', 'public/bower_components/datatables.net-bs/js/dataTables.bootstrap.min.js');
    mix.copy('bower_components/datatables.net-buttons/js/dataTables.buttons.min.js', 'public/bower_components/datatables.net-buttons/js/dataTables.buttons.min.js');
    mix.copy('bower_components/datatables.net-buttons-bs/js/buttons.bootstrap.min.js', 'public/bower_components/datatables.net-buttons-bs/js/buttons.bootstrap.min.js');
    mix.copy('bower_components/datatables.net-buttons/js/buttons.flash.min.js', 'public/bower_components/datatables.net-buttons/js/buttons.flash.min.js');
    mix.copy('bower_components/datatables.net-buttons/js/buttons.html5.min.js', 'public/bower_components/datatables.net-buttons/js/buttons.html5.min.js');
    mix.copy('bower_components/datatables.net-buttons/js/buttons.print.min.js', 'public/bower_components/datatables.net-buttons/js/buttons.print.min.js');
    mix.copy('bower_components/datatables.net-fixedheader/js/dataTables.fixedHeader.min.js', 'public/bower_components/datatables.net-fixedheader/js/dataTables.fixedHeader.min.js');
    mix.copy('bower_components/jquery.tagsinput/src/jquery.tagsinput.js', 'public/bower_components/jquery.tagsinput/src/jquery.tagsinput.js');
    mix.copy('bower_components/iCheck/icheck.min.js', 'public/bower_components/iCheck/icheck.min.js');
    //copy css file from bower_components
    mix.copy('bower_components/bootstrap/dist/css/bootstrap.min.css', 'public/bower_components/bootstrap/dist/css/bootstrap.min.css');
    mix.copy('bower_components/bootstrap/dist/fonts/', 'public/bower_components/bootstrap/dist/fonts/');
    mix.copy('bower_components/font-awesome/', 'public/bower_components/font-awesome/');
    mix.copy('bower_components/iCheck/', 'public/bower_components/iCheck/');
    mix.copy('bower_components/datatables.net-bs/css/dataTables.bootstrap.min.css', 'public/bower_components/datatables.net-bs/css/dataTables.bootstrap.min.css');
    mix.copy('bower_components/datatables.net-buttons-bs/css/buttons.bootstrap.min.css', 'public/bower_components/datatables.net-buttons-bs/css/buttons.bootstrap.min.css');
    mix.copy('bower_components/datatables.net-fixedheader-bs/css/fixedHeader.bootstrap.min.css', 'public/bower_components/datatables.net-fixedheader-bs/css/fixedHeader.bootstrap.min.css');
    //copy image
    mix.copy('images/', 'public/images');
    mix.livereload();
});
