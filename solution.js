//Declaring Functions
//1. Multiply - Function Declaration
//  Create a function that multiples a number by another number.

function multiply2(a,b){
    return a*b;
}

// 2. Multiply - Function Declarations as Values
//    Rework the syntax of the above function so that the function declaration is stored as a value.

const multiplyb = function (a,b){
    return a*b;
}

//3. Multiply - Arrow Function
//    Rework the syntax of the function declaration so that it uses the arrow function shorthand.

const arrowMultiply2 = (a,b) => {
    return a*b;
}


// 4. Declarations
// Create functions (using all three declarations) to check the remainder of division given two numbers.

function modulo1(a,b){
    return a%b;
}
const modulo2 = function (a,b) {
    return a%b;
}

const modulo3 = (a,b) => {
 return a%b;
}

// console.log(multiply2(6,4),arrowMultiply2(6,4),multiplyb(6,4),modulo1(6,4),modulo2(6,4),modulo3(6,4));
