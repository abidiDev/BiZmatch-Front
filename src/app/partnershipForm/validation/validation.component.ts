import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.scss']
})
export class validationComponent implements OnInit {


 constructor (){}

  surface: string = ''; 
  roomNumber: number | undefined ; 
  rloorNumber: number | undefined ; 
  price=0 ; 

  ngOnInit(): void {
    

  }
  

}