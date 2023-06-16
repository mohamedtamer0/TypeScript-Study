"use strict";
class UserG {
    constructor(value) {
        this.value = value;
    }
    show(msg) {
        console.log(`${msg} - ${this.value}`);
    }
}
let UserGOne = new UserG("Tamer");
console.log(UserGOne.value);
UserGOne.show("Message");
let UserGTwo = new UserG(100);
console.log(UserGTwo.value);
UserGTwo.show("Message");
//# sourceMappingURL=GenericsClasses.js.map