const category = Symbol('category')

const userData = {
    name: {
        first_name: "Ritik",
        last_name: "Toppo"
    },
    email: "ritik@gmail.com",
    age: 21,
    isLoggedIn: false,
    [category]: "UX",
}

// console.log(userData);

userData.myFunc = function(){
    console.log("This is my function 1")
}

userData.namedFunc = function(){
    console.log(`Name of user is ${userData.name.first_name} ${userData.name.last_name}`);
    
}
// console.log(userData.namedFunc());

// console.log(Object.keys(userData));
// console.log(userData.hasOwnProperty('email'));

const course = {}
course.courseInstructor = "Ritik"
course.coursePrice = "3999"
course.coursePlatform = "Udemy, Youtube"

const {courseInstructor: inst} = course;
console.log(inst)




