import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './auth/page/authentication/authentication.component';
import { DocenteComponent } from './auth/page/docente/docente.component';
import { PerfilDocenteComponent } from './auth/page/perfil-docente/perfil-docente.component';
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: AuthenticationComponent },
  { path: 'docente', component: DocenteComponent },
  { path: 'perfildocente', component: PerfilDocenteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
