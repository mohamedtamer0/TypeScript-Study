/*
💡Tips That Make You a Better Typescript Programmer💡
Understand declared type and narrowed type :
One extremely powerful typescript feature is automatic type narrowing based on control flow. This means a variable has two types associated with it at any specific point of code location: a declaration type and a narrowed type.
*/

function stringOrNumber(x: number | string) {
    if (typeof x === "string") {
        return "I am a string";
    }

    return "I am a number";
}

console.log(stringOrNumber("Tamer"));
console.log(stringOrNumber(1));