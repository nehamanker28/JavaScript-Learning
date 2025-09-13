//Datatypes

//primitive datatypes and non-primitive datatypes
//primitive datatypes are immutable and call by value 
//call  by value means when we assign a primitive datatype to another variable, 
//a copy of the value is made and assigned to the new variable.we can change the value of the new variable without affecting the original variable

//primitive datatypes are
//string, number, bigint, boolean, undefined, null, symbol

//non-primitive datatypes are mutable and call by reference
//call by reference means when we assign a non-primitive datatype to another variable,
//a reference to the original variable is made and assigned to the new variable.
//we can change the value of the new variable and it will affect the original variable

//  non-primitive datatypes are
// object, array, function

//javascript is a dynamically typed language because we don't have to specify the datatype of a variable when we declare it

//array is a special type of object
//let array = [1, 2, 3, 4, 5]
//let array = new Array(1, 2, 3, 4, 5)
//console.log('Array:', array, typeof array);

//object is a collection of key-value pairs
//let obj = {
//    name: 'John Doe',
//    age: 30,
//    city: 'New York'
// }
//let obj = new Object();
//console.log('Object:', obj, typeof obj);


//function is a block of code designed to perform a particular task
let obj = function() { console.log('Hello World'); }

let func = new Function('console.log("Hello World")');

obj();
func();
//console.log('Function:', obj() ,func(), typeof func);