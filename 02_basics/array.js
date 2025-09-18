// const arr = [0, 1, 2, 3, 4, 5];

// // console.log(arr.values())
// // for (const num of arr.values()) {
// //     console.log(num);
// // }


// arr.push(6);
// arr.unshift(-1);
// console.log(arr);
// arr.pop();
// arr.shift();
// //arr.reverse();
// //arr.splice(2, 2);
// //console.log(arr);
// // arr.splice(2, 0, 'a', 'b'); //inserts 'a' and 'b' at index 2 without removing any element
// // console.log(arr);
// const v1 = arr.slice(1, 4); //creates a new array from index 1 to index 4 (4 not included)
// console.log(v1);

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = arr1.push(arr2); //concatenates arr1 and arr2 and returns a new array
 console.log(arr1);
// let arr4 = [...arr1, ...arr2]; //spread operator to concatenate arr1 and arr2
// console.log(arr4);
// let arr5 = Array.from('hello'); //creates an array from a string
// console.log(arr5);
// let arr6 = Array.of(1, 2, 3, 4, 5); //creates an array from a list of values
// console.log(arr6);
// let arr7 = new Array(10); //creates an array of length 10
// console.log(arr7);
// let arr8 = Array(1, 2, 3); //creates an array from a list of values
// console.log(arr8);
// let str = arr3.toString(); //converts an array to a string
// console.log(str);
// let str1 = arr3.join(' - '); //joins all elements of an array into a string
// console.log(str1);
// let index = arr3.indexOf(3); //returns the index of the first occurrence of a value in an array
// console.log(index);
// let index1 = arr3.lastIndexOf(3); //returns the index of the last occurrence of a value in an array
// console.log(index1);
// let includes = arr3.includes(3); //returns true if an array contains a value
// console.log(includes);
// let includes1 = arr3.includes(7); //returns false if an array does not contain a value
// console.log(includes1);
// let find = arr3.find((num) => num > 3); //returns the first element in an array that satisfies a condition
// console.log(find);
// let findIndex = arr3.findIndex((num) => num > 3); //returns the index of the first element in an array that satisfies a condition
// console.log(findIndex);
// let filter = arr3.filter((num) => num > 3); //returns a new array with all elements that satisfy a condition

// console.log(filter);
// let map = arr3.map((num) => num * 2); //returns a new array with the results of calling a function on every element in an array 
// console.log(map);
// let reduce = arr3.reduce((acc, num) => acc + num, 0); //reduces an array to a single value by calling a function on every element in an array
// console.log(reduce);
// //uses of reduce to find the maximum value in an array
// let max = arr3.reduce((a,b) => a>b ? a : b);
// console.log(max);