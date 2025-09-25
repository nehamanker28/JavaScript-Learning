function printHello() {
    console.log("Hello, World!");
}

printHello(); // Calling the function to print "Hello, World!"

function add(a, b) {
    return a + b;
}
// let sum = add(5, 3); // Calling the function with arguments 5 and 3
// console.log("Sum:", sum); // Output: Sum: 8
// // Function expression
// const multiply = function(x, y) {
//     return x * y;
// };
// let product = multiply(4, 6); // Calling the function with arguments 4 and 6    
// console.log("Product:", product); // Output: Product: 24
// // Arrow function
// const subtract = (m, n) => m - n;
// let difference = subtract(10, 4); // Calling the function with arguments 10 and 4
// console.log("Difference:", difference); // Output: Difference: 6
// // Function with default parameters
// function greet(name = "Guest") {
//     return `Hello, ${name}!`;
// }
// console.log(greet()); // Output: Hello, Guest!
// console.log(greet("Alice")); // Output: Hello, Alice!


function getUserName({
 username = 'Guest',
 password = '12345'
}){
    return (`Username: ${username}, Password: ${password}`)
}
console.log(getUserName({})); // Output: Username: Guest, Password: 12345