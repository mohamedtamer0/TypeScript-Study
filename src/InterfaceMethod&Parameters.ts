interface UserP {
    id: number,
    readonly username: string,
    country: string,
    sayHello(): string,
    sayWelcome: () => string,
    getDouble(num: number): number
}

let userP: UserP = {
    id: 100,
    username: "Tamer",
    country: "Egypt",
    sayHello() {
        return `Hello ${this.username}`;
    },
    sayWelcome: () => {
        return `Welcome ${userP.username}`
    },
    getDouble(n) {
        return n * 2;
    }
}

console.log(userP.id);
console.log(userP.sayHello());
console.log(userP.sayWelcome());
console.log(userP.getDouble(100));