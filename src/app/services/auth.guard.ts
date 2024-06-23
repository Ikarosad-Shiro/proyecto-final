import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, take, tap, switchMap } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.authService.isLoggedIn().pipe(
      take(1),
      map(isLoggedIn => !!isLoggedIn),
      tap(loggedIn => {
        if (!loggedIn) {
          this.router.navigate(['/login']);
        }
      }),
      switchMap(isLoggedIn => {
        if (isLoggedIn) {
          return this.authService.isVerified().pipe(
            tap(isVerified => {
              if (!isVerified) {
                this.router.navigate(['/verify-email']);
              }
            })
          );
        } else {
          return of(false);
        }
      })
    );
  }
}
