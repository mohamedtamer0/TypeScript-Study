function returnType<T>(value: T): T {
    return value;
}

console.log(returnType<number>(100));
console.log(returnType<string>("Tamer"));
console.log(returnType<boolean>(true));
console.log(returnType<number[]>([1, 2, 3, 4, 5]));


const returnTypeArrowSyntax = <T>(val: T): T => val;

console.log(returnTypeArrowSyntax<number>(100));
console.log(returnTypeArrowSyntax<string>("Tamer"));
console.log(returnTypeArrowSyntax<boolean>(true));
console.log(returnTypeArrowSyntax<number[]>([1, 2, 3, 4, 5]));