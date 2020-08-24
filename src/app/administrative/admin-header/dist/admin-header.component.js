"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AdminHeaderComponent = void 0;
var core_1 = require("@angular/core");
var AdminHeaderComponent = /** @class */ (function () {
    function AdminHeaderComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AdminHeaderComponent.prototype.ngOnInit = function () {
    };
    AdminHeaderComponent.prototype.logout = function () {
        this.authService.doLogout();
        this.router.navigate(['/']);
    };
    AdminHeaderComponent = __decorate([
        core_1.Component({
            selector: 'app-admin-header',
            templateUrl: './admin-header.component.html',
            styleUrls: ['./admin-header.component.less']
        })
    ], AdminHeaderComponent);
    return AdminHeaderComponent;
}());
exports.AdminHeaderComponent = AdminHeaderComponent;
