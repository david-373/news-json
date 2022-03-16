import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {
  constructor(private authService: AuthService,
    private router: Router) { }

  canLoad(): boolean {
    let cond = this.authService.isLoggedIn();
    if (!cond) this.router.navigate(['/login']);
    return cond
  }
}
