import * as angular from 'angular';

import config from './app-config';

import run from './app-run-config';

import uiRouter from 'angular-ui-router';

import AppController from './app-controller';

import MyService from './my-service';

import * as serviceModule from './service';

import testDirective from './test-directive';

import muUtil from './util/util.js';

export default angular.module("my-app", ['ui.router','my-service-module','myUtil'])

    .config(config)

    .run(run)

    .component('testDirective',testDirective())
    .controller('appController', AppController).name;
