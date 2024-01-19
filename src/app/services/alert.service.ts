import { Injectable } from '@angular/core';
import { Notyf } from 'notyf';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  notyf = new Notyf();

  constructor() { }

  error(mensaje: string) {
    this.notyf.error({
      message: mensaje,
      duration: 5000,
      dismissible: true
    })
  }

  success(mensaje: string) {
    this.notyf.success({
      message: mensaje,
      duration: 5000,
      dismissible: true,
      background: '#69AB3D'
    })
  }

  errorChat() {
    this.notyf.error({
      message: "Escriba un mensaje",
      duration: 5000,
      dismissible: true,
      position: {x:'center',y:'bottom'}
    })
  }

}
