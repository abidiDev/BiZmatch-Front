import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../serviceBack/auth-service.service';
import { TokenStorageService } from '../serviceBack/token-storage.service';
import { AuthguardGuard } from '../shared/authguard.guard';

@Component({
  selector: 'app-list-reclamation',
  templateUrl: './list-reclamation.component.html',
  styleUrls: ['./list-reclamation.component.scss']
})
export class ListReclamationComponent  implements OnInit {
  
  
  constructor(public _shared:AuthguardGuard,public shraed:AuthServiceService,private tokenStorage: TokenStorageService){
    
  }
  
  userId: any=this.tokenStorage.getUser().id;
   reclamations: any;
  
  ngOnInit(): void {

    this._shared.list(this.userId)
  .subscribe(
    (res: any[]) => {
      console.log(res);
      this.reclamations = res;
      
      
       
    },
    err => {
      console.log(err);
      
      
      
      // Gérez les erreurs ici
    }
    
  );

  
  
  }

 





  

}
