"use strict";
function logging(msg) {
    console.log(msg);
    return;
}
console.log(logging("Iam A Message"));
const fail = (msg) => {
    throw new Error(msg);
};
function alwaysLog(name) {
    while (true) {
        console.log(name);
    }
}
alwaysLog("Tamer");
//# sourceMappingURL=DataType-Void&Never.js.map