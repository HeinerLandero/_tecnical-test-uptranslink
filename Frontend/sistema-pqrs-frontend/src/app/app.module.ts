import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ClienteFormComponent } from './components/cliente-form/cliente-form.component';
import { ClienteConsultaComponent } from './components/cliente-consulta/cliente-consulta.component';
import { AdminListadoComponent } from './components/admin-listado/admin-listado.component';
import { AdminDetalleComponent } from './components/admin-detalle/admin-detalle.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InicioComponent } from './components/inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    ClienteFormComponent,
    ClienteConsultaComponent,
    AdminListadoComponent,
    AdminDetalleComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
