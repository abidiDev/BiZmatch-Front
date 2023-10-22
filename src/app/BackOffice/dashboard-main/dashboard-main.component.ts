import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/serviceBack/auth-service.service';
import { TokenStorageService } from 'src/app/serviceBack/token-storage.service';

@Component({
  selector: 'app-dashboard-main',
  templateUrl: './dashboard-main.component.html',
  styleUrls: ['./dashboard-main.component.scss']
})
export class DashboardMainComponent implements OnInit{
  userIdFromStorage: any;
  reclamationDropdownOpen: boolean = false;
  userId: any=this.tokenStorage.getUser().id;
  toggleReclamationDropdown() {
    this.reclamationDropdownOpen = !this.reclamationDropdownOpen;
  }

  constructor(public authService: AuthServiceService,private tokenStorage: TokenStorageService){
    this.userIdFromStorage = sessionStorage.getItem('userID');


  }
  ngOnInit(): void {
    this.authService.formModal.open();
    this.authService.formModal.close();
  }

}
