"use strict";
function addAllOne(...nums) {
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        result += nums[i];
    }
    return result;
}
console.log(addAllOne(10, 20, 30, 40, +true));
function addAllTwo(...nums) {
    let result = 0;
    nums.forEach((num) => result += num);
    return result;
}
console.log(addAllTwo(10, 20, 30, 40, +true));
//# sourceMappingURL=FunctionRestParameter.js.map