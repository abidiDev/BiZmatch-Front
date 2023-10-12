import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-card',
  templateUrl: './form-card.component.html',
  styleUrls: ['./form-card.component.scss']
})
export class FormCardComponent implements OnInit {


  surface: string = ''; 
  RoomNumber: number | undefined ; 
  FloorNumber: number | undefined ; 
  ngOnInit(): void {
    
  }
  onSubmit(signInForm:NgForm): void { console.log(signInForm.value) }
 
}