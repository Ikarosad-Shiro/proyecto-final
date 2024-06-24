import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  userData: any = {};
  phoneForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.phoneForm = this.fb.group({
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]]
    });
  }

  ngOnInit(): void {
    if (this.isBrowser()) {
      const userId = localStorage.getItem('firebaseUid');
      if (userId) {
        this.authService.getUserData(userId).subscribe(
          data => {
            this.userData = data;
            this.phoneForm.patchValue({ phoneNumber: data.phoneNumber });
          },
          error => {
            console.error('Error al obtener los datos del usuario', error);
          }
        );
      }
    }
  }

  updatePhoneNumber(): void {
    if (this.isBrowser()) {
      const userId = localStorage.getItem('firebaseUid');
      if (userId) {
        const phoneNumber = this.phoneForm.get('phoneNumber')?.value;
        this.authService.updatePhoneNumber(userId, phoneNumber).subscribe(
          () => {
            this.userData.phoneNumber = phoneNumber;
            alert('Número de teléfono actualizado correctamente');
          },
          error => {
            console.error('Error al actualizar el número de teléfono', error);
          }
        );
      }
    }
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

  navigateToCatalogo(): void {
    this.router.navigate(['/catalogo']);
  }

  private isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';
  }
}
