import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RutaLoginComponent } from './rutas/ruta-login/ruta-login.component';
import { RutaForbiddenComponent } from './rutas/ruta-forbidden/ruta-forbidden.component';
import { RutaNotFoundComponent } from './rutas/ruta-not-found/ruta-not-found.component';
import { RutaInicioComponent } from './rutas/ruta-inicio/ruta-inicio.component';
import { RutaPostComponent } from './rutas/ruta-post/ruta-post.component';
import { RutaAppComponent } from './rutas/ruta-app/ruta-app.component';
import { RutaUsuarioComponent } from './rutas/ruta-usuario/ruta-usuario.component';
import {AuthService} from "./services/auth/auth.service";
import {EstaLogeadoGuard} from "./services/auth/esta-logeado.guard";
import {EsAdministradorGuard} from "./services/auth/es-administrador.guard";
import {BannerImagenesModule} from "./componentes/banner-imagenes/banner-imagenes.module";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    RutaLoginComponent,
    RutaForbiddenComponent,
    RutaNotFoundComponent,
    RutaInicioComponent,
    RutaPostComponent,
    RutaAppComponent,
    RutaUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BannerImagenesModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    EstaLogeadoGuard,
    EsAdministradorGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
