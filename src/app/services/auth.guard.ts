import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): Observable<boolean> | boolean {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/sesion']);
      return false;
    }

    return this.authService.isVerified().pipe(
      map((verified: boolean) => {
        if (!verified) {
          this.router.navigate(['/sesion']);
          return false;
        }
        return true;
      }),
      catchError(() => {
        this.router.navigate(['/sesion']);
        return of(false);  // Aquí devolvemos un observable que emite `false`
      })
    );
  }
}
