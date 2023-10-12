import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/serviceBack/auth-service.service';

@Component({
  selector: 'app-main-vitrine',
  templateUrl: './main-vitrine.component.html',
  styleUrls: ['./main-vitrine.component.scss']
})
export class MainVitrineComponent implements OnInit {
  adds: any[] | undefined;
  constructor(private userService: AuthServiceService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((data: any[]) => {
      console.log(data);
      this.adds=data;
    });
  }
}
