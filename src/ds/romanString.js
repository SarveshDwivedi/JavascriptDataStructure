//Converting Roman Number to Integer

const roman = { 'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000 }

var romanToInt = function (S) {
    let ans = 0
    for (let i = S.length - 1; i >= 0; i--) {
        let num = roman[S.charAt(i)]
        if (4 * num < ans) ans -= num
        else ans += num
    }
    return ans
};

console.log(romanToInt("IXX"));


//Converting Decimal Number lying between 1 to 3999 to Roman Numerals

function returnRomanValue(number) {
    let romanNum = '';
    let num = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
    let sym = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"];
    let i = 12;
    while (number > 0) {
        let div = Math.floor(number / num[i]);
        number = number % num[i];
        while (div--) {
            romanNum += sym[i];
        }
        i--;
    }
    return romanNum;
}


let number = 20;
console.log(returnRomanValue(number));