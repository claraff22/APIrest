export class Clients {

    constructor(i: number, n: string, a: number){
        this.id = i;
        this.name = n;
        this.amount = a;
    }

    id: number;
    name: string;
    amount: number;
}

export class Ingredients {

    constructor(i: number, b: string, s: string, it: number){
        this.id = i;
        this.basic = b;
        this.special = s;
        this.id_type = it;
    }

    id: number;
    basic: string;
    special: string;
    id_type: number;
}

export class Types {

    constructor(i: number, t: string, p: number){
        this.id = i;
        this.type = t;
        this.price = p;
    }

    id: number;
    type: string;
    price: number;
}

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

export class Sales {

    constructor(i: number, ip: number, ic: number){
        this.id = i;
        this.id_costumer = ic;
        this.id_product = ip;
    }

    id: number;
    id_costumer: number;
    id_product: number;
    
}