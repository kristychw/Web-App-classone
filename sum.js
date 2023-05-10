
// let keyword to create 2 variables num1 & num 2
// function - 2 regular and arrow =? sum
// pass values with variables & array (sparde keywords)

let num1 =5;
let num2  = 10;

function sum(a,b){
    return a+ b;
}

// arrow function
let sum1 = (a,b)=>{
    return a+ b;
}

// arrow function
let sub = (a,b) =>{
    return a - b;
}

// const and arrow function
const mul = (a,b) =>{
    return a* b;
}

console.log(sum(num1, num2));

// spread keyword
console.log(sum(...[4,3]));

console.log(sub(...[4,3]));

console.log(mul(...[4,3]));