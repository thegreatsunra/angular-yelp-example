# jetfire 0.1.4

Extremely lightweight web prototyping environment. Based on the output of the [Yeoman web app generator](https://github.com/yeoman/generator-webapp) without all the cruft.

Need something heavier duty, perhaps with templates, layouts, partials and LESS? Try [Propeller](https://github.com/thegreatsunra/propeller), jetfire's big brother.

## Getting started

1. Download and install [Node](http://nodejs.org)
1. At the command line install [Bower](http://bower.io) and [Gulp](http://gulpjs.com) globally by typing `sudo npm install -g bower gulp`
1. Clone this repository (or download and unzip it) to begin a new jetfire project

### Now you're ready to use jetfire

1. Open your new jetfire project at the command line
1. Type `npm install && bower install` to install all dependencies
1. Type `gulp` to start your development server. jetfire will monitor the `/app` folder, refresh your browser whenever it detects changes, and automatically lint all your JavaScript files
1. Open [http://localhost:9000](http://localhost:9000) in a web browser to view your site
1. Modify the files in the `/app` folder to build your prototype

### A note about Gulp vs. Grunt

jetfire includes support for both [Gulp](http://gulpjs.com) as well as [Grunt](http://gruntjs.com) for starting the development server and monitoring for changes. If it's all the same to you, we recommend you use Gulp because it's much faster.

If you prefer to use Grunt, make sure you have it installed globally by typing `sudo npm install -g grunt-cli` at the command line. After that, simply type `grunt` from your project folder instead of `gulp`, and Grunt will start up your development server.

All the Grunt tasks for jetfire are defined in the Gruntfile.js file. Likewise, all the Gulp tasks are defined in the `gulpfile.js` file.

## License

The MIT License (MIT)

Copyright (c) 2014 Dane Petersen

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
