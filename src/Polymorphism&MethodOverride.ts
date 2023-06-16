class Player {
    constructor(public name: string) { }
    attack(): void {
        console.log("Attacking Now");
    }
}


class Amazon extends Player {
    constructor(public name: string, public spears: number) {
        super(name);
    }

    attack(): void {
        console.log("Attacking With Spear");
        this.spears -= 1;
    }
}

class Barbarian extends Player {
    constructor(public name: string, public axeDurabiblity: number) {
        super(name);
    }

    attack(): void {
        super.attack();
        console.log("Attacking With Axe");
        this.axeDurabiblity -= 1;
    }
}


let barOne = new Barbarian("Tamer", 100);
console.log(barOne.name);
barOne.attack();
console.log(barOne.axeDurabiblity);