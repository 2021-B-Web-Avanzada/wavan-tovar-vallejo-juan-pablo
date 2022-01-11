import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraBusquedaComponent } from './componentes/barra-busqueda/barra-busqueda.component';
import { RutaInicioComponent } from './rutas/ruta-inicio/ruta-inicio.component';
import { SidebarComponent } from './componentes/sidebar/sidebar.component';
import { VideoComponent } from './componentes/video/video.component';
import { NovedadesComponent } from './componentes/novedades/novedades.component';
import { MenuPlegableComponent } from './componentes/menu-plegable/menu-plegable.component';
import { RutaExplorarComponent } from './rutas/ruta-explorar/ruta-explorar.component';
import { TarjetaComponent } from './componentes/tarjeta/tarjeta.component';
import { VideoExplorarComponent } from './componentes/video-explorar/video-explorar.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraBusquedaComponent,
    RutaInicioComponent,
    SidebarComponent,
    VideoComponent,
    NovedadesComponent,
    MenuPlegableComponent,
    RutaExplorarComponent,
    TarjetaComponent,
    VideoExplorarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
