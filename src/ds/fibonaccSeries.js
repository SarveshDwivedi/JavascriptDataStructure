// Fibonacci Seried
function fibonaccSeries(number) {
    let n1 = 0, n2 = 1, next;
    for (let i = 0; i <= number; i++) {
        console.log(n1);
        next = n1 + n2;
        n1 = n2;
        n2 = next;
    }
}

fibonaccSeries(10);

var fibonacciFN = {
    fibonacci: function (n) {
        if (n <= 1) {
            return n;
        }
        return this.fibonacci(n - 1) +
            this.fibonacci(n - 2);
    }
};

console.log(fibonacciFN.fibonacci(9))


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
