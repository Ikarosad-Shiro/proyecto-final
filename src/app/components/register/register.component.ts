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

  constructor(private authService: AuthService) { }

  register() {
    if (this.password !== this.confirmPassword) {
      console.error('Passwords do not match');
      return;
    }
    this.authService.register(this.email, this.password, this.name).subscribe(
      (response: any) => {
        console.log('Registration successful:', response);
      },
      (error: any) => {
        console.error('Registration error:', error);
      }
    );
  }
}
