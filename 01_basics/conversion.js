let str = "33.44";  // number : 33
let str1  = "33.44abc"; // 33
let str2 = "abc33"; // NaN
let str3 = NaN // nan
let str4 = undefined // NaN
let str5 = null // 0
console.log('String:', str, typeof str);

let num = Number(str4);

//console.log('Number:', num, typeof num);

let num1 = parseInt(str1);
//console.log('Parse Int:', num1, typeof num1);   

let someNumber  = 99.78
console.log('String to Number:', someNumber.toString(),String(someNumber) ,typeof someNumber.toString());