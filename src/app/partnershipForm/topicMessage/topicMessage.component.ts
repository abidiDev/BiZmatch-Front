import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PartnershipRequest } from 'src/app/Model/partnership-request';
import { PartnershipRe } from 'src/app/PartnershipRe.model';
import { CrmServiceService } from 'src/app/serviceBack/crm-service.service';


@Component({
  selector: 'app-topicMessage',
  templateUrl: './topicMessage.component.html',
  styleUrls: ['./topicMessage.component.scss']
})
export class topicMessageComponent implements OnInit {


  message: string = ''; 
  
  constructor(public crmService: CrmServiceService, private router: Router){}


  ngOnInit(): void {
    
  }

  addPartnershipRequest(){
    const pr=new PartnershipRequest();
    pr._content=this.message;
    pr._recipientID=sessionStorage.getItem("user2ID");
    console.log(pr._recipientID)
    this.crmService.addPartnershipRequest(pr).subscribe((response: any )=> {
      this.router.navigate(['/MainReFormComponent/meetingComponent']); // Replace 'other-component' with the actual route path you want to navigate to.
    
    
    });
  }
  
}
