import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

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

  constructor(private authService: AuthService) {}

  register(): void {
    if (this.password !== this.confirmPassword) {
      console.error('Passwords do not match');
      return;
    }

    this.authService.register(this.email, this.password, this.name).subscribe({
      next: (res) => {
        console.log('Registration successful:', res);
        // Aquí puedes mostrar un mensaje de éxito o redirigir al usuario
      },
      error: (err) => {
        console.error('Registration error:', err);
        // Aquí puedes mostrar un mensaje de error
      }
    });
  }
}
