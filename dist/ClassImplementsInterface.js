"use strict";
class UserImp {
    constructor(username, theme, font) {
        this.username = username;
        this.theme = theme;
        this.font = font;
    }
    save() {
        console.log('Saved');
    }
    update() {
        console.log('Updated');
    }
}
let UserOne = new UserImp("Tamer", true, "Open Sans");
console.log(UserOne.username);
console.log(UserOne.font);
UserOne.save();
UserOne.update();
//# sourceMappingURL=ClassImplementsInterface.js.map