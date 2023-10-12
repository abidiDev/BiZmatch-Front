import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import{RErequest} from "../rerequest.model"
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})

export class ServiceRealestateService {
 
  private baseUrl = "http://localhost:8091/CRUD/getrealestate/1";
  private estateUrl="http://localhost:8091/CRUD/getReal_EstateById/";
  private addUrl="http://localhost:8091/CRUD/AddRealestateAdvanced";
  private getAll="http://localhost:8091/CRUD/getAllReal_Estate";

  private urlDelete="http://localhost:8091/CRUD/deleteRealEstate" ;
  constructor( private http: HttpClient) { }

   realestateRequest:RErequest  = new RErequest();

  getEstate(): Observable<any[]>{
    return this.http.get<any[]>(`${this.baseUrl}`);
  }
  createEstate(estate:any): Observable<any> {
    return this.http.post(this.addUrl,estate, httpOptions);
  }

  getByIdEstate(id: number): Observable<RErequest> {
    return this.http.get<RErequest>(`${this.estateUrl}/`+id);
    
  }
  GetAll(): Observable<any> {
    return this.http.get(this.getAll);
  }
  
 


  deleteEstate(id : any): Observable<any>{
    
     return this.http.delete(`${this.urlDelete}/${id}`);

  }
 
  getEstateByAd(id : number): Observable<any> {
    const url = "http://localhost:8091/CRUD/ad/"+id;

    return this.http.get(url);
  }
}
