import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ConfigModule } from 'ngx-envconfig';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeroComponent } from './layout/hero/hero.component';
import { HeaderComponent } from './layout/header/header.component';
import { SobreComponent } from './sobre/sobre.component';
import { AlgumasHistoriasComponent } from './algumas-historias/algumas-historias.component';
import { ContarHistoriaComponent } from './contar-historia/contar-historia.component';
import { ManifestoComponent } from './manifesto/manifesto.component';
import { ContatoComponent } from './contato/contato.component';
import { RodapeComponent } from './rodape/rodape.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ModalLoginComponent } from './modal-login/modal-login.component';
import { ModalAdministrativeComponent } from './modal-administrative/modal-administrative.component';
import { HistoriasComponent } from './administrative/historias/historias.component';
import { ParametrosComponent } from './administrative/parametros/parametros.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeroComponent,
    HeaderComponent,
    SobreComponent,
    AlgumasHistoriasComponent,
    ContarHistoriaComponent,
    ManifestoComponent,
    ContatoComponent,
    RodapeComponent,
    ModalLoginComponent,
    ModalAdministrativeComponent,
    HistoriasComponent,
    ParametrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SlickCarouselModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[ModalLoginComponent,ModalAdministrativeComponent]
})
export class AppModule { }
