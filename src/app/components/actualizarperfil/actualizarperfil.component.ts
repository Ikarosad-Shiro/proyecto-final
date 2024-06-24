import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actualizarperfil',
  templateUrl: './actualizarperfil.component.html',
  styleUrls: ['./actualizarperfil.component.css']
})
export class ActualizarPerfilComponent implements OnInit {
  userData: any = {};
  profileForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.profileForm = this.fb.group({
      name: ['', [Validators.required]],
      email: [{ value: '', disabled: true }, [Validators.required, Validators.email]],
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
            this.profileForm.patchValue({
              name: data.name,
              email: data.email,
              phoneNumber: data.phoneNumber
            });
          },
          error => {
            console.error('Error al obtener los datos del usuario', error);
          }
        );
      }
    }
  }

  updateProfile(): void {
    if (this.isBrowser()) {
      const userId = localStorage.getItem('firebaseUid');
      if (userId) {
        const updatedData = this.profileForm.getRawValue(); // Use getRawValue() to get all values including disabled
        this.authService.updateUserProfile(userId, updatedData).subscribe(
          () => {
            alert('Perfil actualizado correctamente');
            this.router.navigate(['/perfil']);
          },
          error => {
            console.error('Error al actualizar el perfil', error);
          }
        );
      }
    }
  }

  navigateToPerfil(): void {
    this.router.navigate(['/perfil']);
  }

  private isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';
  }
}
