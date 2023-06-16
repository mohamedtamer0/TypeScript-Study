"use strict";
class Player {
    constructor(name) {
        this.name = name;
    }
    attack() {
        console.log("Attacking Now");
    }
}
class Amazon extends Player {
    constructor(name, spears) {
        super(name);
        this.name = name;
        this.spears = spears;
    }
    attack() {
        console.log("Attacking With Spear");
        this.spears -= 1;
    }
}
class Barbarian extends Player {
    constructor(name, axeDurabiblity) {
        super(name);
        this.name = name;
        this.axeDurabiblity = axeDurabiblity;
    }
    attack() {
        super.attack();
        console.log("Attacking With Axe");
        this.axeDurabiblity -= 1;
    }
}
let barOne = new Barbarian("Tamer", 100);
console.log(barOne.name);
barOne.attack();
console.log(barOne.axeDurabiblity);
//# sourceMappingURL=Polymorphism&MethodOverride.js.map