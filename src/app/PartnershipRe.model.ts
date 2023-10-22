import { House } from "./Model/house.model";
import { Socialservices } from "./Model/socialservices.model";

export class PartnershipRe {
    
    private idEntreprise1: any;
    private idEntreprise2: any;
    private partnershipType: Location| undefined;
   
    
    get _idEntreprise1(): any {
        return this.idEntreprise1;
    }

    set _idEntreprise1(value: any) {
        this.idEntreprise1 = value;
    }

    get _idEntreprise2(): any {
        return this.idEntreprise2;
    }

    set _idEntreprise2(value: any) {
        this.idEntreprise2 = value;
    }

    get _lpartnershipType(): any {
        return this.partnershipType;
    }

    set _partnershipType(value: any) {
        this.partnershipType = value;
    }

  
}
