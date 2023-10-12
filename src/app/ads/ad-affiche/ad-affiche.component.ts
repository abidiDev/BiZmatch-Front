import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdsService } from 'src/app/ServicesBack/ads.service';
import { ServiceRealestateService } from 'src/app/ServicesBack/service-realestate.service';
import { RErequest } from 'src/app/rerequest.model';

@Component({
  selector: 'app-ad-affiche',
  templateUrl: './ad-affiche.component.html',
  styleUrls: ['./ad-affiche.component.scss']
})
export class AdAfficheComponent implements OnInit  {
  
  ads: any[] | undefined; // Déclaration de la variable ads

estate:any;
  constructor(private sre: ServiceRealestateService,  private adsService :AdsService , private route:ActivatedRoute){}

  ngOnInit(): void {
   
      const id = this.route.snapshot.paramMap.get('id');
      this.AfficheEstate(id);
    }
    
  
    AfficheEstate(id: any): void {
      console.log("AfficheEstate called with ID:", id);
      this.sre.getEstateByAd(id).subscribe((data) => {
        console.log("Received response from server:", data);
        this.estate = data;
      });
    }
    
      
      
      
}

    
   
  





