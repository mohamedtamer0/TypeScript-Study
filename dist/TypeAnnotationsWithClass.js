"use strict";
class UserAnn {
    constructor(_userName, salary) {
        this._userName = _userName;
        this.salary = salary;
        this.msg = function () {
            return `Hello ${this._userName} your salary is ${this.salary}`;
        };
    }
    sayMsg() {
        return `Hello ${this._userName} your salary is ${this.salary}`;
    }
    get userName() {
        return this._userName;
    }
    set userName(value) {
        this._userName = value;
    }
}
let userOne = new UserAnn("Tamer", 1000);
console.log(userOne.userName);
userOne.userName = "Mohamed";
console.log(userOne.userName);
console.log(userOne.msg());
console.log(userOne.sayMsg());
//# sourceMappingURL=TypeAnnotationsWithClass.js.map