import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServiceRealestateService } from 'src/app/ServicesBack/service-realestate.service';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.scss']
})
export class validationComponent implements OnInit {


 constructor (private sre : ServiceRealestateService){}

  surface: string = ''; 
  roomNumber: number | undefined ; 
  rloorNumber: number | undefined ; 
  price=0 ; 

  ngOnInit(): void {
    

  }
  saveCaracter(signInForm:NgForm) 

  { this.sre.realestateRequest._house=signInForm.value;
    console.log(this.sre.realestateRequest._type);
    console.log(this.sre.realestateRequest._house);

  }

}