/**
 * Task 1 - Magic Latin
 * Your task is move the first letter of each word to the end of it, then add 'ay' to the end of the word. Leave punctuation marks untouched.
 * @param str
 **/
function magicLatin(str) {
  const wordsArray = str.split(' ');
  const newWordsArray = [];

  wordsArray.forEach((word) => {
    console.log()
    let newWord = word + word.charAt(0) + 'ay';
    newWord = newWord.substring(1);

    newWordsArray.push(newWord);
  });

  console.log(newWordsArray.join(' '));
}

magicLatin('Magic latin is cool'); // agicMay atinlay siay oolcay
magicLatin('Hello world !');   // elloHay orldWay !

/**
 * Task 2 - Valid Parentheses
 * Your task is to write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.
 * @param str
 * @returns {boolean}
 */
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

var isValid = function (s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    let c = s.charAt(i);
    switch (c) {
      case '(': stack.push(')');
        break;
      case '[': stack.push(']');
        break;
      case '{': stack.push('}');
        break;
      default:
        if (c !== stack.pop()) {
          return false;
        }
    }
  }

  return stack.length === 0;
};

console.log(isValid("{}("))
console.log(isValid("{}()"))


/**
 * Task 3 - Binary number divisible by 5
 * You need to define a regular expression which tests if a given string representing a binary
 * number is divisible by 5.
 * @type {RegExp}
 */
const divisibleByFive = new RegExp("^(0|1(10)*(0|11)(01*01|01*00(10)*(0|11))*1)*$");
// 5 divisable by 5
console.log(divisibleByFive.test('101'));// === true
// 135 divisable by 5
console.log(divisibleByFive.test('10000111'));// === true
// 666 not divisable by 5
console.log(divisibleByFive.test('0000001010011010'));// === false


/**
 * Task 4 - Next bigger number
 * You have to create a function that takes a positive integer number and returns the next bigger number formed by the same digits.
 * @param num
 * @returns {number}
 */
function nextBigger(num) {
  num += '';
  let biggerNum = -1;
  let fixIndex = null;

  for (let i = num.length - 1; i > 0; i--) {
    if (num[i - 1] < num[i]) {
      fixIndex = i - 1;
      break;
    }
  }

  if (fixIndex === null) { //Have not the bigger number, return -1.
    return biggerNum;
  }

  const fixPart = num.substring(0, fixIndex);
  const rightPart = num.substring(fixIndex);
  const resortedRightPart = rightPart.split('').sort().join('');

  //To find the min number in the resorted right part.
  let minIndexInResortedRightPart = 0;
  while (minIndexInResortedRightPart < resortedRightPart.length && (+resortedRightPart[minIndexInResortedRightPart]) <= (+num[fixIndex])) {
    minIndexInResortedRightPart++;
  }

  biggerNum = fixPart + resortedRightPart[minIndexInResortedRightPart] + resortedRightPart.substring(0, minIndexInResortedRightPart) + resortedRightPart.substring(minIndexInResortedRightPart + 1);

  return +biggerNum;
}

console.log(nextBigger(12));// == 21
console.log(nextBigger(513));// == 531
console.log(nextBigger(2017));// == 2071
console.log(nextBigger(111));// == -1
console.log(nextBigger(531));// == -1
console.log(nextBigger(8737654));//8743567
console.log(nextBigger(8757654));//8764557