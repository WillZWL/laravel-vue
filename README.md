# Scout

Scout is a front template.

The goal of this project:
1. User-friendly
2. Separate Front
3. Easy develop && Maintenance
4. Work fine with other project

This template develop by Vue.js,  For more information about Vue.js, you can find Vue.js Document by [Getting Started](http://cn.vuejs.org/).

**[Template Demo](http://scout.eservicesgroup.com/)**

## How to install

```
git clone http://gitlab.eservicesgroup.com/esg-systems/scout.git
cd scout/public
```

View this Demo, you need a server, you can easy start a server by run:
```
php -S localhost:8080 or other port
```
then you can view the demo by (http://localhost:8080)


## How to contribute
To contribute, please ensure that you have stable [Node.js](https://nodejs.org/) , [npm](https://npmjs.com), and [Bower](https://bower.io/) installed.

you can check if you have install those by running `node -v`, `npm -v` and `bower -v`.

Test if Gulp CLI is installed by running `gulp --version`.  If the command isn't found, run `npm install -g gulp`.
For more information about installing Gulp, see the Gulp's [Getting Started](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md).


If all of those develop tool are ready, follow the steps below.

1. `cd scout/`
2. `bower install`
3. `npm install`
4. `gulp watch`
5. `php -S localhost:8080`
6. Coding && Debug
7. `gulp --production`
8. commit code


## Introduce of File Directory

```
scout
|--bower_compoents                    Bower dependencies Directory
|--node_modules                       Npm dependencies  Directory
|--public                             Production package Directory
|   |---css                           Compile css Directory
|   |---fonts                         Fonts Directory
|   |---images                        image Directory
|   |---js                            Compile Directory
|   |---index.html                    entry file
|--resources                          Resources Directory, Where you write your Code
|   |---assets
|        |---css                      Project css Directory
|        |---js                       Project Js Directory
|             |--components           Vue components Directory
|               |--layout
|               |--price
|               |--price.vue          vue file
|             |--App.vue                  App.vue
|             |--custom.js
|             |--main.js                  main.js, entry vue file, route
|--bower.json                         bower.json, Manage JS && css dependencies
|--gulpfile.js                        gulp command, for manage JS and CSS resources file, package, copy file and etc
|--package.json                       Node dependencies,

```

When start a new page, you should write your route on main.js

```

Notice: Nerver write your code in the Public Directory, Public Directory only for publish package,
The `gulp --production` will help you Compile Resources Directory, and publish to public

```



## More information:

Vue Component syntax is same as html, you can install vue component for your editor,

When you start a new page, you can view Price.vue as a reference,



## Thanks
This project has just started, add need your contribution

Thanks for your reading, if there is anything not clear, feel free contact with [@Will Zhang]()