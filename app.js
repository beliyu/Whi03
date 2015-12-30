var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var router_1 = require('angular2/router');
var tables_1 = require("./components/tables/tables");
var dashboard_1 = require("./components/dashboard/dashboard");
var MyDemoApp = (function () {
    function MyDemoApp(router, location) {
        this.router = router;
        this.location = location;
        this.mobileView = 992;
        this.toggle = true;
    }
    MyDemoApp.prototype.toggleSidebar = function () {
        this.toggle = !this.toggle;
        localStorage.setItem('toggle', this.toggle ? '0' : '1');
    };
    MyDemoApp.prototype.widthAct = function () {
        if (window.innerWidth >= this.mobileView) {
            if (typeof (localStorage.getItem('toggle')) == "string") {
                this.toggle = !localStorage.getItem('toggle') ? false : true;
            }
            else {
                this.toggle = true;
            }
        }
        else {
            this.toggle = false;
        }
    };
    MyDemoApp = __decorate([
        angular2_1.Component({
            selector: 'demo-app',
            templateUrl: './demo-app.html',
            directives: [tables_1.Tables, router_1.ROUTER_DIRECTIVES, angular2_1.CORE_DIRECTIVES]
        }),
        router_1.RouteConfig([
            new router_1.Route({ path: '/', component: dashboard_1.Dashboard, name: 'Dashboard' }),
            new router_1.Route({ path: '/tables', component: tables_1.Tables, name: 'Tables' })
        ]), 
        __metadata('design:paramtypes', [router_1.Router, router_1.Location])
    ], MyDemoApp);
    return MyDemoApp;
})();
angular2_1.bootstrap(MyDemoApp, [router_1.ROUTER_PROVIDERS,
    angular2_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy })]);
//# sourceMappingURL=app.js.map