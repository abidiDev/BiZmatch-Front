import { Component,OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthguardGuard } from '../shared/authguard.guard';
import { SigninFormComponent } from '../auth/signin-form/signin-form.component';
import { AuthServiceService } from '../serviceBack/auth-service.service';
import { TokenStorageService } from 'src/app/serviceBack/token-storage.service';


@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.scss']
})
export class ReclamationComponent implements OnInit  {
  
  reclamationEnvoyee: boolean = false;
  
  
  ngOnInit() {

    

    // La logique que vous souhaitez exécuter lors de l'initialisation du composant
  }
  constructor(public _shared:AuthguardGuard,public shraed:AuthServiceService,private tokenStorage: TokenStorageService ){}
    
  userId: any=this.tokenStorage.getUser().id;
  captcha:String ="ok";
  captchaValid: boolean = false;
  
  reclamation = {
    subject: '',
    description: '',
    iduser:this.userId
  
 }
 resolved() {
  this.captchaValid = true;
}

 onSubmit(reclamationForm: NgForm) {
  
  
  this._shared.addrec(this.reclamation)
  .subscribe(
    res=>{
      console.log(res);
      reclamationForm.resetForm();
      this.reclamationEnvoyee = true;
     
    },
    err=>{console.log(err);
      reclamationForm.resetForm();
      this.reclamationEnvoyee = true;
    }
    
  );
 
}







  
}
