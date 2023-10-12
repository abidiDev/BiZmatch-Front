import { Component } from '@angular/core';
import { AuthServiceService } from 'src/app/serviceBack/auth-service.service';

@Component({
  selector: 'app-dashboard-side-bar',
  templateUrl: './dashboard-side-bar.component.html',
  styleUrls: ['./dashboard-side-bar.component.scss']
})
export class DashboardSideBarComponent {
  constructor(public authService: AuthServiceService){

  }

}
