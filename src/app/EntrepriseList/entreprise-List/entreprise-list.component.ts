import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdsService } from 'src/app/ServicesBack/ads.service';
import { ServiceRealestateService } from 'src/app/ServicesBack/service-realestate.service';
import { RErequest } from 'src/app/rerequest.model';

@Component({
  selector: 'entreprise-list-affiche',
  templateUrl: './entreprise-list.component.html',
  styleUrls: ['./entreprise-list.component.scss']
})
export class EntrepriseListComponent implements OnInit  {
  numberOfLikes : number = 0;
  ads!: any[];
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
  constructor (private adsService : AdsService,   private router:Router, private sre: ServiceRealestateService){}


 

ngOnInit(): void {
  this.getAll();
  
}
matching():void{
  this.router.navigate(['/AdAfficheComponent/'])

}
  GetByType (type:any){
    this.adsService.getAdsByType(type)
      .subscribe((response: any )=> {
        this.ads = response;
        console.log(response)
      });
    }
    setType(type:any){
      this.adsService.type=type;
      this.GetByType(this.adsService.type)
    }
   getAll(){
      this.adsService.getAllAds().subscribe((response: any )=> {
        this.ads = response;
        console.log(response)
      });
    }

    addClick(id : number){
      this.adsService.addClick(id).subscribe((response: any )=> {
        console.log(response);
      });
    }
    ShowId(id:any){
      this.clickNbr++;
    
      this.addClick(id);
    }
    GetVu(id:any){
      this.adsService.getVu(id).subscribe((response: any )=> {
       this.VuNbr= response.message;
       
      });
      return this.VuNbr;
    }
    
    setPrice (priceMax:any , priceMin :any){
    

      console.log(priceMax,priceMin)
      this.adsService.filterByPrice(priceMin ,priceMax)
        .subscribe((response: any )=> {
          this.ads = response;
          console.log(response)
        });
      }
    
      navigate(id: any){
        this.router.navigate(['/AdAfficheComponent/',id])
        
      }
      
      
      
}

    
   
  





