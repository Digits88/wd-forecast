Forecast Weather
================

## Demo
This demo is running from [gh-pages](https://github.com/martinmicunda/wd-forecast/tree/gh-pages) branch.

##<a name="installation-and-configuration"></a>Installation & Configuration

###<a name="platform-and-tools"></a>Platform & Tools
You need to install Node.js and then the development tools. Node.js comes with a package manager called [npm](http://npmjs.org) (requires npm version >= 2.0.0 for this project) for installing NodeJS applications and libraries.

[Install Node.js](http://nodejs.org/download/) (requires node.js version >= 4.0.0)

###<a name="installation"></a>Installation

**1.** Clone or [fork](https://github.com/martinmicunda/wd-forecast/fork) this repository:
```bash
$ git clone git@github.com:martinmicunda/wd-forecast.git 
$ cd wd-forecast
```

**2.** Install local dependencies
```bash
$ npm install
```
> **Note:** Verify that all 3rd party dependencies from [package.json](package.json) are installed on your local machine. If you have followed the instructions and there have been no errors when executing the above commands, the dependencies should be installed.
     
## <a name="how-to-run"></a>How to Run
###<a name="how-to-run-development"></a>

```bash
$ npm start 
```

This task will install all dependencies, build dev environment, monitor the source files, compile SASS to CSS and launch the browser. The task also includes [Browsersync](http://www.browsersync.io/), so you no longer have to manually refresh your page after making changes! Make sure `API_URL` constant in [`gulp/const.js`](gulp/const.js) file points to your API back-end.

If you don't want to launch the browser when serving code then pass `--open=false` flag:

```bash
$ npm start -- --open=false
```

##<a name="how-to-build">How to Build
The build task get app ready for production. The build task include transpilation from ES6 to ES5, concatenation, minification, compression, asset revision, template cache, cdn etc. If there have been no errors when executing the build command, the build should be located in `build/dist` directory and this build is ready for uploading to the server! To initiate a full build, you simply run the follow task:
```bash
$ npm run build
```

## License

    Copyright (c) 2014-2015 Martin Micunda  

    Source code is open source and released under the GNU GPL v3 license.
