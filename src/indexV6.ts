
// Type Annotations with arrays

let a : string | number | boolean = "Tamer";

a = "A"
a = 100;
a = true;

let myFriends:string[] = ["Mohamed","Tamer","Ahmed"];

for (let i = 0; i < myFriends.length; i++) {
    console.log(myFriends[i].repeat(3))
}