import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthenticationComponent } from './auth/page/authentication/authentication.component';
import { MaterialModule } from './shared/material.module';
import { CursoComponent } from './auth/page/curso/curso.component';
import { DocenteComponent } from './auth/page/docente/docente.component';
import { PerfilDocenteComponent } from './auth/page/perfil-docente/perfil-docente.component';
import { TareaComponent } from './auth/page/tarea/tarea.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    CursoComponent,
    DocenteComponent,
    PerfilDocenteComponent,
    TareaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
