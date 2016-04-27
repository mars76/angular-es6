import MyService1 from './my-service1.js';
import MyService2 from './my-service2.js';

export default function utilRun(MyService1,MyService2){

    MyService1.init();
    MyService2.init();

}

utilRun.$inject =['MyService1','MyService2'];