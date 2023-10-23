export class Client {
    private fullName: string | undefined;
    private birthdate: Date | undefined;
    private phone: number | undefined;
    private gender: string | undefined;
    private email: string | undefined;
    private username: string | undefined;
    private password: string | undefined;
    private picture: string | undefined;
    private address: string | undefined;
    private role: String | undefined;
    private resetPasswordToken: string | undefined;

    constructor(
       
    ) {
       
    }

    get _fullName(): string | undefined {
        return this.fullName;
    }

    set _fullName(value: string | undefined) {
        this.fullName = value;
    }

    get _birthdate(): Date | undefined {
        return this.birthdate;
    }

    set _birthdate(value: Date | undefined) {
        this.birthdate = value;
    }

    get _phone(): number | undefined {
        return this.phone;
    }

    set _phone(value: number | undefined) {
        this.phone = value;
    }

    get _gender(): string | undefined {
        return this.gender;
    }

    set _gender(value: string | undefined) {
        this.gender = value;
    }

    get _email(): string | undefined {
        return this.email;
    }

    set _email(value: string | undefined) {
        this.email = value;
    }

    get _username(): string | undefined {
        return this.username;
    }

    set _username(value: string | undefined) {
        this.username = value;
    }

    get _password(): string | undefined {
        return this.password;
    }

    set _password(value: string | undefined) {
        this.password = value;
    }

    get _picture(): string | undefined {
        return this.picture;
    }

    set _picture(value: string | undefined) {
        this.picture = value;
    }

    get _address(): string | undefined {
        return this.address;
    }

    set _address(value: string | undefined) {
        this.address = value;
    }

    get _role(): String | undefined {
        return this.role;
    }

    set _role(value: String | undefined) {
        this.role = value;
    }

    get _resetPasswordToken(): string | undefined {
        return this.resetPasswordToken;
    }

    set _resetPasswordToken(value: string | undefined) {
        this.resetPasswordToken = value;
    }
}
