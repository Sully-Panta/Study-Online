import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Curso } from '../interfaces/curso';
import { Router } from '@angular/router';
@Component({
  selector: 'app-horario',
  templateUrl: './horario.component.html',
})
export class HorarioComponent {
  
  tablaVisible = false;
  cursos: Curso[] = [];

  constructor(
    public dialogRef: MatDialogRef<HorarioComponent>,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: { cursos: Curso[] }
  ) {}
  ngOnInit(): void {
    this.cursos = this.data.cursos;
  }

  cerrarDialogo(confirmado: boolean): void {
    this.dialogRef.close(confirmado);
  }
  redirigirAInscripcion(): void {
    this.router.navigate(['/cursos-alumno']);
  
  this.cursos = this.data.cursos;
  }
}


