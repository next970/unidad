import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SaludoComponent } from './componentes/saludo/saludo.component';
import { SaludosComponent } from './tic/saludos/saludos.component';
import { ValidacionComponent } from './formularios/validacion/validacion.component';
import { FormAppComponent } from './formularios/form-app/form-app.component';
import { AddAppComponent } from './formularios/add-app/add-app.component';
import { ProgressBarComponent } from './tic/progress-bar/progress-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    SaludoComponent,
    SaludosComponent,
    ValidacionComponent,
    FormAppComponent,
    AddAppComponent,
    ProgressBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }


