import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class UsernameGuard implements CanActivate {

  constructor(private router: Router) {

  }


  canActivate(): boolean {
    const username = sessionStorage.getItem('username')
    if (!username) this.router.navigate(['/page404']);
    return true
  }



}
