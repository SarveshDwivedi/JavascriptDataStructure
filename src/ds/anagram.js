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

const reArrangementString = reArrangementCharacters('cat', 'act');
console.log(reArrangementString);

//abnormal or Anagram order of string
function checkAnagramString(s1, s2) {
    return s1.split("").sort().join("") === s2.split("").sort().join("");
}

const checkAnagramStr = checkAnagramString('cat', 'act');
console.log(checkAnagramStr);

//Check Anagram string from array list
//output - [race care acer acre] [dad add]

let words = ["race", "abc", "care", "cbc", "acer", "code", "acre", "mace", "dad", "card", "add", "sore"];

let result = {}

for (const word of words) {
  const sorted = word.split("").sort().join("");

  if (sorted in result) {
    // If there is already an entry in the result, append this word
    result[sorted].push(word);
  } else {
    // Otherwise, create one
    result[sorted] = [word];
  }
}

for (const [key, value] of Object.entries(result)) {
  //console.log(value.length)
  if(value.length > 1){
    console.log(value);
  }
}

//console.log(result);


let newArr = []
for (let i = 0; i < words.length; i++) {
  const sorted = words[i].split("").sort().join("");
  let arr =  words.filter(ele => {
    if(sorted == ele.split("").sort().join("")){
      return ele;
    }
  })
  if(arr.length > 1){
    newArr.push(arr);
  } 
}

console.log(newArr.flat().filter((ele,index,arr) => arr.indexOf(ele) == index));