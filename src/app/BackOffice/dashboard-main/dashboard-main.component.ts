import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/serviceBack/auth-service.service';

@Component({
  selector: 'app-dashboard-main',
  templateUrl: './dashboard-main.component.html',
  styleUrls: ['./dashboard-main.component.scss']
})
export class DashboardMainComponent implements OnInit{
  userIdFromStorage: any;

  constructor(public authService: AuthServiceService){
    this.userIdFromStorage = sessionStorage.getItem('userID');


  }
  ngOnInit(): void {
    this.authService.formModal.open();
    this.authService.formModal.close();
  }

}
