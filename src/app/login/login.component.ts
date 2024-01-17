import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/usuario.service';
import { AlertService } from '../services/alert.service';
import { Credenciales } from '../interfaces/credenciales';
import { AuthenticationService } from '../services/authentication.service';
import { Respuesta } from '../interfaces/respuesta';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private router: Router, 
    private _toast: AlertService,
    private _auth: AuthenticationService
    ) {
    this.loginForm = this.fb.group({
      loginUsername: ['', Validators.required],
      loginPassword: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  onLoginSubmit() {

    if(this.loginForm.invalid){
      this._toast.error("Campos Vacíos")
      return
    }

    const user: Credenciales = {
      username: this.loginForm.value.loginUsername,
      password: this.loginForm.value.loginPassword
    }
    
    this._auth.authentication(user).subscribe({
      next: (respuesta: Respuesta) => {
        if(!respuesta.status){
          this._toast.error(respuesta.data)
          this.loginForm.reset()
          return
        }
        
        localStorage.setItem('token',respuesta.data)
    
        this.router.navigate(['/home']).then(() => {
          console.log('Redirección a /home completada.');
        });
      }
    })
  }

}
