// Given a string, find the length of the longest substring without repeating chars
// str = abcabcbb
// Expect = Answer is abc with the length of 3
function lengthOfLongSubstring(str) {
    if (!str) {
        return 0
    }
    let end = 0;
    let start = 0;
    let maxlength = 0;

    const uniqueChar = new Set();

    while (end < str.length) {
        if (!uniqueChar.has(str[end])) {
            uniqueChar.add(str[end]);
            end++;
            maxlength = Math.max(maxlength, uniqueChar.size);
        }
        else {
            uniqueChar.delete(str[start]);
            start++
        }
    }
    return maxlength;
}

const maxLength = lengthOfLongSubstring("abcabcbb");
console.log(maxLength)

//Remove all occurrences of a character in a string

function removechar(word, ch) {
    let ans = "";
    for (let i = 0; i < word.length; i++) {
        if (word[i] != ch) {
            ans += word[i];
        }
    }

    return ans;
}

// driver's code
let word = "geeksforgeeks";
let ch = 'e';
console.log(removechar(word, ch));

// insert characters in a string at a certain position?
// Function to add stars
function addStars(s, stars) {
    // Create a string ans for storing     // resultant string
    let ans = "";
    let j = 0;

    for (let i = 0; i < s.length; i++) {
        // If the count of characters become equal to the stars[j], append star
        if (j < stars.length && i == stars[j]) {
            ans += '*';
            j++;
        }
        ans += s[i];
    }
    return ans;
}

let chars = [1, 5, 7, 9];
let ans = addStars('geeksforgeeks', chars);
console.log(ans)


//Count the space in string and also count the occurance of each char
let str = 'this is it';
const spacesCount = str.split(' ').length - 1;
console.log(spacesCount);

str = str.replaceAll(" ", "");
console.log(str);

let arr = str.split('');
//console.log(arr);
let obj = {};
for (let ele of arr) {
    obj[ele] = (obj[ele] || 0) + 1
}
obj.space = spacesCount;
console.log(obj)