import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const AUTH_API = 'http://localhost:6060/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  formModal: any;
  User:any;
  

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any[]>{
    return this.http.get<any[]>(`http://localhost:8091/CRUD/getAllActor`);
  }

  login(credentials: { username: any; password: any; }): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      username: credentials.username,
      password: credentials.password
    }, httpOptions);

  }
  loggedIn(){ return sessionStorage.getItem('auth-token');}


  register(user: { username: any; email: any; password: any;}): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username: user.username,
      email: user.email,
      password: user.password
    }, httpOptions);
  }
  forgetPasswordByEmail(contact:{mail:any}): Observable<any> {
    return this.http.post(AUTH_API + 'forgot_passworddemondByEmail', {
      mail:contact.mail
    }, httpOptions);
  }


  reset_password(reset:any): Observable<any> {
    return this.http.post(AUTH_API + 'reset_password', {
      mail:reset.mail,
      token:reset.token,
      password:reset.password,
    }, httpOptions);
  }

  
  signOut() {
    window.sessionStorage.clear();
  }
  getUserByID(id: any): Observable<any> {
    return this.http.get<any>('http://localhost:8091/CRUD/getActorById/'+id);
    
  }

  updateUser(user: FormData): Observable<any> {
    return this.http.put<any>('http://localhost:8091/CRUD/updateActor/', user);
    
  }

  update2User(user: FormData): Observable<any> {
    return this.http.post<any>('http://localhost:8091/CRUD/addActor/', user);
    
  }
  deleteUser(id:any): Observable<any> {
    return this.http.delete<any>('http://localhost:8091/CRUD/deleteActor/'+id);
  }
}