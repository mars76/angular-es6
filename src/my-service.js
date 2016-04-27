export default class MyService {
    constructor($log){
        this.$log = $log;
    }

    start(msg){
        this.$log.info('Here in MyService.start() : [] calling from=['+msg+']');
    }
}

MyService.$inject=['$log'];