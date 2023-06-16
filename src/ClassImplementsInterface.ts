interface SettingsImp {
    theme: boolean;
    font: string;
    save(): void;
}

class UserImp implements SettingsImp {
    constructor(public username: string, public theme: boolean, public font: string) { }
    save(): void {
        console.log('Saved');
    }

    update(): void {
        console.log('Updated');
    }
}

let UserOne = new UserImp("Tamer", true, "Open Sans");

console.log(UserOne.username);
console.log(UserOne.font);

UserOne.save();
UserOne.update();