export class shoppingItem {
    name: String;
    amount: number;
    price: number;

    constructor(inName: String, inAmount: number, inPrice: number) {
        this.name = inName;
        this.amount = inAmount, this.price = inPrice;
    }
}