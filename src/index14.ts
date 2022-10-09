// Literal Types

function compare(num1:number, num2:number)  {
    if(num1 === num2) {
        return 0;
    }
    else if(num1 > num2) {
        return 1;
    }
    else {
        return -1;
    }
}

console.log(compare(20,20));
console.log(compare(20,15));
console.log(compare(20,30));