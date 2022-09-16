
// Type Annotations With Function


let showMsg = true;

function showDetails(name: string,age: number,salary: number) {
    let test = 10;

    if(showMsg) {
        return `Hello ${name}, Age Is ${age}, Salary Is ${salary}, Test var ${test}`;
    }

    return `No Data to show`;
}

console.log(showDetails("Tamer", 40, 5000));
