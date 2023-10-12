import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/serviceBack/auth-service.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit, OnChanges{
  same:boolean=true;
  username: string = ''; 
  email: string = ''; 
  phone: string = ''; 
  @Input() password: string = ''; 
  @Input() passwordrpt: string = ''; 
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  ngOnChanges(changes: SimpleChanges): void {
    
    if (changes['password']) {

    if(this.password!=this.passwordrpt){
      this.same=false;
      console.log(this.same);
    }  }}

    constructor(private authService: AuthServiceService,  private router:Router){}

  ngOnInit(): void {

    this.same=true;

  }
  onSubmit(signUpForm:NgForm){  this.authService.register(signUpForm.value).subscribe(
    data => {

      this.isSuccessful = true;
      this.isSignUpFailed = false;
      setTimeout( () => {

        this.router.navigate(['/vitrine'])

         }, 3000);
    },
    err => {
      console.log(err.error);
      this.errorMessage = err.error.message;
      this.isSignUpFailed = true;
    }
  );

  
  }

}
