abstract class Food {
    constructor(public title: string) { }
    abstract getCookingTime(): void;
}


class Pizza extends Food {
    constructor(title: string, public price: number) {
        super(title);
    }
    getCookingTime(): void {
        console.log("Cooking Time For Pizza Is 1 Hour");
    }

}

class Burger extends Food {
    constructor(title: string, public price: number) {
        super(title);
    }
    getCookingTime(): void {
        console.log("Cooking Time For Burger Is 1 Hour");
    }

}

let PizzaOne = new Pizza("Big Pizza", 100);

console.log(PizzaOne.title);
console.log(PizzaOne.price);
PizzaOne.getCookingTime();