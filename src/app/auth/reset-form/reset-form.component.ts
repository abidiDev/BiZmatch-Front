import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ResetRequest } from 'src/app/model/reset-request.model';
import { AuthServiceService } from 'src/app/serviceBack/auth-service.service';

@Component({
  selector: 'app-reset-form',
  templateUrl: './reset-form.component.html',
  styleUrls: ['./reset-form.component.scss']
})
export class ResetFormComponent implements OnInit {
  password: string = ''; 
  passwordrpt: string = ''; 
  token: string="";
  mail:string="";
  resetPassword!: ResetRequest;
  same=true;
  updated=false;
  
  constructor(private route: ActivatedRoute , private authService: AuthServiceService, private router:Router) {

   
  }
  ngOnInit(): void {
    this.authService.formModal.show();
    this.route.queryParams
    .subscribe(params => {
      console.log(params); 
      this.token = params['token'];
      console.log(this.token);
    }
  );  }
  

  onSubmit(){
    this.updated=false;

    if(this.password==this.passwordrpt){
      this.same=true;

    this.resetPassword=new ResetRequest();
    this.resetPassword._mail= localStorage.getItem('mail');
    this.resetPassword._token= this.token;
    this.resetPassword._password= this.password;
  
    console.log(this.resetPassword);

     this.authService.reset_password(this.resetPassword).subscribe(
    data => {
      this.updated=true;
      setTimeout( () => {

        this.router.navigate(['']);

         }, 3000);

     console.log(data);    },
    err => {
      this.updated=false;

      console.log(err);
      

    }
  );

  
  }
else{
  this.same=false;

}}

}
