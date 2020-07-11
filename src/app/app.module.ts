import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { APP_ROUTING } from './app.routes';
import { Injectable } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SaludoComponent } from './componentes/saludo/saludo.component';
import { SaludosComponent } from './tic/saludos/saludos.component';
import { ValidacionComponent } from './formularios/validacion/validacion.component';
import { FormAppComponent } from './formularios/form-app/form-app.component';
import { AddAppComponent } from './formularios/add-app/add-app.component';
import { ProgressBarComponent } from './tic/progress-bar/progress-bar.component';
import { TareasComponent } from './componentes/tareas/tareas.component';
import { VerTareaComponent } from './componentes/ver-tarea/ver-tarea.component';
import { NotasComponent } from './componentes/notas/notas.component';
import { AgregarNotasComponent } from './componentes/agregar-notas/agregar-notas.component';

@NgModule({
  declarations: [
    AppComponent,
    SaludoComponent,
    SaludosComponent,
    ValidacionComponent,
    FormAppComponent,
    AddAppComponent,
    ProgressBarComponent,
    TareasComponent,
    VerTareaComponent,
    NotasComponent,
    AgregarNotasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }


