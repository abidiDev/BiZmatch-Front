import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrmServiceService } from 'src/app/serviceBack/crm-service.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  idE:any;
  Entreprise:any;
  idEntreprise1!:any
  constructor( private route:ActivatedRoute, public crmService: CrmServiceService, private router: Router ){

  }
  ngOnInit(): void {
    this.idE = this.route.snapshot.paramMap.get('idE');

    this.getEntrepriseByID(this.idE);
    this.idEntreprise1=sessionStorage.getItem("userID")
     this.getEntrepriseByIDUser(this.idEntreprise1);
    this.crmService.partnership.idEntreprise2=this.idE;
    
      
    console.log(this.crmService.partnership);


   

   
  }

  createPartnership(){
    this.crmService.addPartnership().subscribe((response: any )=> {
      console.log(response)
      this.Entreprise=response;
     //sessionStorage.setItem("user2ID",this.Entreprise.actorID);

      this.router.navigate(['/MainReFormComponent/topicMessageComponent']); // Replace 'other-component' with the actual route path you want to navigate to.

    
    });
  }
  

  getEntrepriseByID(id : number){
    this.crmService.getEntrepriseById(id).subscribe((response: any )=> {
      console.log(response)
    sessionStorage.setItem("user2ID",response.actorID);


      this.Entreprise=response;
    
    });
  }

  getEntrepriseByIDUser(id : number){

    this.crmService.getEntrepriseByUser(id).subscribe((response: any )=> {
      this.crmService.partnership.idEntreprise1=response[0].id;
    
    });
  }

 

}
