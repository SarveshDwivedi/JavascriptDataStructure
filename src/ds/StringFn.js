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