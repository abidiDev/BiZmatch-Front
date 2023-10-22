import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/serviceBack/auth-service.service';
import { ActivatedRoute } from '@angular/router';
import { fileHandle } from 'src/app/Model/file-handle.model';
import { DomSanitizer } from '@angular/platform-browser';
import { ChatServiceService } from 'src/app/serviceBack/chat-service.service';
import { NgForm } from '@angular/forms';
import { SendMessageRequest } from 'src/app/Model/send-message-request.model';
import { ConversationRequest } from 'src/app/Model/conversation-request.model';
import { EntrepriseRequest } from 'src/app/Model/entreprise-request.model';
import { CrmServiceService } from 'src/app/serviceBack/crm-service.service';

@Component({
  selector: 'app-main-dashboard-profil',
  templateUrl: './main-dashboard-profil.component.html',
  styleUrls: ['./main-dashboard-profil.component.scss']
})
export class MainDashboardProfilComponent implements OnInit {
  id:any;
  idUser:any;
  fullName !:any;
  username:any;
  birthdate:any;
  email:any;
  phone:any;
  address:any;

  valid=false;
  error=false;

  conversation: any;
  conversations:any;
  idConv:any;
sender:any;
 message2:any; 
 Users!:any[];
 cr=new ConversationRequest();
 addConvbtn=false;
 entrepriseR:EntrepriseRequest | undefined;
nom: any;
description: any;
creationDate: any;
employeeNBR: any;
income: any;
secteur: any;
nomS: any;
descriptionS:any;
discount:any;
servicequality:any;

constructor(private sanitizer:DomSanitizer, private route:ActivatedRoute,public authService: AuthServiceService, private crmService: CrmServiceService ){

  }
  ngOnInit(): void {
    this.idUser = sessionStorage.getItem("userID");
    console.log(sessionStorage.getItem("userID"))

    this.getUserByID(this.idUser );
    console.log(this.authService.User);

  
    //this.authService.getUsers().subscribe((response)=>{this.Users=response})

   

   
  }


  getUserByID(id : number){
    this.authService.getUserByID(id).subscribe((response: any )=> {
      console.log(response);
      this.authService.User=response;
      this.id=this.authService.User.id;
      this.fullName=this.authService.User.fullName;
      this.username=this.authService.User.username;
      this.birthdate=this.authService.User.birthdate;
      this.email=this.authService.User.email;
      console.log(this.email);
      this.phone=this.authService.User.phone;
      this.address=this.authService.User.address;      ;
      console.log(this.authService.User)
    });
  }
  prepareFormData(actor:any):FormData{
    const formData=new FormData();
    formData.append(
      'actor',
      new Blob([JSON.stringify(actor)],{type:'application/json'})
    );
    formData.append(
      'imageFile',
      actor.actorImage.file,
      actor.actorImage.file.name
      
    ); 
    return formData;
  }
  onSubmit(){
    this.entrepriseR=new EntrepriseRequest();
    const actorId=sessionStorage.getItem("userID");
    
    this.entrepriseR._ActorId=Number(actorId);
    this.entrepriseR._nom=this.nom;
    this.entrepriseR._description=this.description;
    this.entrepriseR._creationDate=this.creationDate;
    this.entrepriseR._employeeNBR=this.employeeNBR;
    this.entrepriseR._employeeNBR=this.income;
    this.entrepriseR._secteur=this.secteur;
    this.entrepriseR._nomS=this.nomS;
    this.entrepriseR._descriptionS=this.descriptionS;
    this.entrepriseR._discount=this.discount;
    this.entrepriseR._servicequality=this.servicequality;
    this.crmService.createEntreprise(this.entrepriseR).subscribe(
      data => {this.valid=true;
        console.log(data);}
      );
  



  }

 
  }

