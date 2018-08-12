# Star Wars: Knowledge Center
![Build Success](https://img.shields.io/shippable/5444c5ecb904a4b21567b0ff.svg) [![Angular6](https://img.shields.io/badge/build-angular6-green.svg)](https://angular.io) [![LazyLoad](https://img.shields.io/badge/lazyload-success-green.svg)](https://angular.io)

This project built for Loket recruitment assignment using Angular 6, and Angular-CLI 6.1. This project using Karma and Jasmine as unit testing, lazy-load design pattern, AoT compilation, shared modules/components to be reusable and reactive programming. Optimization after running build production using Gulp, rendering gzip file to compress more file size, optimize image size, GZIP enabled.
### [Live Demo](https://swloket.triadiprabowo.com)

### Commands Available
* `npm start` - Start dev server
* `npm test` - Start unit test using karma and jasmine
* `npm run webpack:server` - Build server config file (to run sever after build)
* `npm run optimize` - Postbuild optimization because angular-cli doesn't give webpack config unless we do `ng eject`
* `npm run build` - Build project in development environment
* `npm run build:prod` Build project in production environment (compiling server and optimization enabled)

Below commands are usable if `npm run build:prod` has been succesfully executed:
* `npm start:server` - Start production server (with node environment)
* `npm start:forever` - Start production server (with pm2 environment)
* `npm stop:forever` - Stop production server (with pm2 environment)

### How-To Setup Project for First Time
* Run `npm install` - to fresh install node modules
* Run `npm install -D @angular-devkit/build-angular` - to update current angular devkit to support build project in production environment

### Run Locally
* Run `npm start` - starting local server in localhost port 4000

### Build in production environment
* Run `npm run build:prod` - build angular project in production environment

### Work Reproduction
Spending 3-5 hours each day, finishing in 2 days
* First, write test cases & designing application structure
* Secondly, start development by making required services and components
* Third, prettify user interface
* Fourth, making the UI design to be responsive
* Fifth, tweaking unit test and run test
* Finally, create optimization with Gulp for postbuild as AngularCLI is not giving webpack config unless we are doing ng eject

### UI/UX Concept
User interface/experience designed with eye appealing and user-friendly for mobile user / desktop user concept.