import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from '../serviceBack/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {
 
  constructor(private authService: AuthServiceService, private router:Router) { }
  canActivate(): boolean {
    console.log(this.authService.loggedIn());
    if ( this.authService.loggedIn()==null) {
      this.router.navigate(['404']);
     return false;      
   }else{
return true;
   }
  }
}
