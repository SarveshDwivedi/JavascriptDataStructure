//abnormal order of string

let str1 = "cat";
let str2 = "act";
function rearrangement_characters(str1, str2) {
    const first_set = str1.split('');
    const second_set = str2.split('');
    let result = true;

    first_set.sort();
    second_set.sort();

    for (let i = 0; i < Math.max(first_set.length, second_set.length); i++) {
        if (first_set[i] !== second_set[i]) {
            result = false;
        }
    }
    console.log('Result=>', result)
}

rearrangement_characters(str1, str2)

//Pair of elements from a specified array whose sum equals a specific target number
const arr = [1, 3, 5, 7, 9];
function twoSum(arr, totalsum) {
    const sumPair = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (totalsum === arr[i] + arr[j]) {
                sumPair.push([arr[i], arr[j]])
            }
        }
    }
    console.log(sumPair)
}
twoSum(arr, 10)


// Fibonacci Seried
function fibonaccSeried(number) {
    let n1 = 0, n2 = 1, next;
    for (let i = 0; i <= number; i++) {
        console.log(n1);
        next = n1 + n2;
        n1 = n2;
        n2 = next;
    }
}
fibonaccSeried(10);


//Get Count of Duplicate element with their count
const arrDuplicate = ['one', 'two', 'three', 'one', 'two', 'three', 'one']
function getEleCount() {
    const count = {};
    arrDuplicate.forEach(ele => {
        count[ele] = (count[ele] || 0) + 1
    });
    console.log(count)
}
getEleCount(arrDuplicate);

//other way
function getEleCount1() {
    const count = {};
    for (let i = 0; i < arrDuplicate.length; i++) {
        let ele = arrDuplicate[i];
        count[ele] = (count[ele] || 0) + 1
    };
    console.log(count);
}
getEleCount1(arrDuplicate);

//Check if a given string is as Palindrome

function isPalindrome(str) {
    let reverse = str.split("").reverse().join("");
    return str.toLowerCase() === reverse.toLowerCase();
}
console.log(isPalindrome("level"));