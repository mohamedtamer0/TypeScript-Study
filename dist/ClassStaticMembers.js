"use strict";
class UserStat {
    static getCount() {
        console.log(`${this.created} objects created`);
    }
    constructor(username) {
        this.username = username;
        UserStat.created++;
    }
}
UserStat.created = 0;
let u1 = new UserStat("Mohamed");
let u2 = new UserStat("Tamer");
let u3 = new UserStat("Eren");
UserStat.getCount();
//# sourceMappingURL=ClassStaticMembers.js.map