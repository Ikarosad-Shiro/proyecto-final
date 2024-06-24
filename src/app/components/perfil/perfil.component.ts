import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  userData: any = {};

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    console.log('ngOnInit ejecutado');
    if (this.isBrowser()) {
      const userId = localStorage.getItem('firebaseUid');
      console.log('Firebase UID:', userId);
      if (userId) {
        console.log('Llamando a getUserData con userId:', userId);
        this.authService.getUserData(userId).subscribe(
          data => {
            console.log('Datos del usuario recibidos:', data);
            this.userData = data;
          },
          error => {
            console.error('Error al obtener los datos del usuario', error);
          }
        );
      }
    }
  }

  navigateToCatalogo(): void {
    this.router.navigate(['/catalogo']);
  }

  navigateToActualizarPerfil(): void {
    this.router.navigate(['/actualizarperfil']);
  }

  deleteAccount(): void {
    if (this.isBrowser()) {
      const userId = localStorage.getItem('firebaseUid');
      if (userId && confirm('¿Estás seguro de que deseas eliminar tu cuenta? Esta acción no se puede deshacer.')) {
        this.authService.deleteUserAccount(userId).subscribe(
          () => {
            alert('Cuenta eliminada correctamente');
            this.authService.logout();
            this.router.navigate(['/']);
          },
          error => {
            console.error('Error al eliminar la cuenta', error);
          }
        );
      }
    }
  }

  private isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';
  }
}
