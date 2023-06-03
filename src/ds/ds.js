
//get max value
const arr = [1, 2, 89, 90, 5, 46, 100, 5];
let maxNumber = arr[0];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > maxNumber) {
    maxNumber = arr[i]
  }
}
console.log("Max number is ==>", maxNumber)

//max value
let arr1 = [20,100,12]
console.log(Math.max(...arr1))

//min value
console.log(Math.min(...arr1))

//Reserse a string
let str = 'demo'
let revStr = str.split('').reverse().join("");
console.log(revStr)

let revStr1

for (let i = str.length - 1; i >= 0; i--) {
  revStr1 += str[i];
  //revStr += str.charAt(i);
}
console.log(revStr1)

// Reverse a digit 
let revStr2= '';
let str2 = 235
let str3= str.toString().split("");
console.log(str3);
for (let i = str3.length-1; i >= 0; i--) {
  revStr1 += str3[i];
  //revStr += str.charAt(i);
}
console.log(parseInt(revStr2))

let num = 235;
let reverseValue = 0;
while (num > 0) {//235 , 23 , 2
  let r = parseInt(num % 10);//5 , 3 , 2
  reverseValue = reverseValue * 10 + r; //5 , 53 ,532
  num = parseInt(num / 10); //23 , 2 , 0
}
console.log("The new reverse digit is ==>", reverseValue);
console.log(parseInt(num.toString().split("").reverse().join("")))


const newArr = [10, 21, 23, 11, 2, 1];
//----------

//sum of all elements
let sum = 0;
for (let i = 0; i < newArr.length; i++) {
  sum = sum + newArr[i];
}
console.log('The sum is ==>', sum);

//Multiply of all elements
let multiPly = 1;
for (let i = 0; i < newArr.length; i++) {
  multiPly = multiPly * newArr[i];
}
console.log('The Multiply is ==>', multiPly);

//Multiply of all even numbers inside array
let multiPly1 = 1;
for (let i = 0; i < newArr.length; i++) {
  if (newArr[i] % 2 == 0) {
    multiPly1 = multiPly1 * newArr[i];
  }
}
console.log('The Multiply of even numbers is ==>', multiPly1);

//sum of all digits of a number
