//abnormal or Anagram order of string

function reArrangementCharacters(str1, str2) {

    if (str1.length != str2.length) {
        return false;
    }

    const first_set = str1.split('').sort();
    const second_set = str2.split('').sort();
    let result = true;

    for (let i = 0; i < first_set.length; i++) {
        if (first_set[i] !== second_set[i]) {
            result = false;
        }
    }
    return result;
}

const reArrangementString = reArrangementCharacters('cat1', 'act');
console.log(reArrangementString);

//abnormal or Anagram order of string
function checkAnagramString(s1, s2) {
    return s1.split("").sort().join("") === s2.split("").sort().join("");
}

const checkAnagramStr = checkAnagramString('cat', 'act');
console.log(checkAnagramStr);

//Check Anagram
function isAnagram(str1, str2) {
    if (str1.length != str2.length) {
        return false;
    }

    let counter = {};
    for (let ltr of str1) {
        counter[ltr] = (counter[ltr] || 0) + 1
    }

    for (let items of str2) {
        if (!counter[items]) {
            return false;
        }
        counter[items] -= 1;
    }
    return true;
}

const checkAnagram = isAnagram('hello', 'llheo');
console.log(checkAnagram);