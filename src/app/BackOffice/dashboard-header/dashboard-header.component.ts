import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ConversationRequest } from 'src/app/Model/conversation-request.model';
import { SendMessageRequest } from 'src/app/Model/send-message-request.model';
import { AuthServiceService } from 'src/app/serviceBack/auth-service.service';
import { ChatServiceService } from 'src/app/serviceBack/chat-service.service';

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.scss']
})
export class DashboardHeaderComponent implements OnInit {
  idUser :any;

  conversation: any;
  conversations:any;
  idConv:any;
sender:any;
 message2:any; 
 Users!:any[];
 cr=new ConversationRequest();
 addConvbtn=false;
shown=false;
 div! :any ;

constructor( private router: Router, private route:ActivatedRoute,public authService: AuthServiceService, private chatS: ChatServiceService){

}
  ngOnInit(): void {
    this.idUser  = sessionStorage.getItem("auth-user");
        console.log( this.idUser)

    this.cr.idactors.push(JSON.parse(this.idUser).id);

     /*   
    this.chatS.getUserConversations(JSON.parse(this.idUser).id ).subscribe((response: any )=> {
      this.conversations=response;
       console.log(response);
       
 
     });
     this.authService.getUsers().subscribe((response)=>{this.Users=response})
/*
     setInterval(() => {
      this.showmsg(this.idConv);
      this.div = document.getElementById("parent-div");
      
      
    }, 1000);  */
 }
 /*
 show(){
  console.log(this.shown);
this.shown=!this.shown
 }
 showmsg(id:any){
  this.idConv=id;
  this.chatS.getchat(id).subscribe((response: any )=> {
    this.conversation = response.messages.sort((a:any, b:any) => {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    });
    console.log(this.conversation);
    

  });
}

getsender(id:any){
  this.authService.getUserByID(id).subscribe((response: any )=> {
    this.sender=response;
    console.log(this.sender)

  });
}
UsersofConversation(id:any){
  this.cr.idactors.push(id);
  this.addConvbtn=true;



}
createConversation(){
  this.chatS.createConversation(this.cr).subscribe((response: any )=> {
    console.log (response);
    this.addConvbtn=false;
    this.cr.idactors=[];

    this.chatS.getUserConversations(this.route.snapshot.paramMap.get('idUser')).subscribe((response: any )=> {
      this.conversations=response;
       console.log(response);
       
 
     });
  }); 
}

public isButtonDisabled(userId: number): boolean {
  return this.cr.idactors.indexOf(userId) !== -1;
}
sendMessage(messageForm:NgForm){
  var sendMessageRequest= new SendMessageRequest();
  console.log(this.idUser[6]);
  sendMessageRequest.idSender=JSON.parse(this.idUser).id;
  
  sendMessageRequest.idConversation=this.idConv;
  sendMessageRequest.content=messageForm.value.message2;
if(messageForm.value.message2!=null){
  this.chatS.sendMessage(sendMessageRequest).subscribe((response: any )=> {
    this.showmsg(this.idConv);
  });
}

}*/
 signOut(){
  this.authService.signOut();
  this.router.navigate(['/vitrine'])
}
}
