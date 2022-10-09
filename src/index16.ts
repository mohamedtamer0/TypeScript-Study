// Void 7 Never

function logging(msg: String): void {
    console.log(msg);
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

alwaysLog("Tamer");
//console.log("Test");