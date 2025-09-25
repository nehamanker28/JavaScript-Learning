


// // for (let i = 1; i <= 5; i++) {
// //     let row = '';
// //    for (let j = 1; j <= i; j++) {
// //     if(j <= i) {
// //         row = row + '*'; //
// //     }
// //      else row = row + ' '; 
// // }   
// // //console.log(row);
// // }
// // //how to optamize the above code
// // for (let i = 1; i <= 5; i++) {
// //     console.log('*'.repeat(i));
// // }

// // for (let i = 1; i <= 5; i++) {
// //   let row = '';
// //     for (let j = 1; j <= 5; j++) {
// //     if('condition for star'){
// //         row = row + '*'; //
// //     }
// //     else row = row + ' ';
// //   }
    
// // }

// for (let i = 1; i <= 3; i++) {
//     let row = '';

//    for (let j = 1; j <= 5; j++) {
//   //  console.log(`row: ${i}, column: ${j}`);

//     if(j < (2*i) - 1 )    {

//       row = row + '*'; //
//     }
//     else row = row + ' ';
// }
// console.log(row);
// }

const array = [10, 20, 30, 40, 50];
for (const key in array) {
  console.log(key); // 0, 1, 2, 3, 4
 
}
const obj = {a: 10, b: 20, c: 30};

for (const key in obj) {
  console.log(`key:${key}`); //
  console.log(obj[key]); // 10, 20, 30
}

for (const a of array) {
console.log(a); // 10, 20, 30, 40, 50  
}

for (const a of 'hello') {
  console.log(a); // h, e, l, l, o
}
for (const a of obj) {
  console.log(a); // TypeError: obj is not iterable
}
//for each loop with arrow function
array.forEach(element => {
  console.log(element); // 10, 20, 30, 40, 50
});

array.forEach((element, index) => {
  console.log(`index: ${index}, element: ${element}`); 
  // index: 0, element: 10
  // index: 1, element: 20
  // index: 2, element: 30
  // index: 3, element: 40
  // index: 4, element: 50
}
);

//map function
const newArray = array.map(element => element * 2);

const newArray2 = array.map((element, index) => {
  return element * index;
} );

object.entries(obj).forEach(([key, value]) => {
  console.log(`key: ${key}, value: ${value}`);
  // key: a, value: 10
  // key: b, value: 20
  // key: c, value: 30
});
Object.entries(obj).forEach(([key, value]) => {
  console.log(`key: ${key}, value: ${value}`);
  // key: a, value: 10
  // key: b, value: 20
  // key: c, value: 30
});
