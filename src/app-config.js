import * as angular from 'angular';
import uiRouter from 'angular-ui-router';

export default function config($stateProvider,$compileProvider, $logProvider,$urlRouterProvider) {
    //'ngInject';
    // $compileProvider, $logProvider, , $urlRouterProvider
    $compileProvider.debugInfoEnabled(true);

    $logProvider.debugEnabled(true);


    $stateProvider.state('home', {
        url: '/',
        views: {
            'main': {
                controller: 'appController',
                templateUrl: 'templates/app.tpl.html'
            }
        },
        data: {pageTitle: 'My App'}
    });

    $urlRouterProvider.when(/Place=(.*)/,function($location){
        console.log('inside place=');
        var url = $location.absUrl();
        url = url.replace('Place=','#navID:');
        url = url.replace('workspaceURL=','url:');
        //$location.url(url);
        window.location.href = url;
    });
    $urlRouterProvider.otherwise('/');
}

config.$inject =['$stateProvider','$compileProvider', '$logProvider', '$urlRouterProvider'];