class UserStat {
    private static created: number = 0;
    static getCount(): void {
        console.log(`${this.created} objects created`);
    }
    constructor(public username: string) {
        UserStat.created++;
    }
}

let u1 = new UserStat("Mohamed");
let u2 = new UserStat("Tamer");
let u3 = new UserStat("Eren");
UserStat.getCount();