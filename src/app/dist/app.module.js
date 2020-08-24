"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var ngx_slick_carousel_1 = require("ngx-slick-carousel");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var home_component_1 = require("./home/home.component");
var hero_component_1 = require("./layout/hero/hero.component");
var header_component_1 = require("./layout/header/header.component");
var sobre_component_1 = require("./sobre/sobre.component");
var algumas_historias_component_1 = require("./algumas-historias/algumas-historias.component");
var contar_historia_component_1 = require("./contar-historia/contar-historia.component");
var manifesto_component_1 = require("./manifesto/manifesto.component");
var contato_component_1 = require("./contato/contato.component");
var rodape_component_1 = require("./rodape/rodape.component");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var forms_1 = require("@angular/forms");
var modal_login_component_1 = require("./modal-login/modal-login.component");
var modal_administrative_component_1 = require("./modal-administrative/modal-administrative.component");
var historias_component_1 = require("./administrative/historias/historias.component");
var parametros_component_1 = require("./administrative/parametros/parametros.component");
var parametros_contatos_component_1 = require("./administrative/parametros/parametros-contatos/parametros-contatos.component");
var parametros_usuarios_component_1 = require("./administrative/parametros/parametros-usuarios/parametros-usuarios.component");
var administrative_component_1 = require("./administrative/administrative.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                hero_component_1.HeroComponent,
                header_component_1.HeaderComponent,
                sobre_component_1.SobreComponent,
                algumas_historias_component_1.AlgumasHistoriasComponent,
                contar_historia_component_1.ContarHistoriaComponent,
                manifesto_component_1.ManifestoComponent,
                contato_component_1.ContatoComponent,
                rodape_component_1.RodapeComponent,
                modal_login_component_1.ModalLoginComponent,
                modal_administrative_component_1.ModalAdministrativeComponent,
                historias_component_1.HistoriasComponent,
                parametros_component_1.ParametrosComponent,
                parametros_contatos_component_1.ParametrosContatosComponent,
                parametros_usuarios_component_1.ParametrosUsuariosComponent,
                administrative_component_1.AdministrativeComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                http_1.HttpClientModule,
                ngx_slick_carousel_1.SlickCarouselModule,
                forms_1.FormsModule,
                ng_bootstrap_1.NgbModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent],
            entryComponents: [modal_login_component_1.ModalLoginComponent, modal_administrative_component_1.ModalAdministrativeComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
