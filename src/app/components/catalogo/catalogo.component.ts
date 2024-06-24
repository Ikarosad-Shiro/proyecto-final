import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
  isLoggedIn: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    if (this.isBrowser()) {
      this.isLoggedIn = !!localStorage.getItem('token');
    }
  }

  navigateToLogin(): void {
    this.router.navigate(['/sesion']);
  }

  navigateToProfile(): void {
    this.router.navigate(['/perfil']); // Navega al componente Perfil
  }

  navigateToSettings(): void {
    this.router.navigate(['/ajustes']); // Ajusta la ruta según tu aplicación
  }
  
  navigateToJuego1(): void {
    this.router.navigate(['./juegos', 'the-house-of-the-dead']); //Navega al componente juegos
  }

  logout(): void {
    this.authService.logout().subscribe(() => {
      if (this.isBrowser()) {
        localStorage.removeItem('token'); // Eliminar token del almacenamiento local
      }
      this.isLoggedIn = false;
      this.router.navigate(['/']);
    });
  }

  private isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';
  }
}
