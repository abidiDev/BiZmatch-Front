import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/serviceBack/auth-service.service';
import { TokenStorageService } from 'src/app/serviceBack/token-storage.service';

@Component({
  selector: 'app-signin-form',
  templateUrl: './signin-form.component.html',
  styleUrls: ['./signin-form.component.scss']
})
export class SigninFormComponent implements OnInit{


  username: string = ''; 
  password: string = ''; 
  surface:string = ''; 
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  captcha:String;

  ngOnInit(): void {
    

    if (this.tokenStorage.getToken()) {
      this.roles = this.tokenStorage.getUser().roles;
    }
    
  }
  constructor( private router:Router,public authService: AuthServiceService,  private tokenStorage: TokenStorageService
    ){
      this.captcha = "ok";

  }
  resolved() {
    this.isLoggedIn = true;

    console.log(this.captcha)
}

  onSubmit(signInForm:NgForm): void { 
    if(this.isLoggedIn){
    this.authService.login(signInForm.value).subscribe(
      (    data: { accessToken: string; }) => {
        console.log(data)
      this.tokenStorage.saveToken(data.accessToken);
      this.tokenStorage.saveUser(data);
      sessionStorage.setItem("userID",this.tokenStorage.getUser().id)

      this.authService.User=data;
      this.roles = this.tokenStorage.getUser().roles;
      this.captcha = "";


    /*   this.roles.forEach( (value) => {
        if(value=="ROLE_ADMIN"){

          this.router.navigate(['/DashboardMainComponent/MainDashboardProfilComponent/',this.tokenStorage.getUser().id])

        }
      }); 
       //this.reloadPage(); */
    },
    err => {
      this.errorMessage = "username or password is incorrect";
      console.log(this.errorMessage)    }
  );} }
 
  reloadPage() {
    window.location.reload();
  }

 
}
