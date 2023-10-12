import { Ad } from "./Model/ad.model";
import { House } from "./Model/house.model";
import { Socialservices } from "./Model/socialservices.model";

export class RErequest {
    
    private type: any;
    private house: House | undefined;
    private localisation: Location| undefined;
    private ads: Ad | undefined;
    private socialservices: Socialservices[] | undefined;
    private sharedLocation: any[] | undefined;
    
    get _type(): any {
        return this.type;
    }

    set _type(value: any) {
        this.type = value;
    }

    get _house(): any {
        return this.house;
    }

    set _house(value: any) {
        this.house = value;
    }

    get _localisation(): any {
        return this.localisation;
    }

    set _localisation(value: any) {
        this.localisation = value;
    }

    get _ads(): any {
        return this.ads;
    }

    set _ads(value: any) {
        this.ads = value;
    }

    get _socialservices(): any[] | undefined {
        return this.socialservices;
    }

    set _socialservices(value: any[] | undefined) {
        this.socialservices = value;
    }

    get _sharedLocation(): any[] | undefined {
        return this.sharedLocation;
    }

    set _sharedLocation(value: any[] | undefined) {
        this.sharedLocation = value;
    }
}
