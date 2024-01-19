import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Credenciales } from '../interfaces/credenciales';
import { Observable } from 'rxjs';
import { Respuesta } from '../interfaces/respuesta';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private myAppUrl: string = environment.endpoint
  private myApiUrl: string = 'api/Auth/'

  constructor(private http: HttpClient) { }

  private isAuthenticated = false;

  login() {
    this.isAuthenticated = true;
  }

  logout() {
    this.isAuthenticated = false;
  }

  isLoggedIn() {
    return this.isAuthenticated;
  }

  authentication(user: Credenciales): Observable<Respuesta>{
    return this.http.post<Respuesta>(`${this.myAppUrl}${this.myApiUrl}`, user);
  }
}
