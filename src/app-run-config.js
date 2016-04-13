import MyService from './my-service';
export default function run(MyService,$log) {
    'ngInject';
    /* @ngInject */
    $log.info('.run() : Calling start and init on Heartbeat and PostMessage Services');
    MyService.start();

}

run.$inject = [MyService.name,'$log'];