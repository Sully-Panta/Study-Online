import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Curso } from '../interfaces/curso';
import { CursosService } from '../services/curso.service';
import { ConfirmacionInscripcionComponent } from '../confirmar-inscripcion/confirmar-inscripcion.component';
import { HorarioComponent } from '../horario/horario.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cursos-alumno',
  templateUrl: './cursos-alumno.component.html',
  
})
export class CursosAlumnoComponent implements OnInit {
  cursosDisponibles$: Observable<Curso[]> = new Observable<Curso[]>();
  cursosInscritos: Curso[] = [];

  constructor(private cursosService: CursosService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.cursosService.cargarCursosDisponibles();
    this.cursosDisponibles$ = this.cursosService.cursosDisponibles$;
    this.cursosInscritos = this.cursosService.obtenerCursosInscritos();
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
