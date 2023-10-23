import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PartnershipRe } from '../PartnershipRe.model';

@Injectable({
  providedIn: 'root'
})

export class CrmServiceService {
  private entrepriseUrl = "http://localhost:6543/entreprise/";
  partnership:any;
  
  constructor(private http: HttpClient) { 
    this.partnership=new PartnershipRe();
  }
  AllENtreprise(): Observable<any> {
    const url = "http://localhost:6543/entreprise/AllEnytreprises";

    return this.http.get(url);

  }
  getEntrepriseById(id : number): Observable<any> {
    const url = "http://localhost:6543/entreprise/ById/"+id;
    console.log(url)

    return this.http.get<any>(url);
  }
  getEntrepriseByUser(id : number): Observable<any> {
    const url = "http://localhost:6543/entreprise/EntrepriseByUser/"+id;
    console.log(url)

    return this.http.get<any>(url);
  }
  getPartnershipByEntreprise(id : number): Observable<any> {
    const url = "http://localhost:6543/entreprise/getPartnership/"+id;
    console.log(url)

    return this.http.get<any>(url);
  }

  deletePartnership(id1 : number, id2:number): Observable<any> {
    const url = "http://localhost:6543/entreprise/deletePartnership/"+id1+"/"+id2;

    return this.http.delete<any>(url);
  }
  acceptPartnership(id1 : number, id2:number): Observable<any> {
    const url = "http://localhost:6543/entreprise/acceptPartnership/"+id1+"/"+id2;

    return this.http.get<any>(url);
  }
  addPartnership( ): Observable<any> {
    const url = "http://localhost:6543/entreprise/createPartnership/";
    return this.http.post(url , this.partnership)
  }
  addPartnershipRequest(partnershiR:any ): Observable<any> {
    const url = "http://localhost:6060/api/auth/partnershipRequest/";
    return this.http.post(url , partnershiR)
  }
  
  createEntreprise(entrepriseR:any ): Observable<any> {
    const url = "http://localhost:6543/entreprise/createEntreprise/";
    return this.http.post(url , entrepriseR)
  }
  /*************************clients************************** */

  Allrelations(ide : number): Observable<any> {
    const url = "http://localhost:6544/crm/relations/"+ide;

    return this.http.get(url);

  }
  changeRelationStatusTop( upR : any): Observable<any> {
    const url = "http://localhost:6544/crm/changeRelationStatusTop";
    return this.http.post(url , upR)
  }

  changeRelationStatusDown(downR:any ): Observable<any> {
    const url = "http://localhost:6544/crm/changeRelationStatusDown/";
    return this.http.post(url , downR)
  }

  createRelation(relation:any ): Observable<any> {
    const url = "http://localhost:6544/crm/createRelation";
    return this.http.post(url , relation)
  }

  addClient(client:any ): Observable<any> {
    const url = "http://localhost:6060/api/auth/addClient";
    return this.http.post(url , client)
  }
}




