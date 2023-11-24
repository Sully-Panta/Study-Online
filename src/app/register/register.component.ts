import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/usuario.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private userService: UserService) {
    this.registerForm = this.fb.group({
      registerUsername: ['', Validators.required],
      registerPassword: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  onRegisterSubmit(username: string, password: string) {
    const registrationSuccess = this.userService.registerUser(username, password);

  if (registrationSuccess) {
    console.log('Usuario registrado con éxito.');
    // Puedes redirigir a la página de inicio de sesión o realizar otras acciones después del registro
    this.router.navigate(['/home']);
  } else {
    console.log('El usuario ya está registrado.');
    // Puedes mostrar un mensaje de error al usuario
    alert('El usuario ya está registrado.');
  }
  }

}
