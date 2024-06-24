import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { VerificationDialogComponent } from '../verification-dialog/verification-dialog.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  name: string = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private dialog: MatDialog
  ) {}

  register() {
    if (this.password !== this.confirmPassword) {
      this.dialog.open(VerificationDialogComponent, {
        data: { message: 'Las contraseñas no coinciden.' }
      });
      return;
    }

    this.authService.register(this.email, this.password, this.name).subscribe(
      () => {
        this.dialog.open(VerificationDialogComponent, {
          data: { message: 'Registro exitoso: Se ha enviado un correo de verificación. Por favor, revisa tu correo y confirma tu cuenta.' }
        });
        this.router.navigate(['/sesion']);
      },
      error => {
        this.dialog.open(VerificationDialogComponent, {
          data: { message: `Error durante el registro: ${error.message}` }
        });
      }
    );
  }
}
