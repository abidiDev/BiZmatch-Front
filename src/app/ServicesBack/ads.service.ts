import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, identity } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AdsService {

  private adtype = "http://localhost:8091/CRUD/retriveAdsBytype/";
  private adclike ="  http://localhost:8091/CRUD/addClickToAd/";
  private allads= "http://localhost:8091/CRUD/AllAds";
  private vu = " http://localhost:8091/CRUD/getClicksForAd/";

  constructor( private http: HttpClient) { }
  public type : any;
  private estate :any;
  private priceMax : any ;
  private priceMin:any;



  getAdsByType(type: any): Observable<any> {
    const url = "http://localhost:8091/CRUD/retriveAdsBytype/"+type;
    return this.http.get(url);
  }

  addClick(id: number): Observable<any> {
    const url = " http://localhost:8091/CRUD/addClickToAd/"+id;
    return this.http.post(url , null)
  }
  getAllAds(): Observable<any> {

    return this.http.get(this.allads);
  }

   getVu(id : number): Observable<any> {
    
    return this.http.get(this.vu+id);
  }
  addAd( id :any , ad :any): Observable<any> {
    const url = "http://localhost:8091/CRUD/addAdsAndAsignToRealestate/"+id;
    return this.http.post(url , ad)
  }
  filterByPrice(priceMax : any ,priceMin:any ): Observable<any> {
    const url = "http://localhost:8091/CRUD/getAdsRealestateByPrice/"+priceMin+"/"+priceMax;
    return this.http.get(url);
  }
  addRating( id :any , rating :any): Observable<any> {
    const url = "http://localhost:8091/CRUD/AddRatingAndasginToAds/"+id;
    return this.http.post(url , rating)
  }


}
