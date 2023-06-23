// Example 1: Check Palindrome Using for Loop

// program to check if the string is palindrome or not

function checkPalindrome(string) {
    // find the length of a string
    const len = string.length;

    // loop through half of the string
    for (let i = 0; i < len / 2; i++) {
        // check if first and last string are same
        if (string[i] !== string[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}


// call the function
const value = checkPalindrome('level');

console.log(value);

//Example 2: Check Palindrome using built-in Functions
// program to check if the string is palindrome or not

function checkPalindrome(string) {
    // convert string to an array
    const reverseString = string.split('').reverse().join('');

    if (string == reverseString) {
        console.log('It is a palindrome');
    }
    else {
        console.log('It is not a palindrome');
    }
}

checkPalindrome('level');


//Check if a given string is as Palindrome
// JavaScript program to check number/string Palindrome using array method ?
// Palindrome = same forward and backward
// Ex. dad, madam, 12321, 454
function isPalindrome(str) {
    let reverse = str.split("").reverse().join("");
    if (str.toLowerCase() === reverse.toLowerCase()) {
        return `${str} : is Palindrome`;
    } else {
        return `${str} : is not Palindrome`;
    }
}
console.log(isPalindrome("level"));