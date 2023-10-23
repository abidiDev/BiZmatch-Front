export class ClientR {
    private id: number | undefined;
    private idEntreprise: number | undefined;
    private idclient: number | undefined;
    private status: String | undefined;

    constructor(
       
    ) {
        
    }

    get _id(): number | undefined {
        return this.id;
    }

    set _id(value: number | undefined) {
        this.id = value;
    }

    get _idEntreprise(): number | undefined {
        return this.idEntreprise;
    }

    set _idEntreprise(value: number | undefined) {
        this.idEntreprise = value;
    }

    get _idclient(): number | undefined {
        return this.idclient;
    }

    set _idclient(value: number | undefined) {
        this.idclient = value;
    }

    get _status(): String | undefined {
        return this.status;
    }

    set _status(value: String | undefined) {
        this.status = value;
    }
}
