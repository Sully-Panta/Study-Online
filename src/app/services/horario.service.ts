
// services/horario.service.ts
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HorarioService {
  private horarioActualizado: any; // Ajusta el tipo de acuerdo a tu lógica de datos
  private horarioSubject = new Subject<any>();
  horario$ = this.horarioSubject.asObservable();

  actualizarHorario(nuevoHorario: any): void {
    this.horarioActualizado = nuevoHorario;
    this.horarioSubject.next([...this.horarioActualizado]); // Emitir el nuevo horario como una copia
    // Puedes realizar acciones adicionales según sea necesario
  }

  obtenerHorarioActualizado(): any {
    return this.horarioActualizado;
  }
}
