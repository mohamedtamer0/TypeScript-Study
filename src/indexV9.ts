// Function Optional and Default Parameters


function showData(name?:string, age?:number, country?:string) {
    return `${name} - ${age} - ${country}`;
}

console.log(showData("Tamer", 40, "Egypt"));