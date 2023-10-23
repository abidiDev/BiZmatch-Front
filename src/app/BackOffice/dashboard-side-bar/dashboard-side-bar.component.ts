import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/serviceBack/auth-service.service';
import { TokenStorageService } from 'src/app/serviceBack/token-storage.service';

@Component({
  selector: 'app-dashboard-side-bar',
  templateUrl: './dashboard-side-bar.component.html',
  styleUrls: ['./dashboard-side-bar.component.scss']
})
export class DashboardSideBarComponent implements OnInit {
  reclamationDropdownOpen: boolean = false;
  userid = 2;

  toggleReclamationDropdown() {
    this.reclamationDropdownOpen = !this.reclamationDropdownOpen;
  }
  constructor(public authService: AuthServiceService,private tokenStorage: TokenStorageService){

  }
  ngOnInit(): void {
    
  }
  
 

}
