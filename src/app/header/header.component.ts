import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../serviceBack/auth-service.service';
import { Router } from '@angular/router';
declare var window: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
 
  constructor(public authService: AuthServiceService, private router:Router) {
  

  }
 
  ngOnInit(): void {
    this.authService.formModal = new window.bootstrap.Modal(
      document.getElementById('myModal')
    );
   

  }
 
  openFormModal() {
    this.authService.formModal.show();
  }
  navigate(){
    console.log(sessionStorage.getItem('auth-user'));

    const user = JSON.parse(sessionStorage.getItem('auth-user') || '{}');
const userId = user.id;
if (userId) {
  this.router.navigate(['/DashboardMainComponent/MainDashboardProfilComponent/', userId]);
}

/*
    this.router.navigate(['/DashboardMainComponent/MainDashboardProfilComponent/',user.id])
    */

  }
 }