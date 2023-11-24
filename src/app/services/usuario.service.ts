// user.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private usersKey = 'registeredUsers';
  private currentUserKey = 'currentUser';
  

  registerUser(username: string, password: string): boolean {
    // Obtén la lista actual de usuarios registrados o inicializa una lista vacía
    const storedUsers: string | null = localStorage.getItem(this.usersKey);
    const registeredUsers: any[] = storedUsers ? JSON.parse(storedUsers) : [];

    // Verifica si el usuario ya está registrado
    const isUserRegistered = registeredUsers.some((user) => user.username === username);
    if (isUserRegistered) {
      return false; // Usuario ya registrado
    }

    // Registra el nuevo usuario
    registeredUsers.push({ username, password });
    localStorage.setItem(this.usersKey, JSON.stringify(registeredUsers));
    return true; // Registro exitoso
  }

  isLoggedIn(): boolean {
    // Lógica para verificar si el usuario ha iniciado sesión
    // Por ejemplo, verifica si hay un usuario almacenado en el localStorage
    return !!localStorage.getItem(this.currentUserKey);
  }

  loginUser(username: string, password: string): boolean {
    console.log('Datos almacenados:', localStorage.getItem(this.usersKey));
    console.log('Intento de inicio de sesión para el usuario:', username);
    // Obtén la lista actual de usuarios registrados o inicializa una lista vacía
    const storedUsers: string | null = localStorage.getItem(this.usersKey);
    const registeredUsers: any[] = storedUsers ? JSON.parse(storedUsers) : [];

    // Verifica si las credenciales coinciden con algún usuario registrado
    const isValidUser = registeredUsers.some((user) => user.username === username && user.password === password);
    localStorage.setItem(this.currentUserKey, JSON.stringify({ username }));
    return isValidUser;
  }

  logoutUser(): void {
    // Lógica para cerrar sesión...
    // Por ejemplo, elimina el usuario actual del localStorage
    localStorage.removeItem(this.currentUserKey);
  }

  getCurrentUserKey(): string {
    return this.currentUserKey;
  }
}
