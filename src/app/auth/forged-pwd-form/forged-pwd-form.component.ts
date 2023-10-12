import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthServiceService } from 'src/app/serviceBack/auth-service.service';

@Component({
  selector: 'app-forged-pwd-form',
  templateUrl: './forged-pwd-form.component.html',
  styleUrls: ['./forged-pwd-form.component.scss']
})
export class ForgedPwdFormComponent implements OnInit{


  mail: string = ''; 
  sendedEmail = false;
  errorMessage = '';
   waiting=false;
  ngOnInit(): void {
    
  }
  constructor(private authService: AuthServiceService){

  }

  onSubmit(forgetPwdForm:NgForm){
    this.waiting=true;


     this.authService.forgetPasswordByEmail(forgetPwdForm.value).subscribe(
    data => {
      this.waiting=false
      this.sendedEmail=true;

      localStorage.setItem('mail',this.mail);

console.log(data);    },
    err => {
      this.waiting=false
      this.sendedEmail=false;

      this.errorMessage = 'the writen email is wrong';
      

    }
  );

  
  }

}
