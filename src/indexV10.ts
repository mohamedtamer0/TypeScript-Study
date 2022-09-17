// Function Rest Parameter

function addAll(...nums:number[]):number {
    let result = 0;

    // for (let index = 0; index < addAll.length; index++) {
    //     result += nums[index]
    // }

    nums.forEach((num) => result += num);

    return result;
}

console.log(addAll(10, 20,30 ,40, +true));