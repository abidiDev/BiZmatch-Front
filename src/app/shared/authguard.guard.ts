import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from '../serviceBack/auth-service.service';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {

 
  constructor(private authService: AuthServiceService, private router:Router,private http:HttpClient) { }
  canActivate(): boolean {
    console.log(this.authService.loggedIn());
    if ( this.authService.loggedIn()==null) {
      this.router.navigate(['404']);
     return false;      
   }else{
return true;
   }
  }
  private url ='http://localhost:9090/';
addrec(reclamation:any){
  return this.http.post(this.url+'reclamation/add',reclamation)
  .pipe(
    catchError((error) => {
      console.error('Erreur lors de la requête HTTP : ', error);
      throw error; // Propager l'erreur
    })
  );
}


list(id:any):Observable<any[]>{
  return this.http.get<any[]>(this.url+'reclamation/getReclamationByUser/'+id)

}
rec():Observable<any[]>{
  return this.http.get<any[]>(this.url+'reclamation')

}
updaterec(id:any,reclamation:any){
  return this.http.put(this.url+'reclamation/edit/'+id,reclamation)
  .pipe(
    catchError((error) => {
      console.error('Erreur lors de la requête HTTP : ', error);
      throw error; // Propager l'erreur
    })
  );
}

}
