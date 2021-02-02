import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaIndividualComponent } from './components/categoria-individual/categoria-individual.component';
import { CreacionCategoriaComponent } from './components/creacion-categoria/creacion-categoria.component';
import { FormularioInicioSesionComponent } from './components/formulario-inicio-sesion/formulario-inicio-sesion.component';
import { FormularioRegistroComponent } from './components/formulario-registro/formulario-registro.component';
import { ListaCategoriasComponent } from './components/lista-categorias/lista-categorias.component';
import { PaginaPrincipalComponent } from './components/pagina-principal/pagina-principal.component';
import { SitioWebComponent } from './components/sitio-web/sitio-web.component';

const routes: Routes = [

  { path: '', component: SitioWebComponent },
  { path: 'usuarios/registro', component: FormularioRegistroComponent },
  { path: 'usuarios/inicio-sesion', component: FormularioInicioSesionComponent },
  { path: 'categorias/crear', component: CreacionCategoriaComponent },
  { path: 'categorias/listar', component: ListaCategoriasComponent },
  { path: 'categorias/mostrar', component: CategoriaIndividualComponent },
  { path: 'usuarios/pagina-principal', component: PaginaPrincipalComponent }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
