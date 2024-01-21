const person = {
    name: "Deric",
    age: 23,
    hasHobbies: true,
    greet() { 
    console.log(`Hello ${this.name} `)
    },
};


person.greet();

const hobbies = ["Sports", "Cooking"];

for ( let hobby of hobbies) {
    console.log(hobby);
}

newHobbies = hobbies.map( hobby => {
    return 'Hobby' + hobby;
});

console.log(newHobbies);