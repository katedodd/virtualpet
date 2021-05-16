export class Food {
    constructor(name, price, value) {
        this.name = name;
        this.price = price;
        this.value = value;
    }

    getFoodValue() {
        return this.value;
    }

    getFoodPrice() {
        return this.price;
    }
}
