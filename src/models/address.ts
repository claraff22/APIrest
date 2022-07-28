export class Address {

    constructor(i: number, s: string, h: number, c: number, ic: number){
        this.id = i;
        this.street = s;
        this.house = h;
        this.cep = c;
        this.id_client= ic;
    }

    id: number;
    street: string;
    house: number;
    cep: number;
    id_client: number;
}