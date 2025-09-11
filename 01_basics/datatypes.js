/*
1. Number = 2 to the power of 253 -1
2. BigInt = fo big numbers after 2 to the power of 253 -1 (mostly for cryptography)
3. String = text
4. Boolean = true or false
6. Undefined = variable declared but not assigned
7. Null = empty value
8. Symbol = unique identifier
9. Object = collection of key-value pairs
10. Function = block of code designed to perform a particular task
11. Array = ordered list of values
12. Date = represents a single moment in time
13. RegExp = pattern for matching text
14. Map = collection of key-value pairs where keys can be of any type
15. Set = collection of unique values
16. WeakMap = similar to Map but keys are weakly referenced
17. WeakSet = similar to Set but values are weakly referenced
18. Error = represents an error that occurs during the execution of a program
*/
console.log('--- Data Types of null  ---',typeof null); // object
console.log('Number:', 42, typeof 42);
console.log('BigInt:', 9007199254741991n, typeof 9007199254741991n);
console.log('--- Data Types of  :', typeof undefined);

let name = 'John Doe'

console.log('String:', name, typeof name);
//write code string interpolation
console.log(`String Interpolation: Hello, ${name}!`, typeof `Hello, ${name}!`);

console.log(`Booleaen ${name}! ye mujhe krne hi nahi de raha`, typeof true);