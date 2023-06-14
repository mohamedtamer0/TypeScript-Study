class UserAnn {
    msg: () => string;
    constructor(private _userName: string, protected salary: number) {
        this.msg = function () {
            return `Hello ${this._userName} your salary is ${this.salary}`;
        }
    }

    sayMsg() {
        return `Hello ${this._userName} your salary is ${this.salary}`;
    }
    get userName(): string {
        return this._userName;
    }

    set userName(value: string) {
        this._userName = value;
    }
}

let userOne = new UserAnn("Tamer", 1000);

console.log(userOne.userName);
userOne.userName = "Mohamed"
console.log(userOne.userName);
// console.log(userOne.salary);
console.log(userOne.msg());
console.log(userOne.sayMsg());