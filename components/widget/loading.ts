import {Component} from 'angular2/angular2';

@Component({
    selector: 'rd-loading',
    template : `
    <div class="loading">
        <div class="double-bounce1"></div>
        <div class="double-bounce2"></div>
    </div>
    `
})
export class RdLoading {
    constructor(){
    }
}