//literal and constructor
let obj1 = {}; // object literal syntax
let obj2 = new Object(); // object constructor syntax
//console.log('Object1:', obj1, typeof obj1);

const mySym = Symbol('key1'); // creating symbol,symbol is a primitive datatype which is unique and immutable
let person = {
name: "John",
age: 30,
city: "New York",
email : "john@gmail.com",
getDetails: function() {
    return `${this.name} is ${this.age} years old and lives in ${this.city}. Email: ${this.email}`;
},
[mySym]: "value1" // symbol as key
};
//console.log('Person Object:', person.getDetails(), person[mySym]);

//Destructuring
let {name, age, city, email} = person; // object destructuring
console.log('Destructured:', name, age, city, email);
//Adding new property to object
person.country = "USA";
console.log('Updated Person Object:', person);

//Deleting property from object
delete person.age;
console.log('After Deleting Age:', person);
//Iterating over object properties
for (let key in person) {
    if (person.hasOwnProperty(key)) { // to check if the property is not inherited
        console.log(`${key}: ${person[key]}`);
    }
}