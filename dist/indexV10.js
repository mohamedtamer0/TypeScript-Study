"use strict";
function addAll(...nums) {
    let result = 0;
    nums.forEach((num) => result += num);
    return result;
}
console.log(addAll(10, 20, 30, 40, +true));
//# sourceMappingURL=indexV10.js.map