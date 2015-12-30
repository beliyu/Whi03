import {Component} from 'angular2/angular2';
import {RdWidgetTitle, RdWidget, RdWidgetBody, RdWidgetFooter} from '../widget/widget';
import {RdLoading} from "../widget/loading";
import {Tooltip} from "../../node_modules/ng2-bootstrap/components/tooltip/tooltip";

@Component({
    selector: 'dashboard',
    directives:[RdWidget, RdWidgetTitle, RdWidgetBody, RdWidgetFooter,
                RdLoading,  Tooltip],
    templateUrl: './components/dashboard/dashboard.html'
})
export class Dashboard {
    alerts:{type: string, msg:string}[];
    constructor(){
        this.alerts = [{
            type: 'success',
            msg: 'Well done! You seccessfully read message.'
        }, {
            type: 'danger',
            msg: 'Holy gaucamole. Chage this.'
        }];
    }
    closeAlert = function(index) {
        this.alerts.splice(index, 1);
    };

}