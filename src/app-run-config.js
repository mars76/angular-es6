import MyService from './my-service';
import angular from 'angular';

export default function run($log,MyService) {
    'ngInject';
    let injector = angular.injector();
    //let myService = injector.get('my-service');
    $log.info('.run() : injector =['+injector+'] Calling My Service ');
    MyService.start('from run()');
    //$log.info('.run() : injector =['+injector+'] Calling My Service ');

}

run.$inject = ['$log','MyService'];