// Input = "i am angular developer"
// Output = "i ma ralugna repoleved"

let str1 = "i am angular developer"
function reverseFn(str1, delimeter) {
    return str1.split(delimeter).reverse().join(delimeter);
}
let newStr = reverseFn(str1, "");
console.log(newStr);

let newStr1 = reverseFn(newStr, "");
console.log(newStr1)

//Check if Given String is Palindrome or not
