import 'angular';
//import localStorageServiceProvider from 'angular-local-storage';

import $compileProvider from 'angular';

export default function config($compileProvider, $log,$logProvider,$stateProvider, $urlRouterProvider) {
    'ngInject';
    /* @ngInject */

    $log.info('.config() : START ');

    $compileProvider.debugInfoEnabled(!prod);

    $logProvider.debugEnabled(true);


    $stateProvider.state('desktop', {
        url: '/',
        views: {
            'main': {
                controller: 'appController',
                templateUrl: 'templates/app.tpl.html'
            }
        },
        data: {pageTitle: 'Enterprise Desktop'}
    });
}

config.$inject =['$compileProvider', '$log','$logProvider','$stateProvider', '$urlRouterProvider'];