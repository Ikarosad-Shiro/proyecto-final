import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  phoneNumber: string = '';
  userName: string = '';
  userEmail: string = '';

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    const userId = this.getUserIdFromLocalStorage();
    if (userId) {
      this.authService.getUserData(userId).subscribe(user => {
        this.userName = user.name;
        this.userEmail = user.email;
        this.phoneNumber = user.phoneNumber || '';
      }, error => {
        console.error('Error al obtener los datos del usuario', error);
      });
    }
  }

  navigateToCatalogo(): void {
    this.router.navigate(['/catalogo']);
  }

  onSubmit(): void {
    this.authService.updatePhoneNumber(this.phoneNumber).subscribe(response => {
      console.log('Teléfono actualizado', response);
    }, error => {
      console.error('Error al actualizar el teléfono', error);
    });
  }

  private getUserIdFromLocalStorage(): string | null {
    if (typeof window !== 'undefined' && window.localStorage) {
      return localStorage.getItem('userId');
    }
    return null;
  }
}
