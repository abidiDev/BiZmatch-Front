export class ResetRequest {
    private mail: any;
    private token: any;
    private password: any;


    set _mail(value: any) {
        this.mail = value;
    }
    set _token(value: any) {
        this.token = value;
    }

    set _password(value: any) {
        this.password = value;
    }
}
