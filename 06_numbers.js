const score = 345
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString())
console.log(balance.toFixed(2))

const num = 134.7896
console.log(num.toPrecision(5))

const hundreds = 10005
console.log(hundreds.toLocaleString());
console.log(hundreds.toExponential());

// ++++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs('-23'));
console.log(Math.round(123.53));
console.log(Math.floor(123.53));
console.log(Math.ceil(123.53));

console.log(Math.random())
console.log(Math.floor(Math.random() * 10 + 1))

const min = 10
const max = 30
console.log(Math.floor(Math.random() * (max - min + 1) + min))
