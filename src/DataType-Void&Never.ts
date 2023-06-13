/*
Data Type:
- Void : 
-- Function That will return nothing
-- Function In Js that not return a value will show undefined
-- undefined is not void
- Never :
-- return type never returns
-- the function doesn't have a normal completion
-- it throw an error or never finishes reunning at all "Infinite Loop"
*/

function logging(msg: String): void {
    console.log(msg); // undefined
    return;
}

console.log(logging("Iam A Message"));

const fail = (msg: string) => {
    throw new Error(msg);
    //return;
}

function alwaysLog(name: String): never {
    while (true) {
        console.log(name);
    }
}

alwaysLog("Tamer"); // "Infinite Loop"
//console.log("Test");