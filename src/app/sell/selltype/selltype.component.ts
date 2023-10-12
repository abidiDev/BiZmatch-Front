import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServiceRealestateService } from 'src/app/ServicesBack/service-realestate.service';

@Component({
  selector: 'app-selltype',
  templateUrl: './selltype.component.html',
  styleUrls: ['./selltype.component.scss']
})
export class SelltypeComponent implements OnInit  {

  constructor(private sre:ServiceRealestateService){

  }
  Price:  number | undefined  ; 
  savetypeBuilding(){localStorage.setItem('type','building');
  }
  savetypeOffice(){this.sre.realestateRequest._type="office"};
  savetypeCommercial(){this.sre.realestateRequest._type="commercial";}
  savetypeParking(){this.sre.realestateRequest._type="parking";}
  savetypeGround(){this.sre.realestateRequest._type="ground"; }
  savetypeHouse(){this.sre.realestateRequest._type="house";}

 

  ngOnInit(): void {
    
  }
  onSubmit(signInForm:NgForm): void { console.log(signInForm.value) }
 
}
