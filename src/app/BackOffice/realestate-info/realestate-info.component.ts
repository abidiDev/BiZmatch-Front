import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceRealestateService } from 'src/app/ServicesBack/service-realestate.service';

@Component({
  selector: 'app-realestate-info',
  templateUrl: './realestate-info.component.html',
  styleUrls: ['./realestate-info.component.scss']
})
export class RealestateInfoComponent implements OnInit {
 estates :any[]| undefined; 
 estate :any;
 currentRealestate: {} = {};
  constructor (private sre : ServiceRealestateService, private router:Router){}
 
 
  ngOnInit(): void {
   this.getAll(); 
 }

  getAll(){
    this.sre.GetAll().subscribe((response: any )=> {
      this.estates = response;
      console.log(response)
    });
  }


  Delete(id: any) {
    this.sre.deleteEstate(id)
      .subscribe(
        data => {
          console.log(data);
          this.currentRealestate = this.estate.getAll();
        },
        error => console.log(error));
        location.reload();

      }
navigate(id: any){
  this.router.navigate(['/DashboardMainComponent/EstateAddComponent/',id])
  
}

}
