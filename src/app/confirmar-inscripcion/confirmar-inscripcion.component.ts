import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Curso } from '../interfaces/curso';
import { CursosService } from '../services/curso.service';

@Component({
  selector: 'app-confirmacion-inscripcion',
  template: `
    <h2 mat-dialog-title>Confirmación de Inscripción</h2>
    <p>¿Está seguro de inscribirse en el curso {{ data.curso.nombre }}?</p>
    <button mat-button (click)="cerrarDialogo(false)">Cancelar</button>
    <button mat-button color="primary" (click)="confirmarInscripcion()">Aceptar</button>
    <div *ngIf="inscripcionExitosa">¡Inscripción exitosa!</div>
  `,
})
export class ConfirmacionInscripcionComponent implements OnInit {
  inscripcionExitosa = false;

  constructor(
    public dialogRef: MatDialogRef<ConfirmacionInscripcionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { curso: Curso },
    private cursosService: CursosService
  ) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.dialogRef.close(true);
    },1000);
  }

  cerrarDialogo(confirmado: boolean): void {
    this.dialogRef.close(confirmado);
  }

  confirmarInscripcion(): void {
    this.inscripcionExitosa = true;
    
  }
}
