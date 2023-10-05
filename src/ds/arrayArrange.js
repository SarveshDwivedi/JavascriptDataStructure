//Pushing positives and negatives to separate arrays in JavaScript

var arr = [2, -3, 4, -9, 10, -5, 45, -2, 8, -4, 12, -7, 0, 19, 30]

//var outputArr = [-3, -9, -5, -2, -4, -7, 0, 2, 4, 10, 45, 8, 12, 19, 30]

let arr1 = arr.filter((ele) => ele > 0);
let arr2 = arr.filter((ele) => ele < 1);

console.log([...arr2, ...arr1])