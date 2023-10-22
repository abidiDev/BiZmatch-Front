export class EntrepriseRequest {
        private nom: string | undefined;
        private description: string | undefined;
        private creationDate: Date | undefined;
        private employeeNBR: number | undefined;
        private income: number | undefined;
        private secteur: String | undefined;
        private nomS: string | undefined;
        private descriptionS: string | undefined;
        private discount: number | undefined;
        private servicequality: String | undefined;
        private ActorId: number | undefined;
    
        get _nom(): string | undefined {
            return this.nom;
        }
        set _nom(value: string | undefined) {
            this.nom = value;
        }
    
        get _description(): string | undefined {
            return this.description;
        }
        set _description(value: string | undefined) {
            this.description = value;
        }
    
        get _creationDate(): Date | undefined {
            return this.creationDate;
        }
        set _creationDate(value: Date | undefined) {
            this.creationDate = value;
        }
    
        get _employeeNBR(): number | undefined {
            return this.employeeNBR;
        }
        set _employeeNBR(value: number | undefined) {
            this.employeeNBR = value;
        }
    
        get _income(): number | undefined {
            return this.income;
        }
        set _income(value: number | undefined) {
            this.income = value;
        }
    
        get _secteur(): String | undefined {
            return this.secteur;
        }
        set _secteur(value: String | undefined) {
            this.secteur = value;
        }
    
        get _nomS(): string | undefined {
            return this.nomS;
        }
        set _nomS(value: string | undefined) {
            this.nomS = value;
        }
    
        get _descriptionS(): string | undefined {
            return this.descriptionS;
        }
        set _descriptionS(value: string | undefined) {
            this.descriptionS = value;
        }
    
        get _discount(): number | undefined {
            return this.discount;
        }
        set _discount(value: number | undefined) {
            this.discount = value;
        }
    
        get _servicequality(): String | undefined {
            return this.servicequality;
        }
        set _servicequality(value: String | undefined) {
            this.servicequality = value;
        }
    
        get _ActorId(): number | undefined {
            return this.ActorId;
        }
        set _ActorId(value: number | undefined) {
            this.ActorId = value;
        }
    
    
}

