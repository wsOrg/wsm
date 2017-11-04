"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var app_component_1 = require("./app.component");
var create_account_component_1 = require("./component/create-account.component");
var rental_agreement_component_1 = require("./component/rental-agreement.component");
var router_1 = require("@angular/router");
var appRoutes = [
    { path: 'create_account', component: create_account_component_1.CreateAccountComponent },
    { path: 'account_details', component: create_account_component_1.CreateAccountComponent },
    { path: 'rental_agreement',component: rental_agreement_component_1.RentalAgreementComponent },
    {
        path: 'home',
        component: create_account_component_1.CreateAccountComponent
    },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
            ),
            platform_browser_1.BrowserModule,
            ng_bootstrap_1.NgbModule.forRoot()
        ],
        declarations: [app_component_1.AppComponent, create_account_component_1.CreateAccountComponent, rental_agreement_component_1.RentalAgreementComponent],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map