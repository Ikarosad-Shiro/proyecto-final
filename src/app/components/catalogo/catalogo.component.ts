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
    // Aquí podrías comprobar si el usuario está logueado, por ejemplo, verificando un token en localStorage
  }

  navigateToLogin(): void {
    this.router.navigate(['/sesion']);
  }

  logout(): void {
    // Aquí podrías eliminar el token de autenticación del localStorage
    this.isLoggedIn = false;
    this.router.navigate(['/']);
  }
}
