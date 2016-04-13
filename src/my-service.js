export default class MyService {
    constructor($log){
        this.$log = $log;
    }

    start(){
        this.$log.info('Here in MyService.start() : []');
    }
}

MyService.$inject=['$log'];