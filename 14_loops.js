// const price = [100, 200, 300]

// const total = price.reduce((acc, val) => {
//     console.log(`acc : ${acc} and val : ${val}`);

//     return acc+val;
// }, 0)

// console.log(total);

const shoppingCart = [
    {
        itemName: "javascript Course",
        price: 3999
    },
    {
        itemName: "Python Course",
        price: 999
    },
    {
        itemName: "Java Course",
        price: 2999
    },
    {
        itemName: "App Development Course",
        price: 4999
    },
    {
        itemName: "Data Science Course",
        price: 13999
    },
]

// Add the all prices of Shopping cart

// using reduce
let totalPrice = shoppingCart.reduce((acc, val) => {
    return acc + val.price;
}, 0)
// console.log(`Total Bill : ${totalPrice} Rs`);

totalPrice = 0;
shoppingCart.forEach((val) => {
    totalPrice+=val.price;
})
// console.log(`Total Bill : ${totalPrice} Rs`);

let sum = 0;
totalPrice = shoppingCart.map((val)=>{
    sum += val.price
    return sum
})
console.log(`Total Bill : ${totalPrice} Rs`);


