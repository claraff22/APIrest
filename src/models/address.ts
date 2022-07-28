export class Address {

    constructor(i: number, s: string, h: number, c: number){
        this.id = i;
        this.street = s;
        this.house = h;
        this.cep = c
    }

    id: number;
    street: string;
    house: number;
    cep: number;
}