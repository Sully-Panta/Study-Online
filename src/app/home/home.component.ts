import { Component } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { UserService } from '../services/usuario.service';
import { CursosService } from '../services/curso.service';
import { Curso } from '../interfaces/curso';
import { MatDialog } from '@angular/material/dialog';
import { HorarioComponent } from '../horario/horario.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  cursosInscritos: Curso[] = [];

  constructor(private authenticationService: AuthenticationService, private router: Router,
    private userService: UserService, private cursosService: CursosService, private dialog: MatDialog) {
    console.log('HomeComponent initialized');
  }

  ngOnInit() {
    this.cursosInscritos = this.cursosService.obtenerCursosInscritos();
    // Verifica el estado de autenticación después de que la navegación ha terminado
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    ).subscribe(() => {
      console.log('Navegación completada. Estado de autenticación:', this.isLoggedIn());
    });
  }

  ngDoCheck() {
    console.log('HomeComponent verificado.', this.isLoggedIn());
  }

  isLoggedIn(): boolean {
    const currentUser = localStorage.getItem(this.userService.getCurrentUserKey());
    return !!currentUser; // Devuelve true si hay un usuario actual, de lo contrario, false
  }

  logout(): void{
    this.authenticationService.logout();
    this.userService.logoutUser();
  }

  abrirHorario(): void {
    this.dialog.open(HorarioComponent, {
      data: { cursos: this.cursosInscritos }, // Pasar los cursos inscritos al componente de horario
    });
  }
}
