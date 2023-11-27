import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Curso } from '../interfaces/curso';
import { CursosService } from '../services/curso.service';
import { ConfirmacionInscripcionComponent } from '../confirmar-inscripcion/confirmar-inscripcion.component';
import { HorarioComponent } from '../horario/horario.component';
import { Observable } from 'rxjs';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AuthenticationService } from '../services/authentication.service';
import { UserService } from '../services/usuario.service';

@Component({
  selector: 'app-cursos-alumno',
  templateUrl: './cursos-alumno.component.html',
  
})
export class CursosAlumnoComponent implements OnInit {
  cursosDisponibles$: Observable<Curso[]> = new Observable<Curso[]>();
  cursosInscritos: Curso[] = [];

  constructor(private cursosService: CursosService, private dialog: MatDialog, private router: Router,
    private authenticationService: AuthenticationService, private userService: UserService) {
      console.log('Curso-alumnoComponent initialized');
    }

  ngOnInit(): void {
    this.cursosService.cargarCursosDisponibles();
    this.cursosDisponibles$ = this.cursosService.cursosDisponibles$;
    this.cursosInscritos = this.cursosService.obtenerCursosInscritos();
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    ).subscribe(() => {
      console.log('Navegación completada. Estado de autenticación:', this.isLoggedIn());
    });
  }

  ngDoCheck() {
    console.log('Curso-alumnoComponent verificado.', this.isLoggedIn());
  }

  isLoggedIn(): boolean {
    const currentUser = localStorage.getItem(this.userService.getCurrentUserKey());
    return !!currentUser; // Devuelve true si hay un usuario actual, de lo contrario, false
  }

  logout(): void{
    this.authenticationService.logout();
    this.userService.logoutUser();
  }

  mostrarConfirmacion(curso: Curso): void {
    const dialogRef = this.dialog.open(ConfirmacionInscripcionComponent, {
      data: { curso },
    });

    dialogRef.afterClosed().subscribe((confirmado: boolean) => {
      if (confirmado) {
        this.cursosService.inscribirseEnCurso(curso);
        this.actualizarHorario();
      }
    });
  }

  abrirHorario(): void {
    this.dialog.open(HorarioComponent, {
      data: { cursos: this.cursosInscritos }, // Pasar los cursos inscritos al componente de horario
    });
  }

  private actualizarHorario(): void {
    this.cursosService.actualizarCursosInscritos();
  }
}
