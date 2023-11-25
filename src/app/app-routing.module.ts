import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DocenteComponent } from './auth/page/docente/docente.component';
import { PerfilDocenteComponent } from './auth/page/perfil-docente/perfil-docente.component';
import { CursosAlumnoComponent } from './cursos-alumno/cursos-alumno.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'docente', component: DocenteComponent },
  { path: 'perfildocente', component: PerfilDocenteComponent },
  {path: 'cursos-alumno', component: CursosAlumnoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
