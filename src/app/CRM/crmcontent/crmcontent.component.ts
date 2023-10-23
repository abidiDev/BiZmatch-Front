import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientR } from 'src/app/Model/client-r.model';
import { CrmServiceService } from 'src/app/serviceBack/crm-service.service';

declare var window: any;

@Component({
  selector: 'app-crmcontent',
  templateUrl: './crmcontent.component.html',
  styleUrls: ['./crmcontent.component.scss']
})
export class CRMContentComponent implements OnInit{
  formModal:any
  client: any | undefined;
  phone:any;
  email:any;
  fullname:any;
  ngOnInit(): void {
    this.formModal = new window.bootstrap.Modal(
      document.getElementById('exampleModal')
    );

    this.getAll();

  }

  openFormModal(){
    this.formModal.show();

  }
  constructor(private router: Router, private crmS: CrmServiceService){
  }

 
  getAll(){
    const ide=sessionStorage.getItem("entrepriseID")
    this.crmS.Allrelations(Number(ide)).subscribe((response: any )=> {
      this.client=response;
      console.log(this.client)

    });
  }

  changeRelationStatusTop(id:any, idclient:any, status:any){
    console.log()
    const top=new ClientR();
    top._id=id;
    const ide=sessionStorage.getItem("entrepriseID");
    top._idEntreprise=Number(ide);
    top._idclient=idclient;
    top._status=status;
    console.log(top);

    this.crmS.changeRelationStatusTop(top).subscribe((response: any )=> {
      this.getAll();


    });
  }

  changeRelationStatusDown(id:any, idclient:any, status:any){
    const donw=new ClientR();
    donw._id=id;
    const ide=sessionStorage.getItem("entrepriseID");
    donw._idEntreprise=Number(ide);
    donw._idclient=idclient;
    donw._status=status;
    console.log(donw);
        this.crmS.changeRelationStatusDown(donw).subscribe((response: any )=> {
      this.client=response;
      this.getAll();


    });
  }

  onSubmit(clientForm:any)
{
  console.log(clientForm.value)
  this.crmS.addClient(clientForm.value).subscribe(
    data => {
      this.getAll()
      setTimeout(() => {
   const client=new ClientR();
    const ide=sessionStorage.getItem("entrepriseID");
    client._idEntreprise=Number(ide);
    client._idclient=data.id;
    client._status='NEW';
    console.log(client)
      this.crmS.createRelation(client).subscribe(
        data => {
          this.getAll()
        });    }, 2000);
   
    },
  
  );

}}
