export class PartnershipRequest {
    private recipientID: any| undefined;
    private content: any| undefined;
   
    
    get _recipientID(): any {
        return this.recipientID;
    }
    set _recipientID(value: any) {
        this.recipientID = value;
    }

    get _content(): any {
        return this.content;
    }
    set _content(value: any) {
        this.content = value;
    }
}
