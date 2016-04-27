import * as utilRun from './util-run.js';
import * as MyService1 from './my-service1.js';
import * as MyService2 from './my-service2.js';

export default angular.module('myUtil', [])

    .service('MyService1', MyService1)

    .service('MyService2', MyService2)

    .run(utilRun).name;