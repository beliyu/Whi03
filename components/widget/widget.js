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
var loading_1 = require('./loading');
var RdWidget = (function () {
    function RdWidget() {
    }
    RdWidget = __decorate([
        angular2_1.Component({
            selector: 'rd-widget',
            host: {
                'class': 'widget'
            },
            template: "<ng-content></ng-content> "
        }), 
        __metadata('design:paramtypes', [])
    ], RdWidget);
    return RdWidget;
})();
exports.RdWidget = RdWidget;
var RdWidgetBody = (function () {
    function RdWidgetBody() {
    }
    RdWidgetBody = __decorate([
        angular2_1.Component({
            selector: 'rd-widget-body',
            directives: [angular2_1.NgClass, loading_1.RdLoading],
            inputs: ['loading', 'classes'],
            template: "\n        <div class=\"widget-body\" [ng-class]=\"classes\">\n            <rd-loading [hidden]=\"!loading\"></rd-loading>\n            <div [hidden]=\"loading\" class=\"widget-content\" >\n                <ng-content></ng-content>\n            </div>\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], RdWidgetBody);
    return RdWidgetBody;
})();
exports.RdWidgetBody = RdWidgetBody;
var RdWidgetTitle = (function () {
    function RdWidgetTitle() {
    }
    RdWidgetTitle = __decorate([
        angular2_1.Component({
            selector: 'rd-widget-header',
            directives: [angular2_1.NgClass],
            inputs: ['title', 'icon'],
            template: "\n    <div class=\"widget-header\">\n        <div class=\"row\">\n            <div class=\"pull-left\">\n                <i class=\"fa\" [ng-class]=\"icon\"></i> {{title}}\n            </div>\n            <div class=\"pull-right col-xs-6 col-sm-4\" >\n                <ng-content></ng-content>\n            </div>\n        </div>\n    </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], RdWidgetTitle);
    return RdWidgetTitle;
})();
exports.RdWidgetTitle = RdWidgetTitle;
var RdWidgetFooter = (function () {
    function RdWidgetFooter() {
    }
    RdWidgetFooter = __decorate([
        angular2_1.Component({
            selector: 'rd-widget-footer',
            template: "\n        <div class=\"widget-footer\">\n                <ng-content></ng-content>\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], RdWidgetFooter);
    return RdWidgetFooter;
})();
exports.RdWidgetFooter = RdWidgetFooter;
//# sourceMappingURL=widget.js.map