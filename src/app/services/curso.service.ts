// services/curso.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HorarioService } from './horario.service';
import { Curso } from '../interfaces/curso';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Respuesta } from '../interfaces/respuesta';

@Injectable({
  providedIn: 'root',
})
export class CursosService {

  private myAppUrl: string = environment.endpoint
  private myApiUrl: string = 'api/Cursos/'

  private cursosDisponibles: Curso[] = [
    { id: 1, nombre: 'Desarrollo de Aplicaciones Móviles con Flutter,', horario: 'Lunes de 4:00 PM a 6:00 PM', dias: ['Lunes', 'Miércoles, viernes'], nivel: 'avanzado' },
    { id: 2, nombre: 'Programación en PHYTOM Basico', horario: 'Lunes 8 AM A 10 AM', dias: ['MARTES', 'Miércoles'], nivel: 'Básico' },
    { id: 3, nombre: 'Desarrollo Web con HTML y CSS', horario: 'Miércoles de 2:00 PM a 4:00 PM', dias: ['Miércoles', 'Viernes'], nivel: 'Intermedio' },
    { id: 4, nombre: 'Programación en Java Avanzado', horario: 'Jueves de 6:00 PM a 8:00 PM', dias: ['Jueves', 'Sábado'], nivel: 'Avanzado' },
    { id: 5, nombre: 'Desarrollo Móvil con React Native', horario: 'Viernes de 10:00 AM a 12:00 PM', dias: ['Viernes'], nivel: 'Avanzado' },
    { id: 6, nombre: 'Introducción a la Programación Funcional', horario: 'Martes de 4:00 PM a 6:00 PM', dias: ['Martes', 'Jueves'], nivel: 'Intermedio' },
    { id: 7, nombre: 'Python para Ciencia de Datos', horario: 'Lunes de 6:00 PM a 8:00 PM', dias: ['Lunes', 'Miércoles', 'Viernes'], nivel: 'Intermedio' },
    { id: 8, nombre: 'Desarrollo de Aplicaciones con Angular', horario: 'Sábado de 10:00 AM a 12:00 PM', dias: ['Sábado'], nivel: 'Avanzado' },
    { id: 9, nombre: 'Automatización de Pruebas con Selenium', horario: 'Jueves de 3:00 PM a 5:00 PM', dias: ['Jueves'], nivel: 'Intermedio' },
    { id: 10, nombre: 'Programación en Ruby Básico', horario: 'Miércoles de 10:00 AM a 12:00 PM', dias: ['Miércoles', 'Viernes'], nivel: 'Básico' },
    { id: 11, nombre: 'Desarrollo de Aplicaciones con Vue.js', horario: 'Martes de 6:00 PM a 8:00 PM', dias: ['Martes', 'Jueves'], nivel: 'Avanzado' },
    { id: 12, nombre: 'Programación en PHP Básico', horario: 'Viernes de 4:00 PM a 6:00 PM', dias: ['Viernes'], nivel: 'Básico' },
    { id: 13, nombre: 'Desarrollo de Juegos con Unity', horario: 'Sábado de 2:00 PM a 4:00 PM', dias: ['Sábado'], nivel: 'Avanzado' },
    { id: 14, nombre: 'Automatización de Infraestructura con Ansible', horario: 'Jueves de 7:00 PM a 9:00 PM', dias: ['Jueves'], nivel: 'Avanzado' },
    { id: 15, nombre: 'Programación en Swift para iOS', horario: 'Lunes de 4:00 PM a 6:00 PM', dias: ['Lunes', 'Miércoles'], nivel: 'Intermedio' },
    { id: 16, nombre: 'Programación en C++ Básico', horario: 'Lunes de 10:00 AM a 12 PM', dias: ['Lunes', 'Miércoles'], nivel: 'Básico' },
  ];
  private cursosInscritos: Curso[] = [];
  private cursosDisponiblesSubject = new BehaviorSubject<Curso[]>([]);
  private cursosInscritosSubject = new BehaviorSubject<Curso[]>([]);

  cursosDisponibles$ = this.cursosDisponiblesSubject.asObservable();
  cursosInscritos$ = this.cursosInscritosSubject.asObservable();

  constructor(
    private horarioService: HorarioService,
    private http: HttpClient) { }


  get(): Observable<Respuesta> {
    return this.http.get<Respuesta>(`${this.myAppUrl}${this.myApiUrl}`);
  }

  inscribirseEnCurso(curso: Curso): void {
    // Verificar si el curso ya está inscrito
    if (!this.cursosInscritos.find(c => c.id === curso.id)) {
      this.cursosInscritos.push(curso);
      this.actualizarHorario();
      this.actualizarCursosInscritos();
    }
  }

  private actualizarHorario(): void {
    const nuevoHorario = this.generarHorario(this.cursosInscritos);
    this.horarioService.actualizarHorario(nuevoHorario);
  }

  actualizarCursosInscritos(): void {
    this.cursosInscritosSubject.next([...this.cursosInscritos]);
  }

  obtenerCursosInscritos(): Curso[] {
    return this.cursosInscritos;
  }

  cargarCursosDisponibles(): void {
    this.cursosDisponiblesSubject.next([...this.cursosDisponibles]);
  }
  private generarHorario(cursos: Curso[]): any[] {
    const horario: any[] = [];

    cursos.forEach(curso => {
      // Buscar si ya hay una entrada para esta materia y hora
      const existente = horario.find(entry => entry.materia === curso.nombre && entry.hora === curso.horario);

      if (existente) {
        // Si existe, agregar días que no estén ya incluidos
        curso.dias.forEach(dia => {
          if (!existente.dias.includes(dia)) {
            existente.dias.push(dia);
          }
        });
      } else {
        // Si no existe, agregar una nueva entrada
        const nuevaEntrada = {
          materia: curso.nombre,
          dias: [...curso.dias],
          hora: curso.horario,
        };
        horario.push(nuevaEntrada);
      }
    });

    return horario;
  }

}

