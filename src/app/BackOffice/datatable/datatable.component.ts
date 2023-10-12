import { LiveAnnouncer } from '@angular/cdk/a11y';
import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AuthServiceService } from 'src/app/serviceBack/auth-service.service';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent implements OnInit{
  Users!:any[];
  constructor(private httpClient: HttpClient, public authService: AuthServiceService) { }
  ngOnInit(): void {
    this.getAllUsers();
    }
    delete(id:any){
      console.log(id);
       this.authService.deleteUser(id).subscribe((response)=>{
        this.Users=this.getAllUsers();
      
      }) 

    }

    getAllUsers():any[]{
      this.authService.getUsers().subscribe((response)=>{this.Users=response})
      return this.Users;
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
id:any;
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