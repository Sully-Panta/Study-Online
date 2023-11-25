import { Component } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { UserService } from '../services/usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private authenticationService: AuthenticationService, private router: Router, private userService: UserService) {
    console.log('HomeComponent initialized');
  }

  ngOnInit() {
    // Verifica el estado de autenticación después de que la navegación ha terminado
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    ).subscribe(() => {
      console.log('Navegación completada. Estado de autenticación:', this.isLoggedIn());
    });
  }

  ngDoCheck() {
    console.log('HomeComponent verificado.', this.isLoggedIn());
  }

  isLoggedIn(): boolean {
    const currentUser = localStorage.getItem(this.userService.getCurrentUserKey());
    return !!currentUser; // Devuelve true si hay un usuario actual, de lo contrario, false
  }

  logout(): void{
    this.authenticationService.logout();
    this.userService.logoutUser();
  }
}
