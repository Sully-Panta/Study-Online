import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/usuario.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private userService: UserService) {
    this.loginForm = this.fb.group({
      loginUsername: ['', Validators.required],
      loginPassword: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  onLoginSubmit(username: string, password: string) {
    console.log('Datos de inicio de sesión:', { username, password });
    const isValidUser = this.userService.loginUser(username, password);

    if (isValidUser) {
      console.log('Inicio de sesión exitoso.');
      this.router.navigate(['/home']).then(() => {
        console.log('Redirección a /home completada.');
      });
    } else {
      console.log('Credenciales no válidas. Por favor, verifica tu nombre de usuario y contraseña.');
      alert('Credenciales no válidas. Por favor, verifica tu nombre de usuario y contraseña.');
    }
  }

}
