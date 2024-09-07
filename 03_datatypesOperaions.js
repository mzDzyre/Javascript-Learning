let score = "33"

console.log(typeof score);

let scoreInNumber = Number(score)
console.log(typeof scoreInNumber, "and", scoreInNumber)

// Investigation 2

let value = "33lw"
console.log(typeof value)
let valueInNumber = Number(value)
console.log(typeof valueInNumber, "and", valueInNumber)  // Returns valueInNumber is NaN but type is Number

// Investigation 3 
let nullValue = undefined
let nullValueNumber = Number(nullValue)
console.log(typeof nullValue, "and", nullValueNumber)

// According to Investigation Study after typecasting some values in number
/*
    "33" --> type is Number and value is 33
    "33la" --> type is Number and value is NaN
    null --> type is object and value is 0
    undefined --> type is undefined and value is NaN
    true/false --> type is number and value is 1/0
*/

// Investigation 4
let str = ""
console.log(Boolean(str)) // returns false because the string is empty
console.log(Boolean(-1));
console.log(Boolean(0));
console.log(Boolean(6));   
/*
    According to the values only if we convert 0 to Boolean then it returns false 
    otherwise all negative number and all positive numbers returns true
*/

