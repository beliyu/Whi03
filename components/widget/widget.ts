import {Component, NgClass} from 'angular2/angular2';
import {RdLoading} from './loading';


@Component({
    selector: 'rd-widget',
    host: {
        'class': 'widget'
    },
    template: `<ng-content></ng-content> `
})
export class RdWidget {
    constructor(){
    }
}


@Component({
    selector: 'rd-widget-body',
    directives:[NgClass, RdLoading],
    inputs: ['loading', 'classes'],
    template: `
        <div class="widget-body" [ng-class]="classes">
            <rd-loading [hidden]="!loading"></rd-loading>
            <div [hidden]="loading" class="widget-content" >
                <ng-content></ng-content>
            </div>
        </div>
    `
})
export class RdWidgetBody {
    constructor(){
    }
}


@Component({
    selector: 'rd-widget-header',
    directives:[NgClass],
    inputs: ['title', 'icon'],
    template :`
    <div class="widget-header">
        <div class="row">
            <div class="pull-left">
                <i class="fa" [ng-class]="icon"></i> {{title}}
            </div>
            <div class="pull-right col-xs-6 col-sm-4" >
                <ng-content></ng-content>
            </div>
        </div>
    </div>
    `
})
export class RdWidgetTitle {
    constructor(){
    }
}
@Component({
    selector: 'rd-widget-footer',
    template :`
        <div class="widget-footer">
                <ng-content></ng-content>
        </div>
    `
})
export class RdWidgetFooter {
    constructor(){
    }
}