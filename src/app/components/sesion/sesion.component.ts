import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sesion',
  templateUrl: './sesion.component.html',
  styleUrls: ['./sesion.component.css']
})
export class SesionComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  login() {
    this.errorMessage = '';

    if (!this.email || !this.password) {
      this.errorMessage = 'Por favor, complete todos los campos.';
      return;
    }

    this.authService.login(this.email, this.password).subscribe(
      (response: any) => {
        if (!response.emailVerified) {
          this.errorMessage = 'Parece que tu cuenta no está verificada. Revisa tu correo, te llegó un mensaje de verificación. Puede que esté en spam.';
        } else {
          localStorage.setItem('token', response.userId); // Guardar el token de sesión
          this.router.navigate(['/catalogo']);
        }
      },
      (error: any) => {
        if (error.error && error.error.message === 'Contraseña incorrecta.') {
          this.errorMessage = 'La contraseña ingresada es incorrecta. Por favor, intenta nuevamente.';
        } else if (error.error === 'Usuario no encontrado en Firebase.' || error.error === 'Usuario no encontrado en la base de datos.') {
          this.errorMessage = 'La cuenta no existe. Verifica tu correo electrónico y vuelve a intentarlo.';
        } else if (error.error === 'Correo no verificado. Por favor, revisa tu correo y confirma tu cuenta.') {
          this.errorMessage = 'Tu cuenta no está verificada. Favor de revisar su correo, puede que esté en los mensajes de spam.';
        } else if (error.error && error.error.message === 'Las credenciales proporcionadas son incorrectas o han expirado.') {
          this.errorMessage = 'Las credenciales proporcionadas son incorrectas o han expirado.';
        } else {
          this.errorMessage = `Error en el inicio de sesión: ${JSON.stringify(error.error) || error.message}`;
        }
      }
    );
  }
}
