import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServiceRealestateService } from 'src/app/ServicesBack/service-realestate.service';

@Component({
  selector: 'app-topicMessage',
  templateUrl: './topicMessage.component.html',
  styleUrls: ['./topicMessage.component.scss']
})
export class topicMessageComponent implements OnInit {


  state: string = ''; 
  city: string = '' ; 
  district: string = '' ; 
  street: string = '' ; 
  number: number | undefined ; 
  latitude : number | undefined ; 
  longitude : number | undefined ; 
  constructor(private sre: ServiceRealestateService){}


  ngOnInit(): void {
    
  }
  saveLocation(signInForm:NgForm) 

  { 
    this.sre.realestateRequest._localisation=signInForm.value
console.log( this.sre.realestateRequest);
}
}
