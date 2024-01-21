
//arrow function

const summarizeUser = (...args) => `Name is ${args[0]}, Age is ${args[1]} and the user has hobbies ${args[2]}`;
console.log(summarizeUser("Deric", 23, true ));

const sum = (a,b) +> a + b;
const addOne = (a) => a + 1;

console.log(sum(2,3));


// // normal function
// var name = "Deric"
// var age = 23;
// var hasHobbies = true;


// function summarizeUser(userName, userAge, userHobbies) {
//     return `Name is ${name}, age is ${userAge} and the user has hobbies ${userHobbies}`;    
// }

// console.log(summarizeUser(name,age,hasHobbies));    