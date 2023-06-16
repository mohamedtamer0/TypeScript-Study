"use strict";
class Food {
    constructor(title) {
        this.title = title;
    }
}
class Pizza extends Food {
    constructor(title, price) {
        super(title);
        this.price = price;
    }
    getCookingTime() {
        console.log("Cooking Time For Pizza Is 1 Hour");
    }
}
class Burger extends Food {
    constructor(title, price) {
        super(title);
        this.price = price;
    }
    getCookingTime() {
        console.log("Cooking Time For Burger Is 1 Hour");
    }
}
let PizzaOne = new Pizza("Big Pizza", 100);
console.log(PizzaOne.title);
console.log(PizzaOne.price);
PizzaOne.getCookingTime();
//# sourceMappingURL=AbstractClasses&Members.js.map