/*
    Javascript dynamic language hai kyuki isne data typea runtime mai check kiya jata hai, naa ki compile time mai.
    Jaise hame javascript mai datatypes ko define nahi karna padta ki vo (int, bigint, float, boolean) hai 
    yeh saari chize run time mai define hoti hai. 
    Varible ka type program chalne k baad bhi badal sakta hai
*/

// Primitive data type --> String, boolean, number, null, undefined, symbol

let score = 100
let price = 100.35
let isLoggedIn = true
let str = "hello world"
let nullValue = null
let someValue = undefined
let sky = Symbol('123')
let mia = Symbol('123')
let bigintValue = 123343n

console.log(typeof bigintValue);

// Non-primitive (Referenced Variable) --> Array, object, functions

const heros = ['Iron man','Captain America', 'Hulk']
let objExample = {
    id : 23,
    name: "ritik",
}

const myfunc = function(){
    console.log("Hello World!!");
} 
z
myfunc()
console.log(typeof objExample);
console.log(typeof myfunc);
