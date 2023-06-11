// Type Annotations With Anonymous And Arrow Function


const add2 = function (num1: number, num2: number): number {
    return num1 + num2;
}

console.log(add2(10, 20))

const addWithArrow = (num1: number, num2: number): number => num1 + num2;

console.log(addWithArrow(10, 20));