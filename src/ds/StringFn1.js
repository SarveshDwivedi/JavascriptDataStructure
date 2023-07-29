// Write a JavaScript function to find the not repeated character.
// Sample arguments : "JavaScript is Awesome"
// Expected output : "JvScrptAwom"

var findChar = function (str) {
    var char = "";

    for (var i = 0; i < str.length; i++) {
        if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
            char += str[i];
            //break;
        }
    }

    return char;
}

console.log(findChar("JavaScript is Awesome"));


/////////////////////////
function findNotRepeatedChar(str) {
    str = str.replaceAll(" ", "");
    let str1 = str.split('');

    let obj = {};
    for (let ele of str1) {
        obj[ele] = (obj[ele] || 0) + 1;
    }

    let arr = []
    for (let e in obj) {
        if (obj[e] == 1) {
            arr.push(e);
        }
    }
    return arr.join('');
}
console.log(findNotRepeatedChar("JavaScript is Awesome"));

//Find the Longest Substring without repeating characters in JavaScript

var lengthOfLongestSubstring = function(s) {
    let max = 0;
    let start = 0;
    let map = {};
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]] > start) {
            start = map[s[i]]
        }
        map[s[i]] = i
        max = Math.max(max, i - start + 1)
    }
    return max
};

console.log(lengthOfLongestSubstring("abbfghjuuuuuuukkkkkk"))


function lengthOfLongestSubstring(string) {
    var max = 0, current_string = "", i, char, pos;

    for (i = 0; i < string.length; i += 1) {
        char = string.charAt(i);
        pos = current_string.indexOf(char);
        if (pos !== -1) {
            // cut "dv" to "v" when you see another "d"
            current_string = current_string.substr(pos + 1);
        }
        current_string += char;
        max = Math.max(max, current_string.length);
    }
    return current_string;
}

console.log(lengthOfLongestSubstring("abbfghjuuuuuuukkkkkk"));


function longestSubstring(str) {
    let left = 0;
    let max = 0;
    let result = new Set();

    for (let r = 0; r < str.length; r++) {
        //The code will check for an existing item on the set
        // If found, all the previously saved items will be deleted
        // the set will return to being empty
        while (result.has(str[r])) {
            result.delete(str[left]);
            left += 1;
        }
        result.add(str[r]);
        max = Math.max(max, r - left + 1);
    }

    console.log(result);
    return max;
}

console.log(longestSubstring('abcabccbc')); //3