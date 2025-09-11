const id = 1
let name = 'John Doe'
var city = 'New York'
loggedIn = true

//console.table([{ id, name, city, loggedIn }]);  



//scope

if (true) {
    let name = 'Alice'
    var city = 'Chicago'
    loggedIn = true
    console.log('Inside block scope:', name, city, loggedIn);
}
name = 'Jane kowalski'
city = 'Los Angeles'
loggedIn = false

console.table([{ id, name, city, loggedIn }]);
console.log('Outside block scope:', name, city, loggedIn);