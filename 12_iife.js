// IIFE - Immediately Invoked Function Expression

// Jo funtion immediately invoke ho jaye -- global scope k pollution se problem hoti hai kai baar matlab jo bhi global scope k variable hai uske effect ko hatane k liye iife use karte hai

console.log("hello world!");

(function chai() {
    console.log("DATABASE CONNECTED")
})();

((name) => {
    console.log(`The name is ${name}`);
})("Ritik")