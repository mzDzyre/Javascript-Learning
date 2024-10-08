// This denotes to current context

// console.log(this) // --- this shows empty object because currently we are in node env so this refers to empty object

const user = {
    username: "Ritik",
    age: 21,
    welcomeContext: function() {
        console.log(`Welcome ${this.username} and age is ${this.age}`)
        console.log(this)
    }
}

// user.welcomeContext()
// user.username = "Anshu"
// user.age = 18
// user.welcomeContext()

// function chai(){
//     let username = "Ritik"
//     console.log(this.username)
// }

// let chai = function(){
//     let username = "Ritik"
//     console.log(this.username) // this return undefined
// }

let chai = () =>{
        let username = "Ritik"
        console.log(this)    // this return --> {}
}
// chai()

const addTwo = (a, b) =>{
    return a+b;
}
console.log(addTwo(2,5))

const addThree = (...a) => (a[0]+a[2]);
console.log(addThree(2,5,10))

let arr = [1,2,45,5]
arr.forEach((val, i)=>{
    console.log(val, i);
});

