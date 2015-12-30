import {Component, View, bootstrap, provide, CORE_DIRECTIVES } from 'angular2/angular2';
import {ROUTER_DIRECTIVES, RouteConfig, Location,ROUTER_PROVIDERS, LocationStrategy,
        HashLocationStrategy, Route, AsyncRoute, Router} from 'angular2/router';
import {Dropdown, DropdownMenu, DropdownToggle} from "./node_modules/ng2-bootstrap/ng2-bootstrap";
import {Tables} from "./components/tables/tables";
import {Dashboard} from "./components/dashboard/dashboard";

declare var System:any;

@Component(
{
    selector: 'demo-app',
    templateUrl: './demo-app.html',
    directives:[ Tables, ROUTER_DIRECTIVES, CORE_DIRECTIVES ]
})

@RouteConfig([
    new Route({path: '/', component: Dashboard, name: 'Dashboard'}),
    new Route({path: '/tables', component: Tables, name: 'Tables'})
])
 
class MyDemoApp {
    mobileView:number = 992;
    toggle:boolean = true;

    constructor(public router: Router, public location: Location) {
    }
    toggleSidebar (){
        this.toggle = !this.toggle;
        localStorage.setItem('toggle', this.toggle ? '0' : '1');
    }


    widthAct(){
        if (window.innerWidth >= this.mobileView) {
            if (typeof(localStorage.getItem('toggle')) == "string") {
                this.toggle = ! localStorage.getItem('toggle') ? false : true;
            } else {
                this.toggle = true;
            }
        } else {
            this.toggle = false;
        }

    }
}


bootstrap(MyDemoApp,[ROUTER_PROVIDERS,
          provide(LocationStrategy, {useClass: HashLocationStrategy})]);
