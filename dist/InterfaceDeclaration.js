"use strict";
let user = {
    id: 100,
    username: "Tamer",
    country: "Egypt"
};
user.country = "Syria";
console.log(user);
function getData(data) {
    console.log(`Id is ${data.id}`);
    console.log(`Username is ${data.username}`);
    console.log(`Country is ${data.country}`);
}
getData({ id: 200, username: "Mohamed", country: "KSA" });
//# sourceMappingURL=InterfaceDeclaration.js.map