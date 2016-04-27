
import MyService from './my-service';
import myServiceModule from './service';

export default class AppController{

    constructor($scope,MyService){
        this.$scope = $scope;
        this.$scope.appName ='My App 374637467';
        MyService.start('from AppController()');
    }
}

AppController.$inject=['$scope','MyService'];