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

//console.table([{ id, name, city, loggedIn }]);
console.log('Outside block scope:', name, city, loggedIn);

//difference between var and let/const 
// var is function scoped
// let and const are block scoped
//function scope is the scope of a variable within a function
//block scope is the scope of a variable within a block (e.g. if, for, while)

const myfunc = () => {
    var functionVar = 'I am function scoped'
   // let blockLet1 = 'I am block scoped'
    //const blockConst = 'I am also block scoped'
   // console.log('Inside function scope:', functionVar, blockLet, blockConst);
    if(true){
      var  functionVar1  = 'I am a different function scoped variable'
      //  blockLet1 = "I am a different block scoped variable"
        let blockLet = 'I am a different block scoped variable'
        const blockConst = 'I am also a different block scoped variable'
       // console.log('Inside block scope:', functionVar, blockLet, blockConst);
    }
    functionVar1 = 'I can be accessed here'
    blockLet = 'I cannot be accessed here'
    console.log('Inside function scope after block:', functionVar1);
}

myfunc();
console.log('Function scope:', typeof myfunc);