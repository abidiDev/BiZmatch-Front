import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../serviceBack/token-storage.service';
import { AuthguardGuard } from '../shared/authguard.guard';

@Component({
  selector: 'app-gestion-reclamation',
  templateUrl: './gestion-reclamation.component.html',
  styleUrls: ['./gestion-reclamation.component.scss']
})
export class GestionReclamationComponent implements OnInit {

  constructor(private tokenStorage: TokenStorageService,public _shared:AuthguardGuard){}
  ngOnInit(): void {
    this._shared.rec()
    .subscribe(
      (res: any[]) => {
        console.log(res);
        this.reclamations = res;
        console.log(this.reclamations);
        
         
      },
      err => {
        console.log(err);
        
        
        
        // Gérez les erreurs ici
      }
      
    );
  
  }
  userId: any=this.tokenStorage.getUser().id;
  reclamations: any;
  


  update(reclamation:any){
    
    reclamation.statut = !reclamation.statut;
    this._shared.updaterec(reclamation.id,reclamation)
    .subscribe(
      res => {
        console.log(res);
      
        
         
      },
      err => {
        console.log(err);
        
        
        
        // Gérez les erreurs ici
      }
      
    );


  }

}
