import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent {
  isLoggedIn = false;
  showRegisterForm = false;

  // Datos de inicio de sesión
  loginUsername = '';
  loginPassword = '';

  // Datos de registro
  newUsername = '';
  newPassword = '';

  // Datos del usuario autenticado
  loggedInUsername = '';

  constructor(
    private router: Router
  ) {}

  login() {
    this.isLoggedIn = true;
    this.loggedInUsername = this.loginUsername;

    // Redirige a la página de inicio después de iniciar sesión
    this.router.navigate(['/home']);
  }

  logout() {
    this.isLoggedIn = false;
    this.loggedInUsername = '';
  }

  register() {
    // Redirige a la página de inicio después de registrarse
  this.router.navigate(['/home']);
  }

  toggleForm(formType: 'login' | 'register') {
    this.showRegisterForm = formType === 'register';
  }
}
