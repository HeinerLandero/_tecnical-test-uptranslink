import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteFormComponent } from './components/cliente-form/cliente-form.component';
import { ClienteConsultaComponent } from './components/cliente-consulta/cliente-consulta.component';
import { AdminListadoComponent } from './components/admin-listado/admin-listado.component';
import { AdminDetalleComponent } from './components/admin-detalle/admin-detalle.component';
import { InicioComponent } from './components/inicio/inicio.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'nuevo', component: ClienteFormComponent },
  { path: 'consultar', component: ClienteConsultaComponent },
  { path: 'admin', component: AdminListadoComponent },
  { path: 'admin/detalle/:id', component: AdminDetalleComponent },
  { path: '', redirectTo: 'nuevo', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

