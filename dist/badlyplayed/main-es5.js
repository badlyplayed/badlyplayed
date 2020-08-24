function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/administrative/admin-header/admin-header.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/administrative/admin-header/admin-header.component.ts ***!
    \***********************************************************************/

  /*! exports provided: AdminHeaderComponent */

  /***/
  function srcAppAdministrativeAdminHeaderAdminHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminHeaderComponent", function () {
      return AdminHeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var AdminHeaderComponent =
    /*#__PURE__*/
    function () {
      function AdminHeaderComponent(authService, router) {
        _classCallCheck(this, AdminHeaderComponent);

        this.authService = authService;
        this.router = router;
      }

      _createClass(AdminHeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "logout",
        value: function logout() {
          this.authService.doLogout();
          this.router.navigate(['/']);
        }
      }]);

      return AdminHeaderComponent;
    }();

    AdminHeaderComponent.ɵfac = function AdminHeaderComponent_Factory(t) {
      return new (t || AdminHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    AdminHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AdminHeaderComponent,
      selectors: [["app-admin-header"]],
      decls: 16,
      vars: 0,
      consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light"], ["href", "/administrative", 1, "navbar-brand"], ["src", "/assets/images/bpadminlogo.png", "width", "120", "height", "50"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item", "active"], ["href", "/", 1, "nav-link"], [1, "sr-only"], [1, "form-inline", "my-2", "my-lg-0"], ["type", "submit", 1, "btn", "btn-sm", "btn-danger", 3, "click"], [1, "fa", "fa-times", 2, "margin-right", "4px"]],
      template: function AdminHeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Ir para o Site");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "(current)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "form", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminHeaderComponent_Template_button_click_13_listener() {
            return ctx.logout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Sair");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbNavbar"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluaXN0cmF0aXZlL2FkbWluLWhlYWRlci9hZG1pbi1oZWFkZXIuY29tcG9uZW50Lmxlc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-admin-header',
          templateUrl: './admin-header.component.html',
          styleUrls: ['./admin-header.component.less']
        }]
      }], function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/administrative/administrative.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/administrative/administrative.component.ts ***!
    \************************************************************/

  /*! exports provided: AdministrativeComponent */

  /***/
  function srcAppAdministrativeAdministrativeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdministrativeComponent", function () {
      return AdministrativeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _admin_header_admin_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./admin-header/admin-header.component */
    "./src/app/administrative/admin-header/admin-header.component.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _historias_historias_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./historias/historias.component */
    "./src/app/administrative/historias/historias.component.ts");
    /* harmony import */


    var _parametros_parametros_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./parametros/parametros.component */
    "./src/app/administrative/parametros/parametros.component.ts");

    function AdministrativeComponent_ng_template_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-historias");
      }
    }

    function AdministrativeComponent_ng_template_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-parametros");
      }
    }

    var AdministrativeComponent =
    /*#__PURE__*/
    function () {
      function AdministrativeComponent(router, authService) {
        _classCallCheck(this, AdministrativeComponent);

        this.router = router;
        this.authService = authService;
        this.active = 1;
        this.isAdmin = false;
      }

      _createClass(AdministrativeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (!this.authService.hasValidAuthentication()) {
            this.router.navigate(['/']);
          }

          this.isAdmin = this.authService.isStoredTokenAdmin();
        }
      }]);

      return AdministrativeComponent;
    }();

    AdministrativeComponent.ɵfac = function AdministrativeComponent_Factory(t) {
      return new (t || AdministrativeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]));
    };

    AdministrativeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AdministrativeComponent,
      selectors: [["app-administrative"]],
      decls: 13,
      vars: 5,
      consts: [[1, "content"], ["ngbNav", "", 1, "nav-tabs", 3, "activeId", "activeIdChange"], ["nav", "ngbNav"], [3, "ngbNavItem"], ["ngbNavLink", ""], ["ngbNavContent", ""], [3, "ngbNavItem", "disabled"], [1, "mt-2", 3, "ngbNavOutlet"]],
      template: function AdministrativeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-admin-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("activeIdChange", function AdministrativeComponent_Template_ul_activeIdChange_2_listener($event) {
            return ctx.active = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Hist\xF3rias");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AdministrativeComponent_ng_template_7_Template, 1, 0, "ng-template", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Par\xE2metros");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AdministrativeComponent_ng_template_11_Template, 1, 0, "ng-template", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 7);
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("activeId", ctx.active);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbNavItem", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbNavItem", 2)("disabled", !ctx.isAdmin);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbNavOutlet", _r0);
        }
      },
      directives: [_admin_header_admin_header_component__WEBPACK_IMPORTED_MODULE_3__["AdminHeaderComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbNav"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbNavItem"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbNavLink"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbNavContent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbNavOutlet"], _historias_historias_component__WEBPACK_IMPORTED_MODULE_5__["HistoriasComponent"], _parametros_parametros_component__WEBPACK_IMPORTED_MODULE_6__["ParametrosComponent"]],
      styles: [".content[_ngcontent-%COMP%] {\n  margin: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ERVYvanVsaWEvYmFkbHlwbGF5ZWQvc3JjL2FwcC9hZG1pbmlzdHJhdGl2ZS9hZG1pbmlzdHJhdGl2ZS5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvYWRtaW5pc3RyYXRpdmUvYWRtaW5pc3RyYXRpdmUuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9hZG1pbmlzdHJhdGl2ZS9hZG1pbmlzdHJhdGl2ZS5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50e1xuICAgIG1hcmdpbjogMTZweDtcbn0iLCIuY29udGVudCB7XG4gIG1hcmdpbjogMTZweDtcbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdministrativeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-administrative',
          templateUrl: './administrative.component.html',
          styleUrls: ['./administrative.component.less']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/administrative/historias-detalhes/historias-detalhes.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/administrative/historias-detalhes/historias-detalhes.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: HistoriasDetalhesComponent */

  /***/
  function srcAppAdministrativeHistoriasDetalhesHistoriasDetalhesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HistoriasDetalhesComponent", function () {
      return HistoriasDetalhesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _services_historia_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/historia.service */
    "./src/app/services/historia.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function HistoriasDetalhesComponent_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r24.historia.printscreen, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function HistoriasDetalhesComponent_span_61_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "N\xE3o Punido");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HistoriasDetalhesComponent_span_62_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "N\xE3o Punido");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HistoriasDetalhesComponent_span_63_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "N\xE3o Punido");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HistoriasDetalhesComponent_td_67_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "small");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Verificado");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HistoriasDetalhesComponent_td_68_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "small");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Pendente");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var HistoriasDetalhesComponent =
    /*#__PURE__*/
    function () {
      function HistoriasDetalhesComponent(activeModal, historiaService, router) {
        _classCallCheck(this, HistoriasDetalhesComponent);

        this.activeModal = activeModal;
        this.historiaService = historiaService;
        this.router = router;
      }

      _createClass(HistoriasDetalhesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log(this.historia);
        }
      }, {
        key: "passBack",
        value: function passBack() {
          this.activeModal.close();
        }
      }, {
        key: "apagarHistoria",
        value: function apagarHistoria() {
          var _this = this;

          this.historiaService.deleteHistoria(this.historia["_id"]).subscribe(function (data) {
            _this.activeModal.close();
          });
        }
      }, {
        key: "apagarMedia",
        value: function apagarMedia() {
          this.historia['printscreen'] = '';
          this.historiaService.updateHistoria(this.historia).subscribe(function (data) {
            console.log(data);
          });
        }
      }, {
        key: "baixarMedia",
        value: function baixarMedia() {
          if (this.historia['printscreen'] != null && this.historia['printscreen'] != '') {
            //this.router.navigate([this.historia['printscreen']]);
            //window.location.href = this.historia['printscreen'];
            //window.open(this.historia['printscreen'], "_blank");
            var filename = 'download.jpg';
            var contentType = 'image/png';
            var blobData = this.convertBase64ToBlobData(this.historia['printscreen']);

            if (window.navigator && window.navigator.msSaveOrOpenBlob) {
              //IE
              window.navigator.msSaveOrOpenBlob(blobData, filename);
            } else {
              // chrome
              var blob = new Blob([blobData], {
                type: contentType
              });
              var url = window.URL.createObjectURL(blob);
              window.open(url); // const link = document.createElement('a');
              // link.href = url;
              // link.download = filename;
              // link.click();
            }
          }
        }
      }, {
        key: "marcarNaoVerificado",
        value: function marcarNaoVerificado() {
          this.historia['verificado'] = false;
          this.historiaService.updateHistoria(this.historia).subscribe(function (data) {});
        }
      }, {
        key: "marcarVerificado",
        value: function marcarVerificado() {
          this.historia['verificado'] = true;
          this.historiaService.updateHistoria(this.historia).subscribe(function (data) {});
        }
      }, {
        key: "convertBase64ToBlobData",
        value: function convertBase64ToBlobData(base64Data) {
          var contentType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'image/png';
          var sliceSize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 512;
          var byteCharacters = atob(base64Data);
          var byteArrays = [];

          for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            var slice = byteCharacters.slice(offset, offset + sliceSize);
            var byteNumbers = new Array(slice.length);

            for (var i = 0; i < slice.length; i++) {
              byteNumbers[i] = slice.charCodeAt(i);
            }

            var byteArray = new Uint8Array(byteNumbers);
            byteArrays.push(byteArray);
          }

          var blob = new Blob(byteArrays, {
            type: contentType
          });
          return blob;
        }
      }]);

      return HistoriasDetalhesComponent;
    }();

    HistoriasDetalhesComponent.ɵfac = function HistoriasDetalhesComponent_Factory(t) {
      return new (t || HistoriasDetalhesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_historia_service__WEBPACK_IMPORTED_MODULE_2__["HistoriaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    HistoriasDetalhesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HistoriasDetalhesComponent,
      selectors: [["app-historias-detalhes"]],
      inputs: {
        historia: "historia"
      },
      decls: 88,
      vars: 16,
      consts: [[1, "modal-header"], ["src", "/assets/images/bpadminlogo.png", "width", "120", "height", "50"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "row"], ["class", "col-4", 4, "ngIf"], [1, "col-8", "information"], [1, "col-3"], [1, "label"], [1, "data"], [1, "col-6"], [1, "col-12"], ["class", "data", 4, "ngIf"], [4, "ngIf"], [1, "modal-footer"], ["type", "submit", 1, "btn", "btn-warning", "w-30", 3, "click"], [1, "fa", "fa-chevron-left", 2, "margin-right", "4px"], ["type", "submit", 1, "btn", "btn-danger", "w-30", 3, "click"], [1, "fa", "fa-trash", 2, "margin-right", "4px"], ["type", "submit", "disabled", "", 1, "btn", "btn-warning", "w-30", 3, "click"], [1, "fa", "fa-download", 2, "margin-right", "4px"], [1, "fa", "fa-check", 2, "margin-right", "4px"], ["type", "submit", 1, "btn", "btn-success", "w-30", 3, "click"], [1, "col-4"], ["width", "300", 3, "src"], [1, "badgeDanger"], [1, "badgeDefault"], [1, "badgeSuccess"], [1, "fa", "fa-check-square", "verificado"], [1, "fa", "fa-pencil-square", "pendente"]],
      template: function HistoriasDetalhesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HistoriasDetalhesComponent_Template_button_click_3_listener() {
            return ctx.activeModal.dismiss("Cross click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, HistoriasDetalhesComponent_div_8_Template, 4, 1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Nome");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Idade");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "G\xEAnero");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Pais");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Jogo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Data do Evento");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Detalhes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Data Sistema");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Punido");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, HistoriasDetalhesComponent_span_61_Template, 3, 0, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, HistoriasDetalhesComponent_span_62_Template, 3, 0, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, HistoriasDetalhesComponent_span_63_Template, 3, 0, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Situa\xE7\xE3o");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, HistoriasDetalhesComponent_td_67_Template, 4, 0, "td", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](68, HistoriasDetalhesComponent_td_68_Template, 4, 0, "td", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HistoriasDetalhesComponent_Template_button_click_70_listener() {
            return ctx.passBack();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Cancelar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HistoriasDetalhesComponent_Template_button_click_73_listener() {
            return ctx.apagarHistoria();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Apagar Hist\xF3ria");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HistoriasDetalhesComponent_Template_button_click_76_listener() {
            return ctx.apagarMedia();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Apagar Media");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HistoriasDetalhesComponent_Template_button_click_79_listener() {
            return ctx.baixarMedia();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "i", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Baixar Media");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HistoriasDetalhesComponent_Template_button_click_82_listener() {
            return ctx.marcarNaoVerificado();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "i", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "N\xE3o Verificado");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HistoriasDetalhesComponent_Template_button_click_85_listener() {
            return ctx.marcarVerificado();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "i", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Verificado");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.historia.printscreen);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.historia.nome);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.historia.idade);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.historia.genero);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.historia.pais);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.historia.jogo);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", ctx.historia.dataDia, " / ", ctx.historia.dataMes, " / ", ctx.historia.dataAno, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.historia.detalhes);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.historia.data);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.historia.foiPunido == "nao");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.historia.foiPunido == "naoSei");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.historia.foiPunido == "sim");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.historia.verificado);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.historia.verificado);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
      styles: [".information[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.label[_ngcontent-%COMP%] {\n  font-weight: 800;\n  position: absolute;\n  margin-top: -20px;\n}\n.pendente[_ngcontent-%COMP%] {\n  color: orangered;\n}\n.verificado[_ngcontent-%COMP%] {\n  color: limegreen;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ERVYvanVsaWEvYmFkbHlwbGF5ZWQvc3JjL2FwcC9hZG1pbmlzdHJhdGl2ZS9oaXN0b3JpYXMtZGV0YWxoZXMvaGlzdG9yaWFzLWRldGFsaGVzLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9hZG1pbmlzdHJhdGl2ZS9oaXN0b3JpYXMtZGV0YWxoZXMvaGlzdG9yaWFzLWRldGFsaGVzLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUNDSjtBRENBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDQ0o7QURFQTtFQUNJLGdCQUFBO0FDQUo7QURHQTtFQUNJLGdCQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9hZG1pbmlzdHJhdGl2ZS9oaXN0b3JpYXMtZGV0YWxoZXMvaGlzdG9yaWFzLWRldGFsaGVzLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmluZm9ybWF0aW9ue1xuICAgIG1hcmdpbi10b3A6MjBweDtcbn1cbi5sYWJlbHtcbiAgICBmb250LXdlaWdodDogODAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBtYXJnaW4tdG9wOiAtMjBweDtcbn1cblxuLnBlbmRlbnRle1xuICAgIGNvbG9yOm9yYW5nZXJlZDtcbn1cblxuLnZlcmlmaWNhZG97XG4gICAgY29sb3I6bGltZWdyZWVuO1xufSIsIi5pbmZvcm1hdGlvbiB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4ubGFiZWwge1xuICBmb250LXdlaWdodDogODAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi10b3A6IC0yMHB4O1xufVxuLnBlbmRlbnRlIHtcbiAgY29sb3I6IG9yYW5nZXJlZDtcbn1cbi52ZXJpZmljYWRvIHtcbiAgY29sb3I6IGxpbWVncmVlbjtcbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HistoriasDetalhesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-historias-detalhes',
          templateUrl: './historias-detalhes.component.html',
          styleUrls: ['./historias-detalhes.component.less']
        }]
      }], function () {
        return [{
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]
        }, {
          type: _services_historia_service__WEBPACK_IMPORTED_MODULE_2__["HistoriaService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, {
        historia: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/administrative/historias/historias.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/administrative/historias/historias.component.ts ***!
    \*****************************************************************/

  /*! exports provided: HistoriasComponent */

  /***/
  function srcAppAdministrativeHistoriasHistoriasComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HistoriasComponent", function () {
      return HistoriasComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _historias_detalhes_historias_detalhes_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../historias-detalhes/historias-detalhes.component */
    "./src/app/administrative/historias-detalhes/historias-detalhes.component.ts");
    /* harmony import */


    var _services_historia_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/historia.service */
    "./src/app/services/historia.service.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function HistoriasComponent_tr_23_td_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var historia_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", historia_r31.printscreen, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function HistoriasComponent_tr_23_td_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "td");
      }
    }

    function HistoriasComponent_tr_23_td_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "small", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Verificado");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HistoriasComponent_tr_23_td_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "small");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Pendente");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HistoriasComponent_tr_23_Template(rf, ctx) {
      if (rf & 1) {
        var _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HistoriasComponent_tr_23_td_1_Template, 2, 1, "td", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HistoriasComponent_tr_23_td_2_Template, 1, 0, "td", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HistoriasComponent_tr_23_td_3_Template, 4, 0, "td", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HistoriasComponent_tr_23_td_4_Template, 4, 0, "td", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HistoriasComponent_tr_23_Template_button_click_14_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38);

          var historia_r31 = ctx.$implicit;

          var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r37.openModal(historia_r31._id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Detalhes");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HistoriasComponent_tr_23_Template_button_click_17_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38);

          var historia_r31 = ctx.$implicit;

          var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r39.removerHistoria(historia_r31._id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Remover");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Banir IP");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var historia_r31 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", historia_r31.printscreen);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !historia_r31.printscreen);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", historia_r31.verificado);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !historia_r31.verificado);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](historia_r31.nome);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](historia_r31.genero);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](historia_r31.jogo);
      }
    }

    var HistoriasComponent =
    /*#__PURE__*/
    function () {
      function HistoriasComponent(historiaService, modalService) {
        _classCallCheck(this, HistoriasComponent);

        this.historiaService = historiaService;
        this.modalService = modalService;
        this.historias = [];
      }

      _createClass(HistoriasComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.historiaService.getAllHistorias().subscribe(function (data) {
            _this2.historias = data;
          }, function (err) {
            _this2.historias = {};
          });
        }
      }, {
        key: "openModal",
        value: function openModal(id) {
          var _this3 = this;

          this.historiaService.getHistoriaById(id).subscribe(function (data) {
            var modalRef = _this3.modalService.open(_historias_detalhes_historias_detalhes_component__WEBPACK_IMPORTED_MODULE_1__["HistoriasDetalhesComponent"], {
              size: 'xl'
            });

            modalRef.componentInstance.historia = data[0];
          });
        }
      }, {
        key: "removerHistoria",
        value: function removerHistoria(id) {
          var _this4 = this;

          this.historiaService.deleteHistoria(id).subscribe(function (data) {
            _this4.ngOnInit();
          });
        }
      }]);

      return HistoriasComponent;
    }();

    HistoriasComponent.ɵfac = function HistoriasComponent_Factory(t) {
      return new (t || HistoriasComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_historia_service__WEBPACK_IMPORTED_MODULE_2__["HistoriaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]));
    };

    HistoriasComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HistoriasComponent,
      selectors: [["app-historias"]],
      decls: 24,
      vars: 1,
      consts: [[1, "content"], [1, "row", "content"], [1, "fa", "fa-comment", "fa-2x", 2, "margin-right", "10px"], [1, "row"], [1, "col-12"], [1, "table"], ["scope", "col"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "col-3"], ["type", "button", 1, "btn", "btn-sm", "btn", "btn-outline-primary", 3, "click"], ["type", "button", 1, "btn", "btn-sm", "btn", "btn-outline-danger", 3, "click"], ["type", "button", "disabled", "", 1, "btn", "btn-sm", "btn", "btn-outline-dark"], ["width", "64", "height", "64", 3, "src"], [1, "fa", "fa-check-square", "verificado"], [1, "verificado"], [1, "fa", "fa-pencil-square", "pendente"]],
      template: function HistoriasComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Hist\xF3rias");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "table", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Print");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Verificado");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Nome");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "G\xEAnero");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Jogo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "A\xE7\xF5es");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, HistoriasComponent_tr_23_Template, 22, 7, "tr", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.historias);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
      styles: [".content[_ngcontent-%COMP%] {\n  margin: 32px;\n}\n.verificado[_ngcontent-%COMP%] {\n  color: #888;\n}\n.pendente[_ngcontent-%COMP%] {\n  color: orangered;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ERVYvanVsaWEvYmFkbHlwbGF5ZWQvc3JjL2FwcC9hZG1pbmlzdHJhdGl2ZS9oaXN0b3JpYXMvaGlzdG9yaWFzLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9hZG1pbmlzdHJhdGl2ZS9oaXN0b3JpYXMvaGlzdG9yaWFzLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQ0NKO0FERUE7RUFDSSxXQUFBO0FDQUo7QURHQTtFQUNJLGdCQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9hZG1pbmlzdHJhdGl2ZS9oaXN0b3JpYXMvaGlzdG9yaWFzLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnR7XG4gICAgbWFyZ2luOiAzMnB4O1xufVxuXG4udmVyaWZpY2Fkb3tcbiAgICBjb2xvcjojODg4O1xufVxuXG4ucGVuZGVudGV7XG4gICAgY29sb3I6b3JhbmdlcmVkXG59IiwiLmNvbnRlbnQge1xuICBtYXJnaW46IDMycHg7XG59XG4udmVyaWZpY2FkbyB7XG4gIGNvbG9yOiAjODg4O1xufVxuLnBlbmRlbnRlIHtcbiAgY29sb3I6IG9yYW5nZXJlZDtcbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HistoriasComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-historias',
          templateUrl: './historias.component.html',
          styleUrls: ['./historias.component.less']
        }]
      }], function () {
        return [{
          type: _services_historia_service__WEBPACK_IMPORTED_MODULE_2__["HistoriaService"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/administrative/parametros/parametros-contatos/parametros-contatos.component.ts":
  /*!************************************************************************************************!*\
    !*** ./src/app/administrative/parametros/parametros-contatos/parametros-contatos.component.ts ***!
    \************************************************************************************************/

  /*! exports provided: ParametrosContatosComponent */

  /***/
  function srcAppAdministrativeParametrosParametrosContatosParametrosContatosComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ParametrosContatosComponent", function () {
      return ParametrosContatosComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_parametros_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../services/parametros.service */
    "./src/app/services/parametros.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var ParametrosContatosComponent =
    /*#__PURE__*/
    function () {
      function ParametrosContatosComponent(parametrosService) {
        _classCallCheck(this, ParametrosContatosComponent);

        this.parametrosService = parametrosService;
        this.contatos = {};
      }

      _createClass(ParametrosContatosComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.parametrosService.getContatos().subscribe(function (data) {
            _this5.contatos = data;
          });
        }
      }, {
        key: "salvarContatos",
        value: function salvarContatos() {
          this.parametrosService.saveContatos(this.contatos);
        }
      }]);

      return ParametrosContatosComponent;
    }();

    ParametrosContatosComponent.ɵfac = function ParametrosContatosComponent_Factory(t) {
      return new (t || ParametrosContatosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_parametros_service__WEBPACK_IMPORTED_MODULE_1__["ParametrosService"]));
    };

    ParametrosContatosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ParametrosContatosComponent,
      selectors: [["app-parametros-contatos"]],
      decls: 30,
      vars: 5,
      consts: [[1, "row"], [1, "col-4"], [1, "form-group"], ["type", "text", "name", "instagram", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "facebook", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "email", "name", "email", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "tweeter", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "disabledLable"], ["type", "text", "name", "youtube", "disabled", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "col-2"], ["type", "submit", 1, "btn", "btn-success", 3, "click"], [1, "fa", "fa-save", 2, "margin-right", "4px"]],
      template: function ParametrosContatosComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Instagram");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ParametrosContatosComponent_Template_input_ngModelChange_6_listener($event) {
            return ctx.contatos.instagram = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Facebook");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ParametrosContatosComponent_Template_input_ngModelChange_10_listener($event) {
            return ctx.contatos.facebook = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "E-mail");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ParametrosContatosComponent_Template_input_ngModelChange_14_listener($event) {
            return ctx.contatos.email = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Twitter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ParametrosContatosComponent_Template_input_ngModelChange_20_listener($event) {
            return ctx.contatos.tweeter = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Youtube");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ParametrosContatosComponent_Template_input_ngModelChange_24_listener($event) {
            return ctx.contatos.youtube = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ParametrosContatosComponent_Template_button_click_27_listener() {
            return ctx.salvarContatos();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Salvar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.contatos.instagram);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.contatos.facebook);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.contatos.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.contatos.tweeter);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.contatos.youtube);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]],
      styles: [".disabledLable[_ngcontent-%COMP%] {\n  color: #bbb;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ERVYvanVsaWEvYmFkbHlwbGF5ZWQvc3JjL2FwcC9hZG1pbmlzdHJhdGl2ZS9wYXJhbWV0cm9zL3BhcmFtZXRyb3MtY29udGF0b3MvcGFyYW1ldHJvcy1jb250YXRvcy5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvYWRtaW5pc3RyYXRpdmUvcGFyYW1ldHJvcy9wYXJhbWV0cm9zLWNvbnRhdG9zL3BhcmFtZXRyb3MtY29udGF0b3MuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9hZG1pbmlzdHJhdGl2ZS9wYXJhbWV0cm9zL3BhcmFtZXRyb3MtY29udGF0b3MvcGFyYW1ldHJvcy1jb250YXRvcy5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaXNhYmxlZExhYmxle1xuICAgIGNvbG9yOiNiYmI7XG59IiwiLmRpc2FibGVkTGFibGUge1xuICBjb2xvcjogI2JiYjtcbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ParametrosContatosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-parametros-contatos',
          templateUrl: './parametros-contatos.component.html',
          styleUrls: ['./parametros-contatos.component.less']
        }]
      }], function () {
        return [{
          type: _services_parametros_service__WEBPACK_IMPORTED_MODULE_1__["ParametrosService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/administrative/parametros/parametros-usuarios/parametros-usuarios.component.ts":
  /*!************************************************************************************************!*\
    !*** ./src/app/administrative/parametros/parametros-usuarios/parametros-usuarios.component.ts ***!
    \************************************************************************************************/

  /*! exports provided: ParametrosUsuariosComponent */

  /***/
  function srcAppAdministrativeParametrosParametrosUsuariosParametrosUsuariosComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ParametrosUsuariosComponent", function () {
      return ParametrosUsuariosComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ParametrosUsuariosComponent_tr_42_Template(rf, ctx) {
      if (rf & 1) {
        var _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ParametrosUsuariosComponent_tr_42_Template_button_click_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43);

          var usuario_r41 = ctx.$implicit;

          var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r42.removeUsuario(usuario_r41._id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Remover");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var usuario_r41 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](usuario_r41 == null ? null : usuario_r41.username);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](usuario_r41 == null ? null : usuario_r41.email);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](usuario_r41 == null ? null : usuario_r41.roles[0] == null ? null : usuario_r41.roles[0].name);
      }
    }

    var ParametrosUsuariosComponent =
    /*#__PURE__*/
    function () {
      function ParametrosUsuariosComponent(authService) {
        _classCallCheck(this, ParametrosUsuariosComponent);

        this.authService = authService;
        this.usuario = {};
      }

      _createClass(ParametrosUsuariosComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.authService.getUsuarios().subscribe(function (data) {
            _this6.usuarios = data;
          });
        }
      }, {
        key: "adicionarUsuario",
        value: function adicionarUsuario() {
          var _this7 = this;

          this.authService.insertUsuario(this.usuario).subscribe(function (data) {
            _this7.authService.getUsuarios().subscribe(function (dataUser) {
              _this7.usuarios = dataUser;
            });
          });
        }
      }, {
        key: "removeUsuario",
        value: function removeUsuario(id) {
          var _this8 = this;

          this.authService.removerUSuario(id).subscribe(function (data) {
            _this8.authService.getUsuarios().subscribe(function (dataUser) {
              _this8.usuarios = dataUser;
            });
          });
        }
      }]);

      return ParametrosUsuariosComponent;
    }();

    ParametrosUsuariosComponent.ɵfac = function ParametrosUsuariosComponent_Factory(t) {
      return new (t || ParametrosUsuariosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]));
    };

    ParametrosUsuariosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ParametrosUsuariosComponent,
      selectors: [["app-parametros-usuarios"]],
      decls: 43,
      vars: 5,
      consts: [[1, "row"], [1, "col-3"], [1, "form-group"], ["type", "text", "name", "username", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "email", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "password", "name", "password", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "roles", 1, "form-control", 3, "ngModel", "ngModelChange"], ["value", "admin"], ["value", "moderator"], ["type", "button", 1, "btn", "btn-sm", "btn-success", 3, "click"], [1, "fa", "fa-plus", 2, "margin-right", "4px"], [1, "col-12"], [1, "table"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-sm", "btn-danger", 3, "click"], [1, "fa", "fa-times", 2, "margin-right", "4px"]],
      template: function ParametrosUsuariosComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Username");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ParametrosUsuariosComponent_Template_input_ngModelChange_5_listener($event) {
            return ctx.usuario.username = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "E-mail");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ParametrosUsuariosComponent_Template_input_ngModelChange_10_listener($event) {
            return ctx.usuario.email = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Senha");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ParametrosUsuariosComponent_Template_input_ngModelChange_14_listener($event) {
            return ctx.usuario.password = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Permiss\xE3o");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "select", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ParametrosUsuariosComponent_Template_select_ngModelChange_18_listener($event) {
            return ctx.usuario.roles = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Administrador");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "option", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Moderador");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ParametrosUsuariosComponent_Template_button_click_25_listener() {
            return ctx.adicionarUsuario();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Adicionar Usu\xE1rio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "table", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "th", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Usu\xE1rio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "th", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "E-mail");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "th", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Permiss\xE3o");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, ParametrosUsuariosComponent_tr_42_Template, 13, 3, "tr", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.usuario.username);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.usuario.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.usuario.password);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.usuario.roles);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.usuarios);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluaXN0cmF0aXZlL3BhcmFtZXRyb3MvcGFyYW1ldHJvcy11c3Vhcmlvcy9wYXJhbWV0cm9zLXVzdWFyaW9zLmNvbXBvbmVudC5sZXNzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ParametrosUsuariosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-parametros-usuarios',
          templateUrl: './parametros-usuarios.component.html',
          styleUrls: ['./parametros-usuarios.component.less']
        }]
      }], function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/administrative/parametros/parametros.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/administrative/parametros/parametros.component.ts ***!
    \*******************************************************************/

  /*! exports provided: ParametrosComponent */

  /***/
  function srcAppAdministrativeParametrosParametrosComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ParametrosComponent", function () {
      return ParametrosComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _parametros_contatos_parametros_contatos_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./parametros-contatos/parametros-contatos.component */
    "./src/app/administrative/parametros/parametros-contatos/parametros-contatos.component.ts");
    /* harmony import */


    var _parametros_usuarios_parametros_usuarios_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./parametros-usuarios/parametros-usuarios.component */
    "./src/app/administrative/parametros/parametros-usuarios/parametros-usuarios.component.ts");

    var ParametrosComponent =
    /*#__PURE__*/
    function () {
      function ParametrosComponent() {
        _classCallCheck(this, ParametrosComponent);
      }

      _createClass(ParametrosComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ParametrosComponent;
    }();

    ParametrosComponent.ɵfac = function ParametrosComponent_Factory(t) {
      return new (t || ParametrosComponent)();
    };

    ParametrosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ParametrosComponent,
      selectors: [["app-parametros"]],
      decls: 18,
      vars: 0,
      consts: [[1, "content"], [1, "row"], [1, "col-12"], [1, "fa", "fa-cog", 2, "margin-right", "10px"], [1, "fa", "fa-user", 2, "margin-right", "10px"]],
      template: function ParametrosComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Par\xE2metros");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-parametros-contatos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Usu\xE1rios");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "app-parametros-usuarios");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_parametros_contatos_parametros_contatos_component__WEBPACK_IMPORTED_MODULE_1__["ParametrosContatosComponent"], _parametros_usuarios_parametros_usuarios_component__WEBPACK_IMPORTED_MODULE_2__["ParametrosUsuariosComponent"]],
      styles: [".content[_ngcontent-%COMP%] {\n  margin: 32px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ERVYvanVsaWEvYmFkbHlwbGF5ZWQvc3JjL2FwcC9hZG1pbmlzdHJhdGl2ZS9wYXJhbWV0cm9zL3BhcmFtZXRyb3MuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL2FkbWluaXN0cmF0aXZlL3BhcmFtZXRyb3MvcGFyYW1ldHJvcy5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2FkbWluaXN0cmF0aXZlL3BhcmFtZXRyb3MvcGFyYW1ldHJvcy5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50e1xuICAgIG1hcmdpbjogMzJweDtcbn0iLCIuY29udGVudCB7XG4gIG1hcmdpbjogMzJweDtcbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ParametrosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-parametros',
          templateUrl: './parametros.component.html',
          styleUrls: ['./parametros.component.less']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/algumas-historias/algumas-historias.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/algumas-historias/algumas-historias.component.ts ***!
    \******************************************************************/

  /*! exports provided: AlgumasHistoriasComponent */

  /***/
  function srcAppAlgumasHistoriasAlgumasHistoriasComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlgumasHistoriasComponent", function () {
      return AlgumasHistoriasComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AlgumasHistoriasComponent =
    /*#__PURE__*/
    function () {
      function AlgumasHistoriasComponent() {
        _classCallCheck(this, AlgumasHistoriasComponent);

        this.slides = ["a", "b", "c"];
      }

      _createClass(AlgumasHistoriasComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AlgumasHistoriasComponent;
    }();

    AlgumasHistoriasComponent.ɵfac = function AlgumasHistoriasComponent_Factory(t) {
      return new (t || AlgumasHistoriasComponent)();
    };

    AlgumasHistoriasComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AlgumasHistoriasComponent,
      selectors: [["app-algumas-historias"]],
      decls: 25,
      vars: 0,
      consts: [["id", "targetHistorias", 1, "card", "card-historias"], ["id", "page-algumas-historias", 1, "card-body", "anchor", "anchor-algumas-historias"], [1, "card-title", "historias-title"], ["width", "150", "height", "150", "src", "/assets/images/megafone.png", 1, "image-megafone"], ["width", "150", "height", "150", "src", "/assets/images/sirene.png", 1, "image-sirene"], ["width", "200", "height", "150", "src", "/assets/images/xingamento.png", 1, "image-xingamento"], [1, "historias-slider"], [1, "elfsight-app-eede0e8d-680c-4beb-aa40-b54bd79f3b8b"]],
      template: function AlgumasHistoriasComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Algumas Hist\xF3rias");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Abaixo apresentam-se algumas ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "hist\xF3rias de ass\xE9dio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, ", enviadas por ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "mulheres gamers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " do que j\xE1 presenciaram no ambiente virtual, os relatos s\xE3o 100% verdadeiros e muitos possuem ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "nunhuma solu\xE7\xE3o");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " por parte dos desenvolvedores do game.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Para saber mais detalhes do caso clique em \"");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "ver mais");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\" e seja redirecionado para nossa p\xE1gina do Instagram com outros casos.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".card-historias[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/images/macorrone.png\");\n  width: 100%;\n  color: #fff;\n}\n.card-body[_ngcontent-%COMP%] {\n  width: 70%;\n  margin: auto;\n}\n.historias-title[_ngcontent-%COMP%] {\n  font-family: 'Permanent Marker', cursive;\n  color: #fff;\n}\n.historias-slider[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/images/forma_historias.png\");\n  background-repeat: no-repeat;\n  background-size: contain;\n  height: 500px;\n}\n.historias-slider-content[_ngcontent-%COMP%] {\n  width: 80%;\n  margin: auto;\n  padding-top: 200px;\n  color: #000;\n}\n.image-megafone[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 20px;\n  left: 20px;\n}\n.image-sirene[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 20px;\n  right: 20px;\n}\n.image-xingamento[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 220px;\n  right: 20px;\n}\n.elfsight-app-eede0e8d-680c-4beb-aa40-b54bd79f3b8b[_ngcontent-%COMP%] {\n  margin: auto;\n  padding-top: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ERVYvanVsaWEvYmFkbHlwbGF5ZWQvc3JjL2FwcC9hbGd1bWFzLWhpc3Rvcmlhcy9hbGd1bWFzLWhpc3Rvcmlhcy5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvYWxndW1hcy1oaXN0b3JpYXMvYWxndW1hcy1oaXN0b3JpYXMuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxREFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FDQ0o7QURFQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0FDQUo7QURHQTtFQUNJLHdDQUFBO0VBQ0EsV0FBQTtBQ0RKO0FESUE7RUFDSSwyREFBQTtFQUNBLDRCQUFBO0VBQ0Esd0JBQUE7RUFDQSxhQUFBO0FDRko7QURLQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDSEo7QURNQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUNKSjtBRE9BO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0xKO0FEUUE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FDTko7QURTQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtBQ1BKIiwiZmlsZSI6InNyYy9hcHAvYWxndW1hcy1oaXN0b3JpYXMvYWxndW1hcy1oaXN0b3JpYXMuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1oaXN0b3JpYXN7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvbWFjb3Jyb25lLnBuZ1wiKTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBjb2xvcjojZmZmO1xufVxuXG4uY2FyZC1ib2R5e1xuICAgIHdpZHRoOiA3MCU7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuXG4uaGlzdG9yaWFzLXRpdGxle1xuICAgIGZvbnQtZmFtaWx5OiAnUGVybWFuZW50IE1hcmtlcicsIGN1cnNpdmU7XG4gICAgY29sb3I6I2ZmZjtcbn1cblxuLmhpc3Rvcmlhcy1zbGlkZXJ7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvZm9ybWFfaGlzdG9yaWFzLnBuZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICBoZWlnaHQ6IDUwMHB4O1xufVxuXG4uaGlzdG9yaWFzLXNsaWRlci1jb250ZW50e1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHBhZGRpbmctdG9wOiAyMDBweDtcbiAgICBjb2xvcjojMDAwO1xufVxuXG4uaW1hZ2UtbWVnYWZvbmV7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMjBweDtcbiAgICBsZWZ0OiAyMHB4O1xufVxuXG4uaW1hZ2Utc2lyZW5le1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDIwcHg7XG4gICAgcmlnaHQ6IDIwcHg7XG59XG5cbi5pbWFnZS14aW5nYW1lbnRve1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDIyMHB4O1xuICAgIHJpZ2h0OiAyMHB4O1xufVxuXG4uZWxmc2lnaHQtYXBwLWVlZGUwZThkLTY4MGMtNGJlYi1hYTQwLWI1NGJkNzlmM2I4YntcbiAgICBtYXJnaW46IGF1dG87XG4gICAgcGFkZGluZy10b3A6IDUwcHg7XG59IiwiLmNhcmQtaGlzdG9yaWFzIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvbWFjb3Jyb25lLnBuZ1wiKTtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmNhcmQtYm9keSB7XG4gIHdpZHRoOiA3MCU7XG4gIG1hcmdpbjogYXV0bztcbn1cbi5oaXN0b3JpYXMtdGl0bGUge1xuICBmb250LWZhbWlseTogJ1Blcm1hbmVudCBNYXJrZXInLCBjdXJzaXZlO1xuICBjb2xvcjogI2ZmZjtcbn1cbi5oaXN0b3JpYXMtc2xpZGVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvZm9ybWFfaGlzdG9yaWFzLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBoZWlnaHQ6IDUwMHB4O1xufVxuLmhpc3Rvcmlhcy1zbGlkZXItY29udGVudCB7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbjogYXV0bztcbiAgcGFkZGluZy10b3A6IDIwMHB4O1xuICBjb2xvcjogIzAwMDtcbn1cbi5pbWFnZS1tZWdhZm9uZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAyMHB4O1xuICBsZWZ0OiAyMHB4O1xufVxuLmltYWdlLXNpcmVuZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAyMHB4O1xuICByaWdodDogMjBweDtcbn1cbi5pbWFnZS14aW5nYW1lbnRvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIyMHB4O1xuICByaWdodDogMjBweDtcbn1cbi5lbGZzaWdodC1hcHAtZWVkZTBlOGQtNjgwYy00YmViLWFhNDAtYjU0YmQ3OWYzYjhiIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nLXRvcDogNTBweDtcbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlgumasHistoriasComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-algumas-historias',
          templateUrl: './algumas-historias.component.html',
          styleUrls: ['./algumas-historias.component.less']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _administrative_administrative_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./administrative/administrative.component */
    "./src/app/administrative/administrative.component.ts");

    var routes = [{
      path: "",
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }, {
      path: "administrative",
      component: _administrative_administrative_component__WEBPACK_IMPORTED_MODULE_3__["AdministrativeComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'badlyplayed';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.less']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-slick-carousel */
    "./node_modules/ngx-slick-carousel/__ivy_ngcc__/fesm2015/ngx-slick-carousel.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _layout_hero_hero_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./layout/hero/hero.component */
    "./src/app/layout/hero/hero.component.ts");
    /* harmony import */


    var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./layout/header/header.component */
    "./src/app/layout/header/header.component.ts");
    /* harmony import */


    var _sobre_sobre_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./sobre/sobre.component */
    "./src/app/sobre/sobre.component.ts");
    /* harmony import */


    var _algumas_historias_algumas_historias_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./algumas-historias/algumas-historias.component */
    "./src/app/algumas-historias/algumas-historias.component.ts");
    /* harmony import */


    var _contar_historia_contar_historia_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./contar-historia/contar-historia.component */
    "./src/app/contar-historia/contar-historia.component.ts");
    /* harmony import */


    var _manifesto_manifesto_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./manifesto/manifesto.component */
    "./src/app/manifesto/manifesto.component.ts");
    /* harmony import */


    var _contato_contato_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./contato/contato.component */
    "./src/app/contato/contato.component.ts");
    /* harmony import */


    var _rodape_rodape_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./rodape/rodape.component */
    "./src/app/rodape/rodape.component.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _modal_login_modal_login_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./modal-login/modal-login.component */
    "./src/app/modal-login/modal-login.component.ts");
    /* harmony import */


    var _modal_administrative_modal_administrative_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./modal-administrative/modal-administrative.component */
    "./src/app/modal-administrative/modal-administrative.component.ts");
    /* harmony import */


    var _administrative_historias_historias_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./administrative/historias/historias.component */
    "./src/app/administrative/historias/historias.component.ts");
    /* harmony import */


    var _administrative_parametros_parametros_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./administrative/parametros/parametros.component */
    "./src/app/administrative/parametros/parametros.component.ts");
    /* harmony import */


    var _administrative_parametros_parametros_contatos_parametros_contatos_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./administrative/parametros/parametros-contatos/parametros-contatos.component */
    "./src/app/administrative/parametros/parametros-contatos/parametros-contatos.component.ts");
    /* harmony import */


    var _administrative_parametros_parametros_usuarios_parametros_usuarios_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./administrative/parametros/parametros-usuarios/parametros-usuarios.component */
    "./src/app/administrative/parametros/parametros-usuarios/parametros-usuarios.component.ts");
    /* harmony import */


    var _administrative_administrative_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./administrative/administrative.component */
    "./src/app/administrative/administrative.component.ts");
    /* harmony import */


    var _administrative_admin_header_admin_header_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./administrative/admin-header/admin-header.component */
    "./src/app/administrative/admin-header/admin-header.component.ts");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
    /* harmony import */


    var _administrative_historias_detalhes_historias_detalhes_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./administrative/historias-detalhes/historias-detalhes.component */
    "./src/app/administrative/historias-detalhes/historias-detalhes.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_3__["SlickCarouselModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_25__["FontAwesomeModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], _layout_hero_hero_component__WEBPACK_IMPORTED_MODULE_7__["HeroComponent"], _layout_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"], _sobre_sobre_component__WEBPACK_IMPORTED_MODULE_9__["SobreComponent"], _algumas_historias_algumas_historias_component__WEBPACK_IMPORTED_MODULE_10__["AlgumasHistoriasComponent"], _contar_historia_contar_historia_component__WEBPACK_IMPORTED_MODULE_11__["ContarHistoriaComponent"], _manifesto_manifesto_component__WEBPACK_IMPORTED_MODULE_12__["ManifestoComponent"], _contato_contato_component__WEBPACK_IMPORTED_MODULE_13__["ContatoComponent"], _rodape_rodape_component__WEBPACK_IMPORTED_MODULE_14__["RodapeComponent"], _modal_login_modal_login_component__WEBPACK_IMPORTED_MODULE_17__["ModalLoginComponent"], _modal_administrative_modal_administrative_component__WEBPACK_IMPORTED_MODULE_18__["ModalAdministrativeComponent"], _administrative_historias_historias_component__WEBPACK_IMPORTED_MODULE_19__["HistoriasComponent"], _administrative_parametros_parametros_component__WEBPACK_IMPORTED_MODULE_20__["ParametrosComponent"], _administrative_parametros_parametros_contatos_parametros_contatos_component__WEBPACK_IMPORTED_MODULE_21__["ParametrosContatosComponent"], _administrative_parametros_parametros_usuarios_parametros_usuarios_component__WEBPACK_IMPORTED_MODULE_22__["ParametrosUsuariosComponent"], _administrative_administrative_component__WEBPACK_IMPORTED_MODULE_23__["AdministrativeComponent"], _administrative_admin_header_admin_header_component__WEBPACK_IMPORTED_MODULE_24__["AdminHeaderComponent"], _administrative_historias_detalhes_historias_detalhes_component__WEBPACK_IMPORTED_MODULE_26__["HistoriasDetalhesComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_3__["SlickCarouselModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_25__["FontAwesomeModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], _layout_hero_hero_component__WEBPACK_IMPORTED_MODULE_7__["HeroComponent"], _layout_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"], _sobre_sobre_component__WEBPACK_IMPORTED_MODULE_9__["SobreComponent"], _algumas_historias_algumas_historias_component__WEBPACK_IMPORTED_MODULE_10__["AlgumasHistoriasComponent"], _contar_historia_contar_historia_component__WEBPACK_IMPORTED_MODULE_11__["ContarHistoriaComponent"], _manifesto_manifesto_component__WEBPACK_IMPORTED_MODULE_12__["ManifestoComponent"], _contato_contato_component__WEBPACK_IMPORTED_MODULE_13__["ContatoComponent"], _rodape_rodape_component__WEBPACK_IMPORTED_MODULE_14__["RodapeComponent"], _modal_login_modal_login_component__WEBPACK_IMPORTED_MODULE_17__["ModalLoginComponent"], _modal_administrative_modal_administrative_component__WEBPACK_IMPORTED_MODULE_18__["ModalAdministrativeComponent"], _administrative_historias_historias_component__WEBPACK_IMPORTED_MODULE_19__["HistoriasComponent"], _administrative_parametros_parametros_component__WEBPACK_IMPORTED_MODULE_20__["ParametrosComponent"], _administrative_parametros_parametros_contatos_parametros_contatos_component__WEBPACK_IMPORTED_MODULE_21__["ParametrosContatosComponent"], _administrative_parametros_parametros_usuarios_parametros_usuarios_component__WEBPACK_IMPORTED_MODULE_22__["ParametrosUsuariosComponent"], _administrative_administrative_component__WEBPACK_IMPORTED_MODULE_23__["AdministrativeComponent"], _administrative_admin_header_admin_header_component__WEBPACK_IMPORTED_MODULE_24__["AdminHeaderComponent"], _administrative_historias_detalhes_historias_detalhes_component__WEBPACK_IMPORTED_MODULE_26__["HistoriasDetalhesComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_3__["SlickCarouselModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_25__["FontAwesomeModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
          entryComponents: [_modal_login_modal_login_component__WEBPACK_IMPORTED_MODULE_17__["ModalLoginComponent"], _modal_administrative_modal_administrative_component__WEBPACK_IMPORTED_MODULE_18__["ModalAdministrativeComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/contar-historia/contar-historia.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/contar-historia/contar-historia.component.ts ***!
    \**************************************************************/

  /*! exports provided: Alert, ContarHistoriaComponent */

  /***/
  function srcAppContarHistoriaContarHistoriaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Alert", function () {
      return Alert;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContarHistoriaComponent", function () {
      return ContarHistoriaComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_historia_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/historia.service */
    "./src/app/services/historia.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

    var _c0 = ["inputFile"];

    function ContarHistoriaComponent_option_31_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var idade_r11 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", idade_r11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](idade_r11);
      }
    }

    function ContarHistoriaComponent_option_52_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var dia_r12 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", dia_r12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dia_r12);
      }
    }

    function ContarHistoriaComponent_option_56_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var mes_r13 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", mes_r13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](mes_r13);
      }
    }

    function ContarHistoriaComponent_option_60_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ano_r14 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ano_r14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ano_r14);
      }
    }

    function ContarHistoriaComponent_option_74_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var pais_r15 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", pais_r15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](pais_r15);
      }
    }

    function ContarHistoriaComponent_p_110_Template(rf, ctx) {
      if (rf & 1) {
        var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ngb-alert", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("close", function ContarHistoriaComponent_p_110_Template_ngb_alert_close_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

          var alert_r16 = ctx.$implicit;

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r17.close(alert_r16);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var alert_r16 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", alert_r16.type);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](alert_r16.message);
      }
    }

    function ContarHistoriaComponent_div_111_Template(rf, ctx) {
      if (rf & 1) {
        var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContarHistoriaComponent_div_111_Template_button_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r19.removerPrint();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Remover");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r10.imageData, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    var Alert = function Alert() {
      _classCallCheck(this, Alert);
    };

    var ContarHistoriaComponent =
    /*#__PURE__*/
    function () {
      function ContarHistoriaComponent(historiaService) {
        _classCallCheck(this, ContarHistoriaComponent);

        this.historiaService = historiaService;
        this.historia = {
          'foiPunido': 'sim'
        };
        this.alerts = [];
        this.imageData = null; // validation

        this.validationErrorStyle = "2px solid red";
        this.validationOKStyle = null;
        this.idadeValidation = null;
        this.generoValidation = null;
        this.jogoValidation = null;
        this.dataDiaValidation = null;
        this.dataMesValidation = null;
        this.dataAnoValidation = null;
        this.paisValidation = null;
        this.detalhesValidation = null;
        this.idades = [];
        this.dias = [];
        this.anos = [];
        this.meses = [];
        this.paises = [];
      }

      _createClass(ContarHistoriaComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // idades
          for (var i = 1; i < 80; i++) {
            this.idades.push(i);
          } // dias


          for (var i = 1; i < 32; i++) {
            this.dias.push(i);
          } // anos


          for (var i = 2000; i < 2050; i++) {
            this.anos.push(i);
          }

          this.meses.push('Janeiro');
          this.meses.push('Fevereiro');
          this.meses.push('Março');
          this.meses.push('Abril');
          this.meses.push('Maio');
          this.meses.push('Junho');
          this.meses.push('Julho');
          this.meses.push('Agosto');
          this.meses.push('Setembro');
          this.meses.push('Outubro');
          this.meses.push('Novembro');
          this.meses.push('Dezembro');
          this.paises.push('Brasil');
        }
      }, {
        key: "contarHistoria",
        value: function contarHistoria() {
          var _this9 = this;

          if (this.validateForm()) {
            this.historia['printscreen'] = this.imageData;
            this.historiaService.insertHistoria(this.historia).subscribe(function (data) {
              var alert = new Alert();
              alert.type = "Success";
              alert.message = "Sua história foi contada com sucesso. Obrigado por colaborar com o projeto #badlyplayed.</strong>";

              _this9.alerts.push(alert);

              _this9.historia = {
                'foiPunido': 'sim'
              };
            }, function (err) {
              var alert = new Alert();
              alert.type = "Danger";
              alert.message = "Erro ao contar a sua história. Tente novamente em alguns minutos.";

              _this9.alerts.push(alert);
            });
          }
        }
      }, {
        key: "onItemChange",
        value: function onItemChange(value) {
          this.historia['foiPunido'] = value;
        }
      }, {
        key: "validateForm",
        value: function validateForm() {
          this.idadeValidation = this.historia['idade'] ? this.validationOKStyle : this.validationErrorStyle;
          this.generoValidation = this.historia['genero'] ? this.validationOKStyle : this.validationErrorStyle;
          this.jogoValidation = this.historia['jogo'] ? this.validationOKStyle : this.validationErrorStyle;
          this.dataDiaValidation = this.historia['dataDia'] ? this.validationOKStyle : this.validationErrorStyle;
          this.dataMesValidation = this.historia['dataMes'] ? this.validationOKStyle : this.validationErrorStyle;
          this.dataAnoValidation = this.historia['dataAno'] ? this.validationOKStyle : this.validationErrorStyle;
          this.paisValidation = this.historia['pais'] ? this.validationOKStyle : this.validationErrorStyle;
          this.detalhesValidation = this.historia['detalhes'] ? this.validationOKStyle : this.validationErrorStyle;
          var valid = this.historia['idade'] != undefined && this.historia['genero'] != undefined && this.historia['jogo'] != undefined && this.historia['dataDia'] != undefined && this.historia['dataMes'] != undefined && this.historia['dataAno'] != undefined && this.historia['pais'] != undefined && this.historia['detalhes'] != undefined;

          if (!valid) {
            var alert = new Alert();
            alert.type = "Warning";
            alert.message = "Informe todos os campos para contar a sua história.";
            this.alerts.push(alert);
          }

          return valid;
        }
      }, {
        key: "close",
        value: function close(alert) {
          this.alerts.splice(this.alerts.indexOf(alert), 1);
        }
      }, {
        key: "handleUpload",
        value: function handleUpload(event) {
          var _this10 = this;

          var file = event.target.files[0];
          console.log(file);

          if (file['size'] > 102400) {
            var alert = new Alert();
            alert.type = "Danger";
            alert.message = "Atenção. O tamanho máximo do arquivo de print é de 100kb.";
            this.alerts.push(alert);
            this.removerPrint();
            return;
          }

          if (file['type'] != 'image/jpeg' && file['type'] != 'image/png') {
            var alert = new Alert();
            alert.type = "Danger";
            alert.message = "O formato de imagem deve ser *.jpeg ou *.png.";
            this.alerts.push(alert);
            this.removerPrint();
            return;
          } //image/jpeg
          //image/png
          //type


          var reader = new FileReader();
          reader.readAsDataURL(file);

          reader.onload = function () {
            _this10.imageData = reader.result;
          };
        }
      }, {
        key: "removerPrint",
        value: function removerPrint() {
          this.imageData = null;
          this.myInputVariable.nativeElement.value = '';
        }
      }]);

      return ContarHistoriaComponent;
    }();

    ContarHistoriaComponent.ɵfac = function ContarHistoriaComponent_Factory(t) {
      return new (t || ContarHistoriaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_historia_service__WEBPACK_IMPORTED_MODULE_1__["HistoriaService"]));
    };

    ContarHistoriaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContarHistoriaComponent,
      selectors: [["app-contar-historia"]],
      viewQuery: function ContarHistoriaComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.myInputVariable = _t.first);
        }
      },
      decls: 112,
      vars: 32,
      consts: [["id", "targetConte", 1, "card", "card-conte"], ["id", "page-contar-historia", 1, "card-body", "anchor", "anchor-conte-historia"], [1, "card-title", "conte-historia-title"], ["width", "550", "height", "500", "src", "/assets/images/controle.png", 1, "image-controle"], [1, "row"], [1, "col-6"], [1, "row", "form-line"], [1, "col-5"], [1, "form-group"], ["for", "exampleInputEmail1", 1, "form-label"], ["name", "historia", "type", "text", "id", "formName", "placeholder", "Julia", 1, "form-control", "form-input", 3, "ngModel", "ngModelChange"], [1, "col-3"], ["for", "exampleFormControlSelect1", 1, "form-label"], ["name", "idade", "id", "formIdade", 1, "form-control", "form-input", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-4"], ["name", "genero", "id", "formGenero", 1, "form-control", "form-input", 3, "ngModel", "ngModelChange"], ["selected", "", "value", "feminino"], ["value", "masculino"], [1, "col-12"], ["name", "jogo", "type", "text", "id", "formName", "placeholder", "Nome do jogo", 1, "form-control", "form-input", 3, "ngModel", "ngModelChange"], ["name", "genero", "id", "formData", 1, "form-control", "form-input", 3, "ngModel", "ngModelChange"], ["for", "exampleFormControlFile1", 1, "form-label"], ["type", "file", "id", "formPrint", 1, "form-control-file", 3, "change"], ["inputFile", ""], ["name", "pais", "id", "formPais", 1, "form-control", "form-input", 3, "ngModel", "ngModelChange"], [1, "row", "form-text"], ["for", "exampleFormControlTextarea1", 1, "form-label"], ["name", "detalhes", "id", "formDetalhes", "rows", "3", 1, "form-control", "input-text", 3, "ngModel", "ngModelChange"], [1, "foi-punido-text"], [1, "radio-background"], [1, "container"], ["type", "radio", "value", "sim", "checked", "checked", "name", "foiPunidoRadio", 3, "change"], [1, "checkmark"], ["name", "foiPunidoNao", "value", "nao", "type", "radio", "name", "foiPunidoRadio", 3, "change"], ["type", "radio", "value", "naosei", "name", "foiPunidoRadio", 3, "change"], ["type", "submit", 1, "btn", "btn-envie", 3, "click"], [4, "ngFor", "ngForOf"], ["class", "row", 4, "ngIf"], [3, "value"], [3, "type", "close"], [1, "imagePreviewDiv"], ["width", "200", "height", "200", 1, "imagePreview", 3, "src"], ["type", "submit", 1, "btn", "btn-block", 3, "click"]],
      template: function ContarHistoriaComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Conte a sua Hit\xF3ria!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Preencha o formul\xE1rio abaixo e fa\xE7a parte desse movimento, ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "conte a sua hist\xF3ria.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Juntas somos mais fortes, conseguiremos mudar esse padr\xE3o de ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "impunidade");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " nos jogos online.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "N\xE3o \xE9 necess\xE1rio se identificar, s\xF3 se quiser.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Os camos marcados com asterisco s\xE3o obrigat\xF3rios");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "nome");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContarHistoriaComponent_Template_input_ngModelChange_25_listener($event) {
            return ctx.historia.nome = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "idade*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "select", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContarHistoriaComponent_Template_select_ngModelChange_30_listener($event) {
            return ctx.historia.idade = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, ContarHistoriaComponent_option_31_Template, 2, 2, "option", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "g\xEAnero*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "select", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContarHistoriaComponent_Template_select_ngModelChange_36_listener($event) {
            return ctx.historia.genero = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "option", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "feminino");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "option", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "masculino");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "jogo*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContarHistoriaComponent_Template_input_ngModelChange_46_listener($event) {
            return ctx.historia.jogo = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "data*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "select", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContarHistoriaComponent_Template_select_ngModelChange_51_listener($event) {
            return ctx.historia.dataDia = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, ContarHistoriaComponent_option_52_Template, 2, 2, "option", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "select", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContarHistoriaComponent_Template_select_ngModelChange_55_listener($event) {
            return ctx.historia.dataMes = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, ContarHistoriaComponent_option_56_Template, 2, 2, "option", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "select", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContarHistoriaComponent_Template_select_ngModelChange_59_listener($event) {
            return ctx.historia.dataAno = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, ContarHistoriaComponent_option_60_Template, 2, 2, "option", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "label", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "printscreen");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "input", 23, 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ContarHistoriaComponent_Template_input_change_66_listener($event) {
            return ctx.handleUpload($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "pa\xEDs*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "select", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContarHistoriaComponent_Template_select_ngModelChange_73_listener($event) {
            return ctx.historia.pais = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](74, ContarHistoriaComponent_option_74_Template, 2, 2, "option", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "label", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "detalhes sobre o caso*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "textarea", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContarHistoriaComponent_Template_textarea_ngModelChange_80_listener($event) {
            return ctx.historia.detalhes = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "p", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "foi punido?*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "label", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "sim ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "input", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ContarHistoriaComponent_Template_input_change_89_listener($event) {
            return ctx.onItemChange($event.target.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "span", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "label", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "n\xE3o ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "input", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ContarHistoriaComponent_Template_input_change_95_listener($event) {
            return ctx.onItemChange($event.target.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "span", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "label", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "n\xE3o sei ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "input", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ContarHistoriaComponent_Template_input_change_101_listener($event) {
            return ctx.onItemChange($event.target.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "span", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "button", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContarHistoriaComponent_Template_button_click_105_listener() {
            return ctx.contarHistoria();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "envie sua hist\xF3ria");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](110, ContarHistoriaComponent_p_110_Template, 3, 2, "p", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](111, ContarHistoriaComponent_div_111_Template, 6, 1, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.historia.nome);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("border", ctx.idadeValidation);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.historia.idade);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.idades);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("border", ctx.generoValidation);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.historia.genero);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("border", ctx.jogoValidation);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.historia.jogo);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("border", ctx.dataDiaValidation);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.historia.dataDia);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dias);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("border", ctx.dataMesValidation);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.historia.dataMes);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.meses);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("border", ctx.dataAnoValidation);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.historia.dataAno);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.anos);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("border", ctx.paisValidation);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.historia.pais);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.paises);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("border", ctx.detalhesValidation);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.historia.detalhes);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.alerts);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.imageData);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbAlert"]],
      styles: [".card-conte[_ngcontent-%COMP%] {\n  background-color: #fd9a10;\n  height: 700px;\n}\n.card-body[_ngcontent-%COMP%] {\n  width: 70%;\n  margin: auto;\n}\n.conte-historia-title[_ngcontent-%COMP%] {\n  font-family: 'Permanent Marker', cursive;\n  color: #aa31ce;\n}\n.image-controle[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 20px;\n  right: 0;\n}\n.form-line[_ngcontent-%COMP%] {\n  height: 56px;\n}\n.form-label[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: 'Montserrat', sans-serif;\n  font-weight: 700;\n  color: #7607bc;\n}\n.foi-punido-text[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: 'Montserrat', sans-serif;\n  font-weight: 700;\n  color: #7607bc;\n}\n.form-input[_ngcontent-%COMP%] {\n  margin: 0;\n  border-radius: 30px;\n  border: 0;\n  height: 30px;\n  margin-top: -4px;\n  margin-bottom: 0px;\n}\n.form-text[_ngcontent-%COMP%] {\n  height: 86px;\n}\n.input-text[_ngcontent-%COMP%] {\n  margin: 0;\n  border-radius: 20px;\n  border: 0;\n  height: 60px;\n  margin-top: -4px;\n  margin-bottom: 0px;\n}\n.radio-background[_ngcontent-%COMP%] {\n  height: 30px;\n  background: #fff;\n  border-radius: 30px;\n  padding-top: 4px;\n  padding-left: 15px;\n}\n.container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0;\n}\n.btn-envie[_ngcontent-%COMP%] {\n  background: #7607bc;\n  border-radius: 30px;\n  color: #fff;\n  font-weight: 700;\n}\n\n.checkmark[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 5px;\n  left: 20px;\n  height: 20px;\n  width: 20px;\n  background-color: #bfbfbf;\n  border-radius: 50%;\n}\n\n.container[_ngcontent-%COMP%]:hover   input[_ngcontent-%COMP%]    ~ .checkmark[_ngcontent-%COMP%] {\n  background-color: #ccc;\n}\n\n.container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .checkmark[_ngcontent-%COMP%] {\n  background-color: #7607bc;\n}\n\n.checkmark[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  display: none;\n}\n\n.container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .checkmark[_ngcontent-%COMP%]:after {\n  display: block;\n}\n.alert[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 20px;\n}\n.alert-Success[_ngcontent-%COMP%] {\n  border: 4px solid limegreen;\n}\n.alert-Danger[_ngcontent-%COMP%] {\n  border: 4px solid orangered;\n}\n.alert-Warning[_ngcontent-%COMP%] {\n  border: 4px solid orange;\n}\n.imagePreviewDiv[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 20px;\n  padding-bottom: 32px;\n}\n.imagePreview[_ngcontent-%COMP%] {\n  padding: 16px;\n  display: block;\n  max-width: 400px;\n  max-height: 400px;\n  width: auto;\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ERVYvanVsaWEvYmFkbHlwbGF5ZWQvc3JjL2FwcC9jb250YXItaGlzdG9yaWEvY29udGFyLWhpc3RvcmlhLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9jb250YXItaGlzdG9yaWEvY29udGFyLWhpc3RvcmlhLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSxhQUFBO0FDQ0o7QURFQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0FDQUo7QURHQTtFQUNJLHdDQUFBO0VBQ0EsY0FBQTtBQ0RKO0FESUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0FDRko7QURLQTtFQUNJLFlBQUE7QUNISjtBRE1BO0VBQ0ksU0FBQTtFQUNBLHFDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDSko7QURPQTtFQUNJLFNBQUE7RUFDQSxxQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0xKO0FEUUE7RUFDSSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNOSjtBRFNBO0VBQ0ksWUFBQTtBQ1BKO0FEVUE7RUFDSSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNSSjtBRFlBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDVko7QURhQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtBQ1hKO0FEY0E7RUFDSSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDWko7QUFDQSxpQ0FBaUM7QURlakM7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FDYko7QUFDQSwrQ0FBK0M7QURnQi9DO0VBQ0ksc0JBQUE7QUNkSjtBQUNBLDREQUE0RDtBRGlCNUQ7RUFDSSx5QkFBQTtBQ2ZKO0FBQ0Esb0VBQW9FO0FEa0JwRTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUNoQko7QUFDQSxpREFBaUQ7QURtQmpEO0VBQ0ksY0FBQTtBQ2pCSjtBRG9CQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7QUNsQko7QURxQkE7RUFDSSwyQkFBQTtBQ25CSjtBRHNCQTtFQUNJLDJCQUFBO0FDcEJKO0FEdUJBO0VBQ0ksd0JBQUE7QUNyQko7QUR3QkE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUN0Qko7QUR5QkE7RUFDSSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ3ZCSiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhci1oaXN0b3JpYS9jb250YXItaGlzdG9yaWEuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1jb250ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZkOWExMDtcbiAgICBoZWlnaHQgICAgICAgICAgOiA3MDBweDtcbn1cblxuLmNhcmQtYm9keSB7XG4gICAgd2lkdGggOiA3MCU7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuXG4uY29udGUtaGlzdG9yaWEtdGl0bGUge1xuICAgIGZvbnQtZmFtaWx5OiAnUGVybWFuZW50IE1hcmtlcicsIGN1cnNpdmU7XG4gICAgY29sb3IgICAgICA6ICNhYTMxY2U7XG59XG5cbi5pbWFnZS1jb250cm9sZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbSAgOiAyMHB4O1xuICAgIHJpZ2h0ICAgOiAwO1xufVxuXG4uZm9ybS1saW5lIHtcbiAgICBoZWlnaHQ6IDU2cHg7XG59XG5cbi5mb3JtLWxhYmVsIHtcbiAgICBtYXJnaW4gICAgIDogMDtcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgY29sb3IgICAgICA6ICM3NjA3YmM7XG59XG5cbi5mb2ktcHVuaWRvLXRleHR7XG4gICAgbWFyZ2luICAgICA6IDA7XG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGNvbG9yICAgICAgOiAjNzYwN2JjO1xufVxuXG4uZm9ybS1pbnB1dCB7XG4gICAgbWFyZ2luICAgICAgIDogMDtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIGJvcmRlciAgICAgICA6IDA7XG4gICAgaGVpZ2h0ICAgICAgIDogMzBweDtcbiAgICBtYXJnaW4tdG9wICAgOiAtNHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuLmZvcm0tdGV4dCB7XG4gICAgaGVpZ2h0OiA4NnB4O1xufVxuXG4uaW5wdXQtdGV4dCB7XG4gICAgbWFyZ2luICAgICAgIDogMDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGJvcmRlciAgICAgICA6IDA7XG4gICAgaGVpZ2h0ICAgICAgIDogNjBweDtcbiAgICBtYXJnaW4tdG9wICAgOiAtNHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuXG4ucmFkaW8tYmFja2dyb3VuZHtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIHBhZGRpbmctdG9wOjRweDtcbiAgICBwYWRkaW5nLWxlZnQ6MTVweDtcbn1cblxuLmNvbnRhaW5lciBpbnB1dCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG9wYWNpdHkgOiAwO1xuICAgIGN1cnNvciAgOiBwb2ludGVyO1xuICAgIGhlaWdodCAgOiAwO1xuICAgIHdpZHRoICAgOiAwO1xufVxuXG4uYnRuLWVudmlle1xuICAgIGJhY2tncm91bmQ6ICM3NjA3YmM7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICBjb2xvcjojZmZmO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi8qIENyZWF0ZSBhIGN1c3RvbSByYWRpbyBidXR0b24gKi9cbi5jaGVja21hcmsge1xuICAgIHBvc2l0aW9uICAgICAgICA6IGFic29sdXRlO1xuICAgIHRvcCAgICAgICAgICAgICA6IDVweDtcbiAgICBsZWZ0ICAgICAgICAgICAgOiAyMHB4O1xuICAgIGhlaWdodCAgICAgICAgICA6IDIwcHg7XG4gICAgd2lkdGggICAgICAgICAgIDogMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmZiZmJmO1xuICAgIGJvcmRlci1yYWRpdXMgICA6IDUwJTtcbn1cblxuLyogT24gbW91c2Utb3ZlciwgYWRkIGEgZ3JleSBiYWNrZ3JvdW5kIGNvbG9yICovXG4uY29udGFpbmVyOmhvdmVyIGlucHV0fi5jaGVja21hcmsge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG59XG5cbi8qIFdoZW4gdGhlIHJhZGlvIGJ1dHRvbiBpcyBjaGVja2VkLCBhZGQgYSBibHVlIGJhY2tncm91bmQgKi9cbi5jb250YWluZXIgaW5wdXQ6Y2hlY2tlZH4uY2hlY2ttYXJrIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzYwN2JjO1xufVxuXG4vKiBDcmVhdGUgdGhlIGluZGljYXRvciAodGhlIGRvdC9jaXJjbGUgLSBoaWRkZW4gd2hlbiBub3QgY2hlY2tlZCkgKi9cbi5jaGVja21hcms6YWZ0ZXIge1xuICAgIGNvbnRlbnQgOiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5IDogbm9uZTtcbn1cblxuLyogU2hvdyB0aGUgaW5kaWNhdG9yIChkb3QvY2lyY2xlKSB3aGVuIGNoZWNrZWQgKi9cbi5jb250YWluZXIgaW5wdXQ6Y2hlY2tlZH4uY2hlY2ttYXJrOmFmdGVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmFsZXJ0e1xuICAgIGJhY2tncm91bmQ6I2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuXG4uYWxlcnQtU3VjY2Vzc3tcbiAgICBib3JkZXI6IDRweCBzb2xpZCBsaW1lZ3JlZW47XG59XG5cbi5hbGVydC1EYW5nZXJ7XG4gICAgYm9yZGVyOiA0cHggc29saWQgb3JhbmdlcmVkO1xufVxuXG4uYWxlcnQtV2FybmluZ3tcbiAgICBib3JkZXI6IDRweCBzb2xpZCBvcmFuZ2U7XG59XG5cbi5pbWFnZVByZXZpZXdEaXZ7XG4gICAgYmFja2dyb3VuZDojZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDMycHg7XG59XG5cbi5pbWFnZVByZXZpZXd7XG4gICAgcGFkZGluZzogMTZweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXgtd2lkdGg6NDAwcHg7XG4gICAgbWF4LWhlaWdodDo0MDBweDtcbiAgICB3aWR0aDogYXV0bztcbiAgICBoZWlnaHQ6IGF1dG87XG59XG5cbiIsIi5jYXJkLWNvbnRlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZkOWExMDtcbiAgaGVpZ2h0OiA3MDBweDtcbn1cbi5jYXJkLWJvZHkge1xuICB3aWR0aDogNzAlO1xuICBtYXJnaW46IGF1dG87XG59XG4uY29udGUtaGlzdG9yaWEtdGl0bGUge1xuICBmb250LWZhbWlseTogJ1Blcm1hbmVudCBNYXJrZXInLCBjdXJzaXZlO1xuICBjb2xvcjogI2FhMzFjZTtcbn1cbi5pbWFnZS1jb250cm9sZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAyMHB4O1xuICByaWdodDogMDtcbn1cbi5mb3JtLWxpbmUge1xuICBoZWlnaHQ6IDU2cHg7XG59XG4uZm9ybS1sYWJlbCB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICM3NjA3YmM7XG59XG4uZm9pLXB1bmlkby10ZXh0IHtcbiAgbWFyZ2luOiAwO1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogIzc2MDdiYztcbn1cbi5mb3JtLWlucHV0IHtcbiAgbWFyZ2luOiAwO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBib3JkZXI6IDA7XG4gIGhlaWdodDogMzBweDtcbiAgbWFyZ2luLXRvcDogLTRweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuLmZvcm0tdGV4dCB7XG4gIGhlaWdodDogODZweDtcbn1cbi5pbnB1dC10ZXh0IHtcbiAgbWFyZ2luOiAwO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBib3JkZXI6IDA7XG4gIGhlaWdodDogNjBweDtcbiAgbWFyZ2luLXRvcDogLTRweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuLnJhZGlvLWJhY2tncm91bmQge1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIHBhZGRpbmctdG9wOiA0cHg7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbn1cbi5jb250YWluZXIgaW5wdXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG9wYWNpdHk6IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgaGVpZ2h0OiAwO1xuICB3aWR0aDogMDtcbn1cbi5idG4tZW52aWUge1xuICBiYWNrZ3JvdW5kOiAjNzYwN2JjO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbi8qIENyZWF0ZSBhIGN1c3RvbSByYWRpbyBidXR0b24gKi9cbi5jaGVja21hcmsge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNXB4O1xuICBsZWZ0OiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmZiZmJmO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4vKiBPbiBtb3VzZS1vdmVyLCBhZGQgYSBncmV5IGJhY2tncm91bmQgY29sb3IgKi9cbi5jb250YWluZXI6aG92ZXIgaW5wdXQgfiAuY2hlY2ttYXJrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbn1cbi8qIFdoZW4gdGhlIHJhZGlvIGJ1dHRvbiBpcyBjaGVja2VkLCBhZGQgYSBibHVlIGJhY2tncm91bmQgKi9cbi5jb250YWluZXIgaW5wdXQ6Y2hlY2tlZCB+IC5jaGVja21hcmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzYwN2JjO1xufVxuLyogQ3JlYXRlIHRoZSBpbmRpY2F0b3IgKHRoZSBkb3QvY2lyY2xlIC0gaGlkZGVuIHdoZW4gbm90IGNoZWNrZWQpICovXG4uY2hlY2ttYXJrOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBub25lO1xufVxuLyogU2hvdyB0aGUgaW5kaWNhdG9yIChkb3QvY2lyY2xlKSB3aGVuIGNoZWNrZWQgKi9cbi5jb250YWluZXIgaW5wdXQ6Y2hlY2tlZCB+IC5jaGVja21hcms6YWZ0ZXIge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5hbGVydCB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG4uYWxlcnQtU3VjY2VzcyB7XG4gIGJvcmRlcjogNHB4IHNvbGlkIGxpbWVncmVlbjtcbn1cbi5hbGVydC1EYW5nZXIge1xuICBib3JkZXI6IDRweCBzb2xpZCBvcmFuZ2VyZWQ7XG59XG4uYWxlcnQtV2FybmluZyB7XG4gIGJvcmRlcjogNHB4IHNvbGlkIG9yYW5nZTtcbn1cbi5pbWFnZVByZXZpZXdEaXYge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMzJweDtcbn1cbi5pbWFnZVByZXZpZXcge1xuICBwYWRkaW5nOiAxNnB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgbWF4LWhlaWdodDogNDAwcHg7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IGF1dG87XG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContarHistoriaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-contar-historia',
          templateUrl: './contar-historia.component.html',
          styleUrls: ['./contar-historia.component.less']
        }]
      }], function () {
        return [{
          type: _services_historia_service__WEBPACK_IMPORTED_MODULE_1__["HistoriaService"]
        }];
      }, {
        myInputVariable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['inputFile']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/contato/contato.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/contato/contato.component.ts ***!
    \**********************************************/

  /*! exports provided: ContatoComponent */

  /***/
  function srcAppContatoContatoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContatoComponent", function () {
      return ContatoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_parametros_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/parametros.service */
    "./src/app/services/parametros.service.ts");

    var ContatoComponent =
    /*#__PURE__*/
    function () {
      function ContatoComponent(parametrosService) {
        _classCallCheck(this, ContatoComponent);

        this.parametrosService = parametrosService;
      }

      _createClass(ContatoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this11 = this;

          this.parametrosService.getContatos().subscribe(function (data) {
            _this11.contatos = data;
          });
        }
      }]);

      return ContatoComponent;
    }();

    ContatoComponent.ɵfac = function ContatoComponent_Factory(t) {
      return new (t || ContatoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_parametros_service__WEBPACK_IMPORTED_MODULE_1__["ParametrosService"]));
    };

    ContatoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContatoComponent,
      selectors: [["app-contato"]],
      decls: 40,
      vars: 4,
      consts: [["id", "targetContato", 1, "card"], [1, "card-body"], [1, "card-title", "contato-title"], ["width", "300", "height", "300", "src", "/assets/images/eletronica.png", 1, "image-eletronica"], [1, "row"], [1, "col-10"], [1, "col-5"], [1, "col-4"], ["width", "75", "height", "75", "src", "/assets/images/social/insta.png", 1, "image-megafone"], [1, "col-8"], [1, "contato-text"], ["width", "75", "height", "75", "src", "/assets/images/social/twitter.png", 1, "image-megafone"], ["width", "75", "height", "75", "src", "/assets/images/social/fb.png", 1, "image-megafone"], ["width", "75", "height", "75", "src", "/assets/images/social/mail.png", 1, "image-megafone"]],
      template: function ContatoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Converse com a Gente");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Siga-nos nas redes sociais e fique por dentro de tudo que acontece!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h5", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h5", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h5", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h5", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.contatos == null ? null : ctx.contatos.instagram);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.contatos == null ? null : ctx.contatos.tweeter);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.contatos == null ? null : ctx.contatos.facebook);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.contatos == null ? null : ctx.contatos.email);
        }
      },
      styles: [".card[_ngcontent-%COMP%] {\n  background: #7607bc;\n  color: #fff;\n  height: 400px;\n}\n.contato-title[_ngcontent-%COMP%] {\n  font-family: 'Permanent Marker', cursive;\n}\n.card-body[_ngcontent-%COMP%] {\n  width: 70%;\n  margin: auto;\n}\n.image-eletronica[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50px;\n  right: 0px;\n}\n.contato-text[_ngcontent-%COMP%] {\n  font-weight: 700;\n  white-space: nowrap;\n  margin-top: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ERVYvanVsaWEvYmFkbHlwbGF5ZWQvc3JjL2FwcC9jb250YXRvL2NvbnRhdG8uY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL2NvbnRhdG8vY29udGF0by5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUNDSjtBREVBO0VBQ0ksd0NBQUE7QUNBSjtBREdBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7QUNESjtBRElBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ0ZKO0FES0E7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNISiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhdG8vY29udGF0by5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJke1xuICAgIGJhY2tncm91bmQ6ICM3NjA3YmM7XG4gICAgY29sb3I6I2ZmZjtcbiAgICBoZWlnaHQ6IDQwMHB4O1xufVxuXG4uY29udGF0by10aXRsZXtcbiAgICBmb250LWZhbWlseTogJ1Blcm1hbmVudCBNYXJrZXInLCBjdXJzaXZlO1xufVxuXG4uY2FyZC1ib2R5e1xuICAgIHdpZHRoOiA3MCU7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuXG4uaW1hZ2UtZWxldHJvbmljYXtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MHB4O1xuICAgIHJpZ2h0OiAwcHg7XG59XG5cbi5jb250YXRvLXRleHR7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG1hcmdpbi10b3A6MThweDtcbn0iLCIuY2FyZCB7XG4gIGJhY2tncm91bmQ6ICM3NjA3YmM7XG4gIGNvbG9yOiAjZmZmO1xuICBoZWlnaHQ6IDQwMHB4O1xufVxuLmNvbnRhdG8tdGl0bGUge1xuICBmb250LWZhbWlseTogJ1Blcm1hbmVudCBNYXJrZXInLCBjdXJzaXZlO1xufVxuLmNhcmQtYm9keSB7XG4gIHdpZHRoOiA3MCU7XG4gIG1hcmdpbjogYXV0bztcbn1cbi5pbWFnZS1lbGV0cm9uaWNhIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwcHg7XG4gIHJpZ2h0OiAwcHg7XG59XG4uY29udGF0by10ZXh0IHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgbWFyZ2luLXRvcDogMThweDtcbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContatoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-contato',
          templateUrl: './contato.component.html',
          styleUrls: ['./contato.component.less']
        }]
      }], function () {
        return [{
          type: _services_parametros_service__WEBPACK_IMPORTED_MODULE_1__["ParametrosService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../layout/header/header.component */
    "./src/app/layout/header/header.component.ts");
    /* harmony import */


    var _layout_hero_hero_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../layout/hero/hero.component */
    "./src/app/layout/hero/hero.component.ts");
    /* harmony import */


    var _sobre_sobre_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../sobre/sobre.component */
    "./src/app/sobre/sobre.component.ts");
    /* harmony import */


    var _algumas_historias_algumas_historias_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../algumas-historias/algumas-historias.component */
    "./src/app/algumas-historias/algumas-historias.component.ts");
    /* harmony import */


    var _contar_historia_contar_historia_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../contar-historia/contar-historia.component */
    "./src/app/contar-historia/contar-historia.component.ts");
    /* harmony import */


    var _manifesto_manifesto_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../manifesto/manifesto.component */
    "./src/app/manifesto/manifesto.component.ts");
    /* harmony import */


    var _contato_contato_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../contato/contato.component */
    "./src/app/contato/contato.component.ts");
    /* harmony import */


    var _rodape_rodape_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../rodape/rodape.component */
    "./src/app/rodape/rodape.component.ts");

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)();
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 21,
      vars: 0,
      consts: [[1, "container-fluid"], [1, "row"], [1, "col-md-12"], [1, "col-md-12", 2, "margin", "0"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-hero");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-sobre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-algumas-historias");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-contar-historia");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-manifesto");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "app-contato");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "app-rodape");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_layout_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _layout_hero_hero_component__WEBPACK_IMPORTED_MODULE_2__["HeroComponent"], _sobre_sobre_component__WEBPACK_IMPORTED_MODULE_3__["SobreComponent"], _algumas_historias_algumas_historias_component__WEBPACK_IMPORTED_MODULE_4__["AlgumasHistoriasComponent"], _contar_historia_contar_historia_component__WEBPACK_IMPORTED_MODULE_5__["ContarHistoriaComponent"], _manifesto_manifesto_component__WEBPACK_IMPORTED_MODULE_6__["ManifestoComponent"], _contato_contato_component__WEBPACK_IMPORTED_MODULE_7__["ContatoComponent"], _rodape_rodape_component__WEBPACK_IMPORTED_MODULE_8__["RodapeComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQubGVzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.less']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/layout/header/header.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/layout/header/header.component.ts ***!
    \***************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppLayoutHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HeaderComponent =
    /*#__PURE__*/
    function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)();
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 14,
      vars: 0,
      consts: [[1, "fixed-header"], [1, "container"], ["src", "/assets/images/logo.png", 1, "float-left", "logoBanner"], ["href", "#", "id", "contatoLink", 1, "float-right", "textBanner"], ["href", "#", "id", "manifestoLink", 1, "float-right", "textBanner"], ["href", "#", "id", "conteLink", 1, "float-right", "textBanner"], ["href", "#", "id", "historiasLink", 1, "float-right", "textBanner"], ["href", "#", "id", "sobreLink", 1, "float-right", "textBanner"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "contato");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "manifesto");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "conte a sua");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "hist\xF3rias");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "sobre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".fixed-header[_ngcontent-%COMP%] {\n  height: 80px;\n  width: 100%;\n  position: absolute;\n  background: #ffffff;\n  padding: 10px 0;\n  z-index: 10;\n  top: 40px;\n}\n.textBanner[_ngcontent-%COMP%] {\n  color: #fd9a10;\n  font-family: 'Archivo Black', sans-serif;\n  font-size: 22px;\n  margin-top: 10px;\n}\n.logoBanner[_ngcontent-%COMP%] {\n  margin-top: -10px;\n}\na[_ngcontent-%COMP%]:link {\n  text-decoration: none;\n}\na[_ngcontent-%COMP%]:hover {\n  color: #7607bc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ERVYvanVsaWEvYmFkbHlwbGF5ZWQvc3JjL2FwcC9sYXlvdXQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvbGF5b3V0L2hlYWRlci9oZWFkZXIuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUNDSjtBREVBO0VBQ0ksY0FBQTtFQUNBLHdDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDQUo7QURHQTtFQUNJLGlCQUFBO0FDREo7QURJQTtFQUNJLHFCQUFBO0FDRko7QURLQTtFQUNJLGNBQUE7QUNISiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmZpeGVkLWhlYWRlciB7XG4gICAgaGVpZ2h0ICAgIDogODBweDtcbiAgICB3aWR0aCAgICAgOiAxMDAlO1xuICAgIHBvc2l0aW9uICA6IGFic29sdXRlO1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgcGFkZGluZyAgIDogMTBweCAwO1xuICAgIHotaW5kZXggICA6IDEwO1xuICAgIHRvcCAgICAgICA6IDQwcHg7XG59XG5cbi50ZXh0QmFubmVyIHtcbiAgICBjb2xvciAgICAgIDogI2ZkOWExMDtcbiAgICBmb250LWZhbWlseTogJ0FyY2hpdm8gQmxhY2snLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZSAgOiAyMnB4O1xuICAgIG1hcmdpbi10b3AgOiAxMHB4O1xufVxuXG4ubG9nb0Jhbm5lciB7XG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XG59XG5cbmE6bGluayB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5hOmhvdmVyIHtcbiAgICBjb2xvcjogIzc2MDdiYztcbn0iLCIuZml4ZWQtaGVhZGVyIHtcbiAgaGVpZ2h0OiA4MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gIHotaW5kZXg6IDEwO1xuICB0b3A6IDQwcHg7XG59XG4udGV4dEJhbm5lciB7XG4gIGNvbG9yOiAjZmQ5YTEwO1xuICBmb250LWZhbWlseTogJ0FyY2hpdm8gQmxhY2snLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDIycHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4ubG9nb0Jhbm5lciB7XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xufVxuYTpsaW5rIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuYTpob3ZlciB7XG4gIGNvbG9yOiAjNzYwN2JjO1xufVxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.less']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/layout/hero/hero.component.ts":
  /*!***********************************************!*\
    !*** ./src/app/layout/hero/hero.component.ts ***!
    \***********************************************/

  /*! exports provided: HeroComponent */

  /***/
  function srcAppLayoutHeroHeroComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeroComponent", function () {
      return HeroComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_recorde_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/recorde.service */
    "./src/app/services/recorde.service.ts");

    var HeroComponent =
    /*#__PURE__*/
    function () {
      function HeroComponent(recordeService) {
        _classCallCheck(this, HeroComponent);

        this.recordeService = recordeService;
      }

      _createClass(HeroComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this12 = this;

          this.recordeService.getHeroes().subscribe(function (data) {
            _this12.recorde = data;
          });
        }
      }]);

      return HeroComponent;
    }();

    HeroComponent.ɵfac = function HeroComponent_Factory(t) {
      return new (t || HeroComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_recorde_service__WEBPACK_IMPORTED_MODULE_1__["RecordeService"]));
    };

    HeroComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeroComponent,
      selectors: [["app-hero"]],
      decls: 19,
      vars: 2,
      consts: [[1, "hero-image"], [1, "hero-text"], ["href", "#", 1, "btnSaibaMais"]],
      template: function HeroComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "N\xF3s jogamos ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " dias");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "sem sofrer ass\xE9dio.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "O r\xE9corde anterior \xE9 de ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " dias.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "saiba mais");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.recorde == null ? null : ctx.recorde.recordeAtual);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.recorde == null ? null : ctx.recorde.recordeAnterior);
        }
      },
      styles: [".btnSaibaMais[_ngcontent-%COMP%] {\n  background: #fd9a10;\n  color: white;\n  text-align: center;\n  border-radius: 12px;\n  padding: 10px 30px 10px 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ERVYvanVsaWEvYmFkbHlwbGF5ZWQvc3JjL2FwcC9sYXlvdXQvaGVyby9oZXJvLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9sYXlvdXQvaGVyby9oZXJvLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvaGVyby9oZXJvLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0blNhaWJhTWFpc3tcbiAgICBiYWNrZ3JvdW5kOiAjZmQ5YTEwO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBwYWRkaW5nOiAxMHB4IDMwcHggMTBweCAzMHB4O1xufSIsIi5idG5TYWliYU1haXMge1xuICBiYWNrZ3JvdW5kOiAjZmQ5YTEwO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgcGFkZGluZzogMTBweCAzMHB4IDEwcHggMzBweDtcbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeroComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-hero',
          templateUrl: './hero.component.html',
          styleUrls: ['./hero.component.less']
        }]
      }], function () {
        return [{
          type: _services_recorde_service__WEBPACK_IMPORTED_MODULE_1__["RecordeService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/manifesto/manifesto.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/manifesto/manifesto.component.ts ***!
    \**************************************************/

  /*! exports provided: ManifestoComponent */

  /***/
  function srcAppManifestoManifestoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ManifestoComponent", function () {
      return ManifestoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ManifestoComponent =
    /*#__PURE__*/
    function () {
      function ManifestoComponent() {
        _classCallCheck(this, ManifestoComponent);
      }

      _createClass(ManifestoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ManifestoComponent;
    }();

    ManifestoComponent.ɵfac = function ManifestoComponent_Factory(t) {
      return new (t || ManifestoComponent)();
    };

    ManifestoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ManifestoComponent,
      selectors: [["app-manifesto"]],
      decls: 23,
      vars: 0,
      consts: [["id", "targetManifesto", 1, "card", "card-manifesto"], ["id", "page-manifesto", 1, "card-body", "anchor", "anchor-manifesto"], [1, "card-title"], [1, "card-text", "text-center"], [1, "card-text-content"], ["width", "158", "height", "48", "src", "/assets/images/logo-transparente.png", 1, "logo-transparente"]],
      template: function ManifestoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Manifesto");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "O ambiente virtual gamer \xE9 o punico local em que certas coisas ditas s\xE3o ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "toleradas ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " e levadas ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "levianamente. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Em meio a isso, o movimento ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "#badlyplayed ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "nasceu no ano de 2015, como reflexo da necessidade em existir uma pol\xEDtica mais r\xEDgida por parte das empresas de jogos. #badlyplayed busca expor essa impunidade de comportamento t\xF3xico que ocorre nos jogos online atrav\xE9s da ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "coleta de hist\xF3rias ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " de mulheres gamers afim de chamar a aten\xE7\xE3o para o fato e cobrar uma ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "mudan\xE7a de comportamento ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " das corpora\xE7\xF5es e dos jogadores.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".card-body[_ngcontent-%COMP%] {\n  width: 70%;\n  margin: auto;\n}\n.card-manifesto[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/images/girls.png\");\n  width: 100%;\n  color: #fff;\n  height: 600px;\n}\n.card-title[_ngcontent-%COMP%] {\n  font-family: 'Permanent Marker', cursive;\n  color: #fd9a10;\n  background: #fff;\n  width: 200px;\n  height: 32px;\n  border-radius: 10px;\n  text-align: center;\n  padding-top: 4px;\n}\n.card-text[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/images/forma2.png\");\n  height: 500px;\n  background-repeat: no-repeat;\n  background-size: contain;\n  color: #000;\n}\n.card-text-content[_ngcontent-%COMP%] {\n  width: 80%;\n  margin: auto;\n  padding-top: 150px;\n}\n.logo-transparente[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 120px;\n  right: 460px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ERVYvanVsaWEvYmFkbHlwbGF5ZWQvc3JjL2FwcC9tYW5pZmVzdG8vbWFuaWZlc3RvLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9tYW5pZmVzdG8vbWFuaWZlc3RvLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7QUNDSjtBREVBO0VBQ0ksaURBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUNBSjtBREdBO0VBQ0ksd0NBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0RKO0FESUE7RUFDSSxrREFBQTtFQUNBLGFBQUE7RUFDQSw0QkFBQTtFQUNBLHdCQUFBO0VBQ0EsV0FBQTtBQ0ZKO0FES0E7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDSEo7QURNQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUNKSiIsImZpbGUiOiJzcmMvYXBwL21hbmlmZXN0by9tYW5pZmVzdG8uY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1ib2R5IHtcbiAgICB3aWR0aCA6IDcwJTtcbiAgICBtYXJnaW46IGF1dG87XG59XG5cbi5jYXJkLW1hbmlmZXN0b3tcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9naXJscy5wbmdcIik7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgY29sb3I6I2ZmZjtcbiAgICBoZWlnaHQ6IDYwMHB4O1xufVxuXG4uY2FyZC10aXRsZXtcbiAgICBmb250LWZhbWlseTogJ1Blcm1hbmVudCBNYXJrZXInLCBjdXJzaXZlO1xuICAgIGNvbG9yOiNmZDlhMTA7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgaGVpZ2h0OiAzMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmctdG9wOjRweDtcbn1cblxuLmNhcmQtdGV4dHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9mb3JtYTIucG5nXCIpO1xuICAgIGhlaWdodDogNTAwcHg7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgY29sb3I6IzAwMDtcbn1cblxuLmNhcmQtdGV4dC1jb250ZW50e1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWFyZ2luOmF1dG87XG4gICAgcGFkZGluZy10b3A6MTUwcHg7XG59XG5cbi5sb2dvLXRyYW5zcGFyZW50ZXtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAxMjBweDtcbiAgICByaWdodDogNDYwcHg7XG59IiwiLmNhcmQtYm9keSB7XG4gIHdpZHRoOiA3MCU7XG4gIG1hcmdpbjogYXV0bztcbn1cbi5jYXJkLW1hbmlmZXN0byB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1hZ2VzL2dpcmxzLnBuZ1wiKTtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiAjZmZmO1xuICBoZWlnaHQ6IDYwMHB4O1xufVxuLmNhcmQtdGl0bGUge1xuICBmb250LWZhbWlseTogJ1Blcm1hbmVudCBNYXJrZXInLCBjdXJzaXZlO1xuICBjb2xvcjogI2ZkOWExMDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDMycHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDRweDtcbn1cbi5jYXJkLXRleHQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9mb3JtYTIucG5nXCIpO1xuICBoZWlnaHQ6IDUwMHB4O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGNvbG9yOiAjMDAwO1xufVxuLmNhcmQtdGV4dC1jb250ZW50IHtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nLXRvcDogMTUwcHg7XG59XG4ubG9nby10cmFuc3BhcmVudGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTIwcHg7XG4gIHJpZ2h0OiA0NjBweDtcbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ManifestoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-manifesto',
          templateUrl: './manifesto.component.html',
          styleUrls: ['./manifesto.component.less']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/modal-administrative/modal-administrative.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/modal-administrative/modal-administrative.component.ts ***!
    \************************************************************************/

  /*! exports provided: ModalAdministrativeComponent */

  /***/
  function srcAppModalAdministrativeModalAdministrativeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalAdministrativeComponent", function () {
      return ModalAdministrativeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _administrative_historias_historias_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../administrative/historias/historias.component */
    "./src/app/administrative/historias/historias.component.ts");
    /* harmony import */


    var _administrative_parametros_parametros_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../administrative/parametros/parametros.component */
    "./src/app/administrative/parametros/parametros.component.ts");

    function ModalAdministrativeComponent_ng_template_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-historias");
      }
    }

    function ModalAdministrativeComponent_ng_template_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-parametros");
      }
    }

    var ModalAdministrativeComponent =
    /*#__PURE__*/
    function () {
      function ModalAdministrativeComponent(activeModal, authService) {
        _classCallCheck(this, ModalAdministrativeComponent);

        this.activeModal = activeModal;
        this.authService = authService;
        this.active = 1;
      }

      _createClass(ModalAdministrativeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "passBack",
        value: function passBack() {
          this.activeModal.close();
        }
      }, {
        key: "logout",
        value: function logout() {
          this.activeModal.close();
          this.authService.doLogout();
        }
      }]);

      return ModalAdministrativeComponent;
    }();

    ModalAdministrativeComponent.ɵfac = function ModalAdministrativeComponent_Factory(t) {
      return new (t || ModalAdministrativeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]));
    };

    ModalAdministrativeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ModalAdministrativeComponent,
      selectors: [["app-modal-administrative"]],
      decls: 26,
      vars: 4,
      consts: [[1, "modal-header"], ["src", "/assets/images/bpadminlogo.png", "width", "120", "height", "50"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], ["ngbNav", "", 1, "nav-tabs", 3, "activeId", "activeIdChange"], ["nav", "ngbNav"], [3, "ngbNavItem"], ["ngbNavLink", ""], ["ngbNavContent", ""], [1, "mt-2", 3, "ngbNavOutlet"], [1, "modal-footer"], [1, "row"], [1, "col-6"], ["type", "submit", 1, "btn", "btn-sm", "btn-primary", 3, "click"], ["type", "submit", 1, "btn", "btn-sm", "btn-danger", 3, "click"]],
      template: function ModalAdministrativeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalAdministrativeComponent_Template_button_click_3_listener() {
            return ctx.activeModal.dismiss("Cross click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 5, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("activeIdChange", function ModalAdministrativeComponent_Template_ul_activeIdChange_7_listener($event) {
            return ctx.active = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Hist\xF3rias");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ModalAdministrativeComponent_ng_template_12_Template, 1, 0, "ng-template", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Par\xE2metros");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ModalAdministrativeComponent_ng_template_16_Template, 1, 0, "ng-template", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalAdministrativeComponent_Template_button_click_21_listener() {
            return ctx.passBack();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Voltar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalAdministrativeComponent_Template_button_click_24_listener() {
            return ctx.logout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Sair");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("activeId", ctx.active);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbNavItem", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbNavItem", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbNavOutlet", _r21);
        }
      },
      directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNav"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNavItem"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNavLink"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNavContent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNavOutlet"], _administrative_historias_historias_component__WEBPACK_IMPORTED_MODULE_3__["HistoriasComponent"], _administrative_parametros_parametros_component__WEBPACK_IMPORTED_MODULE_4__["ParametrosComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGFsLWFkbWluaXN0cmF0aXZlL21vZGFsLWFkbWluaXN0cmF0aXZlLmNvbXBvbmVudC5sZXNzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalAdministrativeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-modal-administrative',
          templateUrl: './modal-administrative.component.html',
          styleUrls: ['./modal-administrative.component.less']
        }]
      }], function () {
        return [{
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/modal-login/modal-login.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/modal-login/modal-login.component.ts ***!
    \******************************************************/

  /*! exports provided: ModalLoginComponent */

  /***/
  function srcAppModalLoginModalLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalLoginComponent", function () {
      return ModalLoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var ModalLoginComponent =
    /*#__PURE__*/
    function () {
      function ModalLoginComponent(activeModal, authService, router) {
        _classCallCheck(this, ModalLoginComponent);

        this.activeModal = activeModal;
        this.authService = authService;
        this.router = router;
        this.username = '';
        this.password = '';
      }

      _createClass(ModalLoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "passBack",
        value: function passBack() {
          this.activeModal.close();
        }
      }, {
        key: "doLogin",
        value: function doLogin() {
          var _this13 = this;

          if (this.username != '' && this.password != '') {
            var response = this.authService.doLogin(this.username, this.password).subscribe(function (data) {
              // TODO : Show login failed message
              _this13.activeModal.close();

              _this13.router.navigate(['/administrative']);
            });
          }
        }
      }]);

      return ModalLoginComponent;
    }();

    ModalLoginComponent.ɵfac = function ModalLoginComponent_Factory(t) {
      return new (t || ModalLoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    ModalLoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ModalLoginComponent,
      selectors: [["app-modal-login"]],
      decls: 22,
      vars: 2,
      consts: [[1, "modal-header"], ["src", "/assets/images/bpadminlogo.png", "width", "120", "height", "50"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "panel"], ["id", "Login"], [1, "form-group"], ["type", "text", "name", "username", "placeholder", "Usu\xE1rio", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "password", "name", "password", "placeholder", "Senha", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-success", 3, "click"], [1, "fa", "fa-sign-in", 2, "margin-right", "4px"], [1, "modal-footer"], ["type", "submit", 1, "btn", "btn-warning", "w-100", 3, "click"], [1, "fa", "fa-chevron-left", 2, "margin-right", "4px"]],
      template: function ModalLoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalLoginComponent_Template_button_click_3_listener() {
            return ctx.activeModal.dismiss("Cross click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "As credenciais da sua sess\xE3o est\xE3o expiradas. Por favor digite seus dados abaixo para armazen\xE1-los novamente.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ModalLoginComponent_Template_input_ngModelChange_12_listener($event) {
            return ctx.username = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ModalLoginComponent_Template_input_ngModelChange_14_listener($event) {
            return ctx.password = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalLoginComponent_Template_button_click_15_listener() {
            return ctx.doLogin();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Obter minhas credenciais");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalLoginComponent_Template_button_click_19_listener() {
            return ctx.passBack();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Cancelar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.username);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGFsLWxvZ2luL21vZGFsLWxvZ2luLmNvbXBvbmVudC5sZXNzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalLoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-modal-login',
          templateUrl: './modal-login.component.html',
          styleUrls: ['./modal-login.component.less']
        }]
      }], function () {
        return [{
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/rodape/rodape.component.ts":
  /*!********************************************!*\
    !*** ./src/app/rodape/rodape.component.ts ***!
    \********************************************/

  /*! exports provided: RodapeComponent */

  /***/
  function srcAppRodapeRodapeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RodapeComponent", function () {
      return RodapeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _modal_login_modal_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../modal-login/modal-login.component */
    "./src/app/modal-login/modal-login.component.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var RodapeComponent =
    /*#__PURE__*/
    function () {
      function RodapeComponent(modalService, authService, router) {
        _classCallCheck(this, RodapeComponent);

        this.modalService = modalService;
        this.authService = authService;
        this.router = router;
      }

      _createClass(RodapeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "openModal",
        value: function openModal() {
          // If our authentication information is valid
          // open Adminstrative otherwise open login
          var a = this.authService.hasValidAuthentication();

          if (!this.authService.hasValidAuthentication()) {
            this.modalService.open(_modal_login_modal_login_component__WEBPACK_IMPORTED_MODULE_1__["ModalLoginComponent"]);
          } else {
            // this.modalService.open(ModalAdministrativeComponent, { size: 'xl' });
            this.router.navigate(['/administrative']);
          }
        }
      }]);

      return RodapeComponent;
    }();

    RodapeComponent.ɵfac = function RodapeComponent_Factory(t) {
      return new (t || RodapeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
    };

    RodapeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RodapeComponent,
      selectors: [["app-rodape"]],
      decls: 7,
      vars: 0,
      consts: [["id", "targetConte", 1, "card", "card-rodape"], [1, "row"], [1, "col-4"], ["width", "140", "height", "40", "src", "/assets/images/logo-transparente.png", 1, "image-rodape", 3, "click"], [1, "col-8"], [1, "rodape-text"]],
      template: function RodapeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RodapeComponent_Template_img_click_3_listener() {
            return ctx.openModal();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Copyright @ #BadlyPlayed 2020 - Todos os direitos reservados.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".card[_ngcontent-%COMP%] {\n  width: 70%;\n  margin: auto;\n}\n.image-rodape[_ngcontent-%COMP%] {\n  margin-top: 4px;\n}\n.rodape-text[_ngcontent-%COMP%] {\n  margin-top: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ERVYvanVsaWEvYmFkbHlwbGF5ZWQvc3JjL2FwcC9yb2RhcGUvcm9kYXBlLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9yb2RhcGUvcm9kYXBlLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7QUNDSjtBREVBO0VBQ0ksZUFBQTtBQ0FKO0FER0E7RUFDSSxnQkFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvcm9kYXBlL3JvZGFwZS5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJke1xuICAgIHdpZHRoOiA3MCU7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuXG4uaW1hZ2Utcm9kYXBle1xuICAgIG1hcmdpbi10b3A6IDRweDtcbn1cblxuLnJvZGFwZS10ZXh0e1xuICAgIG1hcmdpbi10b3A6IDE0cHg7XG59IiwiLmNhcmQge1xuICB3aWR0aDogNzAlO1xuICBtYXJnaW46IGF1dG87XG59XG4uaW1hZ2Utcm9kYXBlIHtcbiAgbWFyZ2luLXRvcDogNHB4O1xufVxuLnJvZGFwZS10ZXh0IHtcbiAgbWFyZ2luLXRvcDogMTRweDtcbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RodapeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-rodape',
          templateUrl: './rodape.component.html',
          styleUrls: ['./rodape.component.less']
        }]
      }], function () {
        return [{
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/auth.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/auth.service.ts ***!
    \******************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./config.service */
    "./src/app/services/config.service.ts");

    var AuthService =
    /*#__PURE__*/
    function () {
      function AuthService(configService, http) {
        _classCallCheck(this, AuthService);

        this.configService = configService;
        this.http = http;
      }

      _createClass(AuthService, [{
        key: "hasValidAuthentication",
        value: function hasValidAuthentication() {
          if (localStorage.getItem(this.configService.tokenCookieName) == null) {
            return false;
          } else {
            try {
              var authData = JSON.parse(localStorage.getItem(this.configService.tokenCookieName));

              if (authData['accessToken'] != null) {
                // TODO : Adjust this
                return true; // this.http.post(this.configService.getApiBaseUrl() + '/api/auth/check', authData)
                //   .subscribe((data) => {
                //     if (data['error'] !== undefined) {
                //       return false;
                //     } else {
                //       return true;
                //     }
                //   });            
              }
            } catch (Error) {
              console.log("ERR");
              return false;
            }
          }
        }
      }, {
        key: "doLogin",
        value: function doLogin(userName, password) {
          var _this14 = this;

          if (userName != null && password != null) {
            var loginData = {};
            loginData["username"] = userName;
            loginData["password"] = password;
            var response = this.http.post(this.configService.getApiBaseUrl() + '/api/auth/signin', loginData);
            response.subscribe(function (data) {
              if (data.accessToken != null) {
                localStorage.setItem(_this14.configService.tokenCookieName, JSON.stringify(data));
              }
            });
            return response;
          }
        }
      }, {
        key: "doLogout",
        value: function doLogout() {
          localStorage.removeItem(this.configService.tokenCookieName);
        }
      }, {
        key: "getStoredToken",
        value: function getStoredToken() {
          var authData = JSON.parse(localStorage.getItem(this.configService.tokenCookieName));
          return authData;
        }
      }, {
        key: "getHeaderWithToken",
        value: function getHeaderWithToken() {
          if (this.hasValidAuthentication()) {
            var authData = JSON.parse(localStorage.getItem(this.configService.tokenCookieName));

            if (authData['accessToken'] != null) {
              var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
              header = header.append("Content-Type", "application/json");
              header = header.append("x-access-token", authData['accessToken']);
              return header;
            }
          } else {
            return null;
          }
        }
      }, {
        key: "isStoredTokenAdmin",
        value: function isStoredTokenAdmin() {
          var authData = this.getStoredToken();
          var authDataRole = authData['roles'];

          if (authDataRole == null) {
            return false;
          }

          return authDataRole.includes('ROLE_ADMIN');
        }
      }, {
        key: "getUsuarios",
        value: function getUsuarios() {
          var headerData = this.getHeaderWithToken();

          if (headerData != null) {
            return this.http.get(this.configService.getApiBaseUrl() + '/api/users/', {
              headers: headerData
            });
          }
        }
      }, {
        key: "insertUsuario",
        value: function insertUsuario(usuario) {
          var headerData = this.getHeaderWithToken();

          if (headerData != null) {
            return this.http.post(this.configService.getApiBaseUrl() + '/api/users/', usuario, {
              headers: headerData
            });
          }
        }
      }, {
        key: "removerUSuario",
        value: function removerUSuario(id) {
          var headerData = this.getHeaderWithToken();

          if (headerData != null) {
            if (id) {
              var user = {
                'id': id
              };
              return this.http.post(this.configService.getApiBaseUrl() + '/api/users/remove', user, {
                headers: headerData
              });
            }
          }
        }
      }]);

      return AuthService;
    }();

    AuthService.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/config.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/config.service.ts ***!
    \********************************************/

  /*! exports provided: ConfigService */

  /***/
  function srcAppServicesConfigServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfigService", function () {
      return ConfigService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ConfigService =
    /*#__PURE__*/
    function () {
      function ConfigService() {
        _classCallCheck(this, ConfigService);

        this.apiURLDevelopment = "http://localhost:3000";
        this.apiURLAWS = "http://ec2-3-128-160-44.us-east-2.compute.amazonaws.com:3000";
        this.tokenCookieName = "BadlyPlayed_AUTH";
      }

      _createClass(ConfigService, [{
        key: "getApiBaseUrl",
        value: function getApiBaseUrl() {
          if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"])()) {
            return this.apiURLAWS;
          }

          return this.apiURLAWS;
        }
      }]);

      return ConfigService;
    }();

    ConfigService.ɵfac = function ConfigService_Factory(t) {
      return new (t || ConfigService)();
    };

    ConfigService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ConfigService,
      factory: ConfigService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfigService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/historia.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/historia.service.ts ***!
    \**********************************************/

  /*! exports provided: HistoriaService */

  /***/
  function srcAppServicesHistoriaServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HistoriaService", function () {
      return HistoriaService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./config.service */
    "./src/app/services/config.service.ts");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/services/auth.service.ts");

    var HistoriaService =
    /*#__PURE__*/
    function () {
      function HistoriaService(http, configService, authService) {
        _classCallCheck(this, HistoriaService);

        this.http = http;
        this.configService = configService;
        this.authService = authService;
      }

      _createClass(HistoriaService, [{
        key: "getAllHistorias",
        value: function getAllHistorias() {
          var headerData = this.authService.getHeaderWithToken();

          if (headerData != null) {
            return this.http.get(this.configService.getApiBaseUrl() + '/api/historias', {
              headers: headerData
            });
          }
        }
      }, {
        key: "getHistoriaById",
        value: function getHistoriaById(id) {
          var headerData = this.authService.getHeaderWithToken();

          if (headerData != null && id != null) {
            return this.http.get(this.configService.getApiBaseUrl() + '/api/historias/' + id, {
              headers: headerData
            });
          }
        }
      }, {
        key: "insertHistoria",
        value: function insertHistoria(historia) {
          return this.http.post(this.configService.getApiBaseUrl() + '/api/historias', historia);
        }
      }, {
        key: "updateHistoria",
        value: function updateHistoria(historia) {
          var headerData = this.authService.getHeaderWithToken();

          if (headerData != null) {
            return this.http.post(this.configService.getApiBaseUrl() + '/api/historias/atualizar', historia, {
              headers: headerData
            });
            ;
          }
        }
      }, {
        key: "deleteHistoria",
        value: function deleteHistoria(id) {
          var headerData = this.authService.getHeaderWithToken();

          if (headerData != null) {
            var idBody = {
              "_id": id
            };
            return this.http.post(this.configService.getApiBaseUrl() + '/api/historias/apagar', idBody, {
              headers: headerData
            });
          }
        }
      }]);

      return HistoriaService;
    }();

    HistoriaService.ɵfac = function HistoriaService_Factory(t) {
      return new (t || HistoriaService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]));
    };

    HistoriaService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: HistoriaService,
      factory: HistoriaService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HistoriaService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"]
        }, {
          type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/parametros.service.ts":
  /*!************************************************!*\
    !*** ./src/app/services/parametros.service.ts ***!
    \************************************************/

  /*! exports provided: ParametrosService */

  /***/
  function srcAppServicesParametrosServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ParametrosService", function () {
      return ParametrosService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./config.service */
    "./src/app/services/config.service.ts");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/services/auth.service.ts");

    var ParametrosService =
    /*#__PURE__*/
    function () {
      function ParametrosService(http, configService, authService) {
        _classCallCheck(this, ParametrosService);

        this.http = http;
        this.configService = configService;
        this.authService = authService;
      }

      _createClass(ParametrosService, [{
        key: "getContatos",
        value: function getContatos() {
          var response = this.http.get(this.configService.getApiBaseUrl() + '/api/parametros');
          return response;
        }
      }, {
        key: "saveContatos",
        value: function saveContatos(contatos) {
          var headerData = this.authService.getHeaderWithToken();

          if (headerData != null) {
            return this.http.post(this.configService.getApiBaseUrl() + '/api/parametros/contatos', contatos, {
              headers: headerData
            }).subscribe(function (data) {
              console.log(data);
            });
          }
        }
      }]);

      return ParametrosService;
    }();

    ParametrosService.ɵfac = function ParametrosService_Factory(t) {
      return new (t || ParametrosService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]));
    };

    ParametrosService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ParametrosService,
      factory: ParametrosService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ParametrosService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"]
        }, {
          type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/recorde.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/recorde.service.ts ***!
    \*********************************************/

  /*! exports provided: RecordeService */

  /***/
  function srcAppServicesRecordeServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RecordeService", function () {
      return RecordeService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./config.service */
    "./src/app/services/config.service.ts");

    var RecordeService =
    /*#__PURE__*/
    function () {
      function RecordeService(http, configService) {
        _classCallCheck(this, RecordeService);

        this.http = http;
        this.configService = configService;
      }

      _createClass(RecordeService, [{
        key: "getHeroes",
        value: function getHeroes() {
          var response = this.http.get(this.configService.getApiBaseUrl() + '/api/recordes');
          return response;
        }
      }]);

      return RecordeService;
    }();

    RecordeService.ɵfac = function RecordeService_Factory(t) {
      return new (t || RecordeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"]));
    };

    RecordeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: RecordeService,
      factory: RecordeService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecordeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/sobre/sobre.component.ts":
  /*!******************************************!*\
    !*** ./src/app/sobre/sobre.component.ts ***!
    \******************************************/

  /*! exports provided: SobreComponent */

  /***/
  function srcAppSobreSobreComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SobreComponent", function () {
      return SobreComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SobreComponent =
    /*#__PURE__*/
    function () {
      function SobreComponent() {
        _classCallCheck(this, SobreComponent);
      }

      _createClass(SobreComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SobreComponent;
    }();

    SobreComponent.ɵfac = function SobreComponent_Factory(t) {
      return new (t || SobreComponent)();
    };

    SobreComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SobreComponent,
      selectors: [["app-sobre"]],
      decls: 59,
      vars: 0,
      consts: [["id", "targetSobre", 1, "card"], [1, "card-body"], [1, "card-title", "sobre-title"], [1, "card-text", "text-center"], [1, "progress"], ["role", "progressbar", "aria-valuenow", "53", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-on", 2, "width", "65%"], ["role", "progressbar", "aria-valuenow", "47", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-off", 2, "width", "35%"], ["role", "progressbar", "aria-valuenow", "53", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-on", 2, "width", "53%"], ["role", "progressbar", "aria-valuenow", "47", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-off", 2, "width", "47%"]],
      template: function SobreComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Sobre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Voc\xEA sabia que ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "65%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " dos gamers jogam ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "jogos online");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "jogam onine");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "n\xE3o jogam online");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "fonte : PGB2020");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "E que mais da ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "metade");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " da comunidade gamer \xE9 constituida de ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "mulheres");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "mulheres");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "homens");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "fonte : PGB2020");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Mesmo assim, muitas mulheres s\xE3o ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "assediadas diariamente.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " O ambiente virtual gamer online \xE9 o \xFAnico \xE9 o \xFAnico local em que certas coisas ditas s\xE3o ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "toleradas");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " e levadas ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "levianamente");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, ", quando esses casos s\xE3o reportados comumente ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "n\xE3o s\xE3o punidos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " de acordo. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " O ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "#badlyplayed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " foi criado no ano de 2020 por mulheres gamers, com o objectivo de expor essa impunidade atrav\xE9s da ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "coleta de hist\xF3rias");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " de outras mulheres gamers, e dessa forma cobrar uma mudan\xE7a de postura das empresas de jogos online. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".card-body[_ngcontent-%COMP%] {\n  width: 70%;\n  margin: auto;\n}\n.sobre-title[_ngcontent-%COMP%] {\n  font-family: 'Permanent Marker', cursive;\n  color: #aa31ce;\n}\n.progress[_ngcontent-%COMP%] {\n  height: 68px;\n  border-radius: 40px;\n  font-family: 'Montserrat', sans-serif;\n  font-size: 26px;\n}\n.progress-on[_ngcontent-%COMP%] {\n  background-color: #fd9a10;\n  font-weight: 700;\n}\n.progress-off[_ngcontent-%COMP%] {\n  background-color: #7607bc;\n  font-weight: 700;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ERVYvanVsaWEvYmFkbHlwbGF5ZWQvc3JjL2FwcC9zb2JyZS9zb2JyZS5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvc29icmUvc29icmUuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0VBQ0EsWUFBQTtBQ0NKO0FERUE7RUFDSSx3Q0FBQTtFQUNBLGNBQUE7QUNBSjtBREdBO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0VBQ0EscUNBQUE7RUFDQSxlQUFBO0FDREo7QURJQTtFQUNJLHlCQUFBO0VBQ0EsZ0JBQUE7QUNGSjtBREtBO0VBQ0kseUJBQUE7RUFDQSxnQkFBQTtBQ0hKIiwiZmlsZSI6InNyYy9hcHAvc29icmUvc29icmUuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1ib2R5e1xuICAgIHdpZHRoOiA3MCU7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuXG4uc29icmUtdGl0bGV7XG4gICAgZm9udC1mYW1pbHk6ICdQZXJtYW5lbnQgTWFya2VyJywgY3Vyc2l2ZTtcbiAgICBjb2xvcjojYWEzMWNlO1xufVxuXG4ucHJvZ3Jlc3N7XG4gICAgaGVpZ2h0OjY4cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMjZweDtcbn1cblxuLnByb2dyZXNzLW9ue1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZDlhMTA7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLnByb2dyZXNzLW9mZntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzYwN2JjO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG59IiwiLmNhcmQtYm9keSB7XG4gIHdpZHRoOiA3MCU7XG4gIG1hcmdpbjogYXV0bztcbn1cbi5zb2JyZS10aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiAnUGVybWFuZW50IE1hcmtlcicsIGN1cnNpdmU7XG4gIGNvbG9yOiAjYWEzMWNlO1xufVxuLnByb2dyZXNzIHtcbiAgaGVpZ2h0OiA2OHB4O1xuICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDI2cHg7XG59XG4ucHJvZ3Jlc3Mtb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmQ5YTEwO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuLnByb2dyZXNzLW9mZiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3NjA3YmM7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SobreComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-sobre',
          templateUrl: './sobre.component.html',
          styleUrls: ['./sobre.component.less']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js"); // if (environment.production) {
    //   enableProdMode();
    // }


    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /DEV/julia/badlyplayed/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map