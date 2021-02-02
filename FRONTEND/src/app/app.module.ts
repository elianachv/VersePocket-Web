import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { SitioWebComponent } from './components/sitio-web/sitio-web.component';
import { BarraMenuComponent } from './components/barra-menu/barra-menu.component';
import { CarruselPrincipalComponent } from './components/carrusel-principal/carrusel-principal.component';
import { SeccionDescripcionComponent } from './components/seccion-descripcion/seccion-descripcion.component';
import { SeccionFuncionalidadesComponent } from './components/seccion-funcionalidades/seccion-funcionalidades.component';
import { SeccionSumateComponent } from './components/seccion-sumate/seccion-sumate.component';
import { SeccionDemoComponent } from './components/seccion-demo/seccion-demo.component';
import { PropagandaComponent } from './components/propaganda/propaganda.component';
import { FooterComponent } from './components/footer/footer.component';
import { InfoFinalComponent } from './components/info-final/info-final.component';
import { FormularioRegistroComponent } from './components/formulario-registro/formulario-registro.component';
import { FormularioInicioSesionComponent } from './components/formulario-inicio-sesion/formulario-inicio-sesion.component';
import { CreacionCategoriaComponent } from './components/creacion-categoria/creacion-categoria.component';
import { BarraPrincipalComponent } from './components/barra-principal/barra-principal.component';
import { ListaCategoriasComponent } from './components/lista-categorias/lista-categorias.component';
import { PaginaPrincipalComponent } from './components/pagina-principal/pagina-principal.component';
import { CategoriaIndividualComponent } from './components/categoria-individual/categoria-individual.component';

@NgModule({
  declarations: [
    AppComponent,
    SitioWebComponent,
    BarraMenuComponent,
    CarruselPrincipalComponent,
    SeccionDescripcionComponent,
    SeccionFuncionalidadesComponent,
    SeccionSumateComponent,
    SeccionDemoComponent,
    PropagandaComponent,
    FooterComponent,
    InfoFinalComponent,
    FormularioRegistroComponent,
    FormularioInicioSesionComponent,
    CreacionCategoriaComponent,
    BarraPrincipalComponent,
    ListaCategoriasComponent,
    PaginaPrincipalComponent,
    CategoriaIndividualComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
