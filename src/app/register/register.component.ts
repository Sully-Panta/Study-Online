import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/usuario.service';
import { AlertService } from '../services/alert.service';
import { Credenciales } from '../interfaces/credenciales';
import { Respuesta } from '../interfaces/respuesta';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private _toast: AlertService,
    private _userService: UserService) {
    this.registerForm = this.fb.group({
      registerUsername: ['', Validators.required],
      registerPassword: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  onRegisterSubmit() {

    if (this.registerForm.invalid) {
      this._toast.error("Campos Vacíos")
      return
    }

    const user: Credenciales = {
      username: this.registerForm.value.registerUsername,
      password: this.registerForm.value.registerPassword
    }

    this._userService.post(user).subscribe({
      next: (respuesta: Respuesta) => {
        if (!respuesta.status) {
          this._toast.error(respuesta.data)
          this.registerForm.reset()
          return
        }

        this._toast.success(respuesta.data)

        this.router.navigate(['/home']).then(() => {
          console.log('Redirección a /home completada.');
        });
      }
    })
  }

}
