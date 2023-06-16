interface SettingsImp {
    theme: boolean;
    font?: string;
    save(): void;
}

class UserImp implements SettingsImp {
    constructor(public theme: boolean) { }
    save(): void {
        console.log('Saved');
    }
}