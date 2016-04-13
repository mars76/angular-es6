import * as angular from 'angular';

import config from './app-config';

import run from './app-run-config';

import AppController from './app-controller';

export default angular.module("my-app", [AppController.name,'config','run','$compileProvider', '$log','$logProvider','$stateProvider', '$urlRouterProvider'])

    .config(config)

    .run(run)

    .controller('appController', AppController).name;
