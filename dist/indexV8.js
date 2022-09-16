"use strict";
let showMsg = true;
function showDetails(name, age, salary) {
    let test = 10;
    if (showMsg) {
        return `Hello ${name}, Age Is ${age}, Salary Is ${salary}, Test var ${test}`;
    }
    return `No Data to show`;
}
console.log(showDetails("Tamer", 40, 5000));
//# sourceMappingURL=indexV8.js.map