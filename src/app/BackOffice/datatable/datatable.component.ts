import { LiveAnnouncer } from '@angular/cdk/a11y';
import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { AuthServiceService } from 'src/app/serviceBack/auth-service.service';
import { CrmServiceService } from 'src/app/serviceBack/crm-service.service';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent implements OnInit{
  Partnership!:any[];
  Users!:any[];
  id:any;
  idE:any;
  constructor(private httpClient: HttpClient, public crmService: CrmServiceService, public authService: AuthServiceService) { }
 

    async ngOnInit(): Promise<void> {
      console.log(this.authService.User);
      this.id = this.authService.User.id;
      console.log(this.id);
  
      this.Partnership = await this.getPartnerships(this.id);
  
      console.log(this.Partnership[0].id);
    }
  
    getPartnerships(id: any): Promise<any> {
      return new Promise((resolve, reject) => {
        this.crmService.getEntrepriseByUser(id).subscribe((response: any) => {
          this.idE=response[0].id;
  
          this.crmService.getPartnershipByEntreprise(response[0].id).subscribe((partnershipResponse: any) => {
            this.Partnership = partnershipResponse;
            console.log(this.Partnership);
            resolve(this.Partnership); // Resolve the Promise with the data
          }, error => {
            reject(error); // Reject the Promise in case of an error
          });
        });
      });
    }

    getBackgroundColor(Pindicator: any, status:any): string {
      // Define your conditions and return the desired background color
      console.log(Pindicator,status)
      if (Pindicator === "Requested" && status=="NEW") {
        return 'yellow-bg'; // Change to your preferred color
      } else if (Pindicator === "ToProvide" && status=="NEW") {

        return 'green-bg'; // Change to your preferred color
      } else {

        return ''; // Default background color
      }
    }
  
  
    async delete(id:any):Promise<void> {
      
       this.crmService.deletePartnership(id,this.idE).subscribe((response)=>{
      
      }) 
      this.Partnership = await this.getPartnerships(this.id);

    }
  
    async accept(id:any):Promise<void> {
      console.log(id)
      console.log(this.idE)
       this.crmService.acceptPartnership(id,this.idE).subscribe((response)=>{
      
      }) 
      this.Partnership = await this.getPartnerships(this.id);

    }
  
  
  uploadedImage!: File;
dbImage: any;
postResponse: any;
  successResponse!: string;
image: any;

public onImageUpload(event:any) {
  this.uploadedImage = event.target.files[0];
}



imageUploadAction() {
  const imageFormData = new FormData();
  imageFormData.append('image', this.uploadedImage, this.uploadedImage.name);


  this.httpClient.post('http://localhost:8080/upload/image/', imageFormData, { observe: 'response' })
    .subscribe((response) => {
      if (response.status === 200) {
        this.postResponse = response;
        this.successResponse = this.postResponse.body.message;
      } else {
        this.successResponse = 'Image not uploaded due to some error!';
      }
    }
    );
  }

viewImage() {
  this.httpClient.get('http://localhost:8080/get/image/info/' + this.image)
    .subscribe(
      res => {
        this.postResponse = res;
        this.dbImage = 'data:image/jpeg;base64,' + this.postResponse.image;
      }
    );
}


/**************************************update*********************************************/
fullName:any;
email:any;
phone:any;
userToUpdate:any
valid=false;
clicked=false;

clickedf(){
this.clicked=true;
}

onSubmit(updateProfileForm:NgForm){
  console.log(updateProfileForm.value)
  this.authService.getUserByID(updateProfileForm.value.id).subscribe((response: any )=> {
  this.userToUpdate=response;
  this.userToUpdate.fullName=updateProfileForm.value.fullName;
  this.userToUpdate.email=updateProfileForm.value.email;
  this.userToUpdate.phone=updateProfileForm.value.phone;

this.authService.update2User(this.userToUpdate).subscribe((response:any)=>{
  this.valid=true;

  setTimeout( () => {

    this.valid=false;

     }, 3000);
});
  });
  this.clicked=true;

}



}