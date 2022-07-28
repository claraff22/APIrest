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