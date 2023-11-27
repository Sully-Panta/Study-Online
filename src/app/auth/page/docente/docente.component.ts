import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from 'src/app/services/alert.service';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: string;
  edad: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Elian', weight: 'Alvarado', edad: 20 },
  { position: 2, name: 'Leydy', weight: 'Fernandez', edad: 20 },
  { position: 3, name: 'Nixson', weight: 'Murillo', edad: 20 },
  { position: 4, name: 'Sully', weight: 'Panta', edad: 43 },
  { position: 5, name: 'Freddy', weight: 'Yagual', edad: 18 },

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
  form: FormGroup;

  constructor(
    private _alert: AlertService,
    private _fb: FormBuilder
  ) {
    this.form = this._fb.group({
      mensaje: ['', Validators.required]
    })
  }

  submit() {
    if (this.form.invalid) {
      this._alert.errorChat();
      return;
    }
    this.form.reset()
  }


}
export class docentes {
  constructor(
    public id: number,
    public name: string,
    public academicExperience: string,
    public professionalExperience: string,
    public reviews: string[]
  ) { }
}