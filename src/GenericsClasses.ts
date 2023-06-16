class UserG<T = string> {
    constructor(public value: T) { }
    show(msg: T): void {
        console.log(`${msg} - ${this.value}`);
    }
}


let UserGOne = new UserG<string>("Tamer");
console.log(UserGOne.value);
UserGOne.show("Message");


let UserGTwo = new UserG<number | string>(100);
console.log(UserGTwo.value);
UserGTwo.show("Message");