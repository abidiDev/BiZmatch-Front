import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/serviceBack/auth-service.service';
import { ActivatedRoute } from '@angular/router';
import { fileHandle } from 'src/app/Model/file-handle.model';
import { DomSanitizer } from '@angular/platform-browser';
import { ChatServiceService } from 'src/app/serviceBack/chat-service.service';
import { NgForm } from '@angular/forms';
import { SendMessageRequest } from 'src/app/Model/send-message-request.model';
import { ConversationRequest } from 'src/app/Model/conversation-request.model';

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

constructor(private sanitizer:DomSanitizer, private route:ActivatedRoute,public authService: AuthServiceService, private chatS: ChatServiceService ){

  }
  ngOnInit(): void {
    this.idUser = this.route.snapshot.paramMap.get('idUser');

    this.getUserByID(this.idUser);
    console.log(this.authService.User);

  
    this.authService.getUsers().subscribe((response)=>{this.Users=response})

   

   
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
  onSubmit(updateProfileForm:any){
    this.authService.User.fullName=updateProfileForm.value.fullName;
    this.authService.User.username=updateProfileForm.value.username;
    this.authService.User.birthdate=updateProfileForm.value.birthdate;
    this.authService.User.email=updateProfileForm.value.email;
    this.authService.User.phone=updateProfileForm.value.phone;
    this.authService.User.address=updateProfileForm.value.address;
    console.log(this.authService.User);
    const actorFormDate=this.prepareFormData(this.authService.User);


    this.authService.updateUser(actorFormDate).subscribe(
      data => {
        this.authService.User=data;

        this.valid=true;
        console.log(data)

        setTimeout( () => {

          this.valid=false;
  
           }, 3000);
  
  },
      err => {
        this.error=true;
        console.log(err)

        setTimeout( () => {

          this.error=false;
  
           }, 3000);  

      }
    );


  }

  OnFileSelected(event:any){
    
    if(event.target.files){
      console.log(event);
      const file=event.target.files[0];
      
      const fileHandle: fileHandle={
        file: file,
        url: this.sanitizer.bypassSecurityTrustUrl(
           window.URL.createObjectURL(file))
      }
     this.authService.User.actorImage=fileHandle;
    }
  }
  }

