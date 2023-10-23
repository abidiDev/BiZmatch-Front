import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnnonceServiceService } from 'src/app/serviceBack/annonce-service.service';


import { CrmServiceService } from 'src/app/serviceBack/crm-service.service';

@Component({
  selector: 'annonce-list-affiche',
  templateUrl: './annonce-list.component.html',
  styleUrls: ['./annonce-list.component.scss']
})
export class AnnonceListComponent implements OnInit  {
  numberOfLikes : number = 0;
  annonce!: any[];
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
  constructor ( private annonceService: AnnonceServiceService  ,  private router:Router){}

ngOnInit(): void {
  this.getAll();
  
}
 getAll(){
      this.annonceService.AllAnnonce().subscribe((response: any )=> {
        this.annonce = response;
        console.log(response)
      });
    }
      
}

    
   
  





