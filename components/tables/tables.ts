import {Component, CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/angular2';
import {RdWidgetTitle, RdWidget, RdWidgetBody, RdWidgetFooter} from '../widget/widget';
import {RdLoading} from "../widget/loading";
import {Tooltip} from "../../node_modules/ng2-bootstrap/components/tooltip/tooltip";
import {Pagination} from "../../node_modules/ng2-bootstrap/components/pagination/pagination";

@Component({
    selector: 'tables',
    directives:[RdWidget, RdWidgetTitle, RdWidgetBody, RdWidgetFooter, RdLoading,
                Tooltip, Pagination],
    templateUrl: './components/tables/tables.html'
})
export class Tables {
    constructor(){
    }
}