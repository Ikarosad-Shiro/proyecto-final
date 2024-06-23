import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sesion',
  templateUrl: './sesion.component.html',
  styleUrls: ['./sesion.component.css']
})
export class SesionComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  login(): void {
    this.authService.login(this.email, this.password).subscribe({
      next: (res) => {
        console.log('Login successful:', res);
      },
      error: (err) => {
        console.error('Login error:', err);
      }
    });
  }
}
