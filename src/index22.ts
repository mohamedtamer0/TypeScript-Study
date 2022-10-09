// Interface Declaration


interface User {
    id?: number,
    readonly username: string,
    country: string
}

let user: User = {
    id: 100,
    username: "Tamer",
    country: "Egypt"
}

user.country = "Syria";
console.log(user);

function getData(data: User) {
    console.log(`Id is ${data.id}`);
    console.log(`Username is ${data.username}`);
    console.log(`Country is ${data.country}`);
}

getData({ id: 200, username: "Mohamed", country: "KSA" });