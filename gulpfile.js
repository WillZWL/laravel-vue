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
    mix.version(['public/js/main.js', 'public/js/custom.js']);
    mix.livereload();
});
