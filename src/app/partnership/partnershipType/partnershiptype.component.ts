import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CrmServiceService } from 'src/app/serviceBack/crm-service.service';

@Component({
  selector: 'app-partnershipType',
  templateUrl: './partnershiptype.component.html',
  styleUrls: ['./partnershiptype.component.scss']
})
export class PartnershiptypeComponent implements OnInit  {

  constructor(private crmService:CrmServiceService){

  }
  Price:  number | undefined  ; 
  savetypeBuilding(){localStorage.setItem('type','building');
  }
  /*
  savetypeOffice(){this.sre.realestateRequest._type="office"};
  savetypeCommercial(){this.sre.realestateRequest._type="commercial";}
  savetypeParking(){this.sre.realestateRequest._type="parking";}
  savetypeGround(){this.sre.realestateRequest._type="ground"; }
  savetypeHouse(){this.sre.realestateRequest._type="house";}
*/
savetypeMerge(){this.crmService.partnership.partnershipType="FUSION";}
savetypeAquisition(){this.crmService.partnership.partnershipType="ACQUISITION"}
savetypeStrategicP(){this.crmService.partnership.partnershipType="STRATEGIC_PARTNERSHIP"}
savetypeJoinV(){this.crmService.partnership.partnershipType="JOINT_VENTURE"}
savetypeBusinessA(){this.crmService.partnership.partnershipType="BUSINESS_ALLIANCE"}
savetypeDistributionA(){this.crmService.partnership.partnershipType="DISTRIBUTION_AGREEMENT"}
savetypeLicencingA(){this.crmService.partnership.partnershipType="LICENSING_AGREEMENT"}
savetypeCoDev(){this.crmService.partnership.partnershipType="CO_DEVELOPMENT_AGREEMENT"}
savetypeTechnologyP(){this.crmService.partnership.partnershipType="TECHNOLOGY_PARTNERSHIP"}
savetypeBJoinPD(){this.crmService.partnership.partnershipType="JOINT_PRODUCT_DEVELOPMENT"}

 

  ngOnInit(): void {
    
  }
  onSubmit(signInForm:NgForm): void { console.log(signInForm.value) }
 
}
