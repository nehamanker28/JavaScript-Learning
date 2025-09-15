const userName = 'Max';

console.log(userName);

const greeting = new String('Hello, World!');

console.log(greeting.__proto__);
let index = 3;
//console.log(`The index is ${index} and the value at ${greeting.at(index)}`); //at
// console.log(greeting.concat(userName)); //charAt
// console.log(greeting.includes('neha')); //includes
// console.log(greeting.endsWith('!')); //endsWith
// console.log(greeting.startsWith('Hello')); //startsWith
// console.log(greeting.indexOf('o')); //indexOf
// console.log(greeting.lastIndexOf('o')); //lastIndexOf
console.log(greeting.slice(-3,-1)); //slice 
// first parameter is the starting index and the second parameter is the ending index,
//when its negative it counts from the end of the string and find the starting index
// and ending index and returns the substring
console.log(greeting.substring(1,5)); //substring

const iterator = greeting[Symbol.iterator]();
let theChar = iterator.next();
console.log(theChar);
// for(; !theChar.done; theChar = iterator.next()) {
//     console.log(theChar.value);
// }   
console.log(iterator.next().value);
for (const char of iterator) {
    console.log(char);
}