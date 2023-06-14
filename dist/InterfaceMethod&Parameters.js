"use strict";
let userP = {
    id: 100,
    username: "Tamer",
    country: "Egypt",
    sayHello() {
        return `Hello ${this.username}`;
    },
    sayWelcome: () => {
        return `Welcome ${userP.username}`;
    },
    getDouble(n) {
        return n * 2;
    }
};
console.log(userP.id);
console.log(userP.sayHello());
console.log(userP.sayWelcome());
console.log(userP.getDouble(100));
//# sourceMappingURL=InterfaceMethod&Parameters.js.map