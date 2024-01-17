import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthenticationComponent } from './auth/page/authentication/authentication.component';
import { AuthenticationService } from './services/authentication.service';
import { MaterialModule } from './shared/material.module';
import { CursoComponent } from './auth/page/curso/curso.component';
import { DocenteComponent } from './auth/page/docente/docente.component';
import { PerfilDocenteComponent } from './auth/page/perfil-docente/perfil-docente.component';
import { TareaComponent } from './auth/page/tarea/tarea.component';
import { CursosAlumnoComponent } from './cursos-alumno/cursos-alumno.component';
import { HorarioComponent } from './horario/horario.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { ChatComponent } from './layouts/chat/chat.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    HomeComponent,
    AppComponent,
    AuthenticationComponent,
    CursoComponent,
    DocenteComponent,
    PerfilDocenteComponent,
    TareaComponent,
    CursosAlumnoComponent,
    HorarioComponent,
    LoginComponent,
    RegisterComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatSelectModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
