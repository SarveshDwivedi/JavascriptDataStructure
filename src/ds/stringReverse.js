// Input - Sarvesh Dwivedi
// Output - ideviwD hsevraS

let str = "Sarvesh Dwivedi";

// 0 : B -> last pos AND k -> 1st pos
// 1 : a -> last-1 pos AND e -> 2nd pos
// Custom function
function reverseString(str) {
    let str1 = "";
    for (let i = str.length - 1; i >= 0; i--) {
        str1 += str[i];
    }
    return str1;
}
console.log(reverseString(str));

//Using swap 
function reverseString(str) {
    let arr = str.split("");
    for (let i = 0; i < arr.length / 2; i++) {
        let start = arr[i];
        arr[i] = arr[arr.length - i - 1];
        arr[arr.length - i - 1] = start;
    }
    return arr.join("");
}
console.log(reverseString(str));

//Inbuild function
let str1 = str.split("").reverse().join("");
console.log(str1)