import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  // Registro de usuario usando el backend
  register(email: string, password: string, name: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, { email, password, name });
  }

  // Inicio de sesión usando el backend
  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, { email, password }).pipe(
      tap((response: any) => {
        localStorage.setItem('userId', response.userId); // Almacenar el userId en localStorage
        localStorage.setItem('token', response.token); // Si también tienes un token
      })
    );
  }

  // Cierre de sesión
  logout(): Observable<void> {
    return new Observable<void>((observer) => {
      localStorage.removeItem('token'); // Eliminar token del almacenamiento local
      localStorage.removeItem('userId'); // Eliminar userId del almacenamiento local
      observer.next();
      observer.complete();
    });
  }

  // Verificar si el usuario está logueado
  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  // Verificar si el correo electrónico del usuario está verificado
  isVerified(): Observable<boolean> {
    const token = localStorage.getItem('token');
    return new Observable<boolean>((observer) => {
      if (token) {
        this.http.get(`${this.baseUrl}/verify-email`).subscribe(
          (response: any) => {
            observer.next(response.verified);
            observer.complete();
          },
          (error: any) => {
            observer.error(false);
            observer.complete();
          }
        );
      } else {
        observer.next(false);
        observer.complete();
      }
    });
  }

  // Obtener datos del usuario
  getUserData(userId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/users/${userId}`);
  }

  // Método para actualizar el número de teléfono
  updatePhoneNumber(phoneNumber: string): Observable<any> {
    const userId = localStorage.getItem('userId'); // Asegúrate de tener el ID del usuario almacenado
    return this.http.put(`${this.baseUrl}/users/${userId}/phone`, { phoneNumber });
  }
}
