
export default function testDirective(){
    /*
    constructor(){
        this.templateUrl = 'templates/test.directive.tpl.html';
    }*/

    let directive ={
        templateUrl : 'templates/test.directive.tpl.html',
        restrict :'E'
    }

    return directive;
}