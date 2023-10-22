import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-realestate-info',
  templateUrl: './realestate-info.component.html',
  styleUrls: ['./realestate-info.component.scss']
})
export class RealestateInfoComponent implements OnInit {
 estates :any[]| undefined; 
 estate :any;
 currentRealestate: {} = {};
  constructor (){}
 
 
  ngOnInit(): void {
 }



}
