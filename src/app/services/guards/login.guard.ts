import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate  {
  constructor(public router: Router) {}
  canActivate() {

    if (1 > 0) {
      return true;
    } else {
      console.log('blockeado por e guard');
      this.router.navigate(['/login']);
      return false;
    }
  }
}
