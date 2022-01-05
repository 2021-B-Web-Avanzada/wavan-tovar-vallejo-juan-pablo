import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RutaInicioComponent} from "./rutas/ruta-inicio/ruta-inicio.component";
import {RutaNotFoundComponent} from "../../../ejemplo/src/app/rutas/ruta-not-found/ruta-not-found.component";
import {RutaExplorarComponent} from "./rutas/ruta-explorar/ruta-explorar.component";

const routes: Routes = [{
  path: 'inicio',
  component: RutaInicioComponent,
},{
  path: 'explorar',
  component: RutaExplorarComponent,
}, {
  path: '',
  redirectTo: '/inicio',
  pathMatch: 'full',
},
  {
    path: '**',
    component: RutaNotFoundComponent,
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
