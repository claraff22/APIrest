export class Ingredients {

    constructor(i: number, b: string, s: string){
        this.id = i;
        this.basic = b;
        this.special = s;
    }

    id: number;
    basic: string;
    special: string;
}