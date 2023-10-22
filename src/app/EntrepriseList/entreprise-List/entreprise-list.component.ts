import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


import { CrmServiceService } from 'src/app/serviceBack/crm-service.service';

@Component({
  selector: 'entreprise-list-affiche',
  templateUrl: './entreprise-list.component.html',
  styleUrls: ['./entreprise-list.component.scss']
})
export class EntrepriseListComponent implements OnInit  {
  numberOfLikes : number = 0;
  entreprise!: any[];
  clickNbr =0;
  VuNbr ="";
  estates:any ;
  public priceMax :any;
  public priceMin : any;
  price:any;
  estate:any;


  likeButtonClick() {
    this.numberOfLikes++;
  }

  dislikeButtonClick() {
    this.numberOfLikes--;
  }
  constructor ( private crmService: CrmServiceService  ,  private router:Router){}

ngOnInit(): void {
  this.getAll();
  
}
 getAll(){
      this.crmService.AllENtreprise().subscribe((response: any )=> {
        this.entreprise = response;
        console.log(response)
      });
    }
      
}

    
   
  





