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
import { EstudianteComponent } from './estudiante/estudiante.component';
import { CursosAlumnoComponent } from './cursos-alumno/cursos-alumno.component';
import { HorarioComponent } from './horario/horario.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    CursoComponent,
    DocenteComponent,
    PerfilDocenteComponent,
    TareaComponent,
    EstudianteComponent,
    CursosAlumnoComponent,
    HorarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
