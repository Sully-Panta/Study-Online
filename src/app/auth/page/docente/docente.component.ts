import { Component } from '@angular/core';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: string;
  edad: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Elian', weight: 'Alvarado', edad: 20},
  {position: 2, name: 'Leydy', weight: 'Fernandez', edad: 20},
  {position: 3, name: 'Nixson', weight: 'Murillo', edad: 20},
  {position: 4, name: 'Sully', weight: 'Panta', edad: 43},
  {position: 5, name: 'Freddy', weight: 'Yagual', edad: 18},

];
@Component({
  selector: 'app-docente',
  templateUrl: './docente.component.html',
  styleUrls: ['./docente.component.css']
})
export class DocenteComponent {
  selected = '';
  displayedColumns: string[] = ['position', 'name', 'weight', 'edad'];
  dataSource = ELEMENT_DATA;
}
export class docentes {
  constructor(
    public id: number,
    public name: string,
    public academicExperience: string,
    public professionalExperience: string,
    public reviews: string[]
  ) {}
}