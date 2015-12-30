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
var widget_1 = require('../widget/widget');
var loading_1 = require("../widget/loading");
var tooltip_1 = require("../../node_modules/ng2-bootstrap/components/tooltip/tooltip");
var pagination_1 = require("../../node_modules/ng2-bootstrap/components/pagination/pagination");
var Tables = (function () {
    function Tables() {
    }
    Tables = __decorate([
        angular2_1.Component({
            selector: 'tables',
            directives: [widget_1.RdWidget, widget_1.RdWidgetTitle, widget_1.RdWidgetBody, widget_1.RdWidgetFooter, loading_1.RdLoading,
                tooltip_1.Tooltip, pagination_1.Pagination],
            templateUrl: './components/tables/tables.html'
        }), 
        __metadata('design:paramtypes', [])
    ], Tables);
    return Tables;
})();
exports.Tables = Tables;
//# sourceMappingURL=tables.js.map