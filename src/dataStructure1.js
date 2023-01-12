// program to check the number of occurrence of a character
function countString(str, letter) {
  let count = 0;
  console.log(str.length);
  // looping through the items
  for (let i = 0; i < str.length; i++) {
    console.log(str.charAt(i));
    // check if the character is at that position
    if (str.charAt(i) == letter) {
      count += 1;
    }
  }
  console.log(count);
}

countString('susus', 's');

function countString1(str, letter) {
  let count = 0;
  var str1 = str.split('')
  console.log(str1)
  console.log(str.length);
  // looping through the items
  for (let i = 0; i < str1.length; i++) {
    if (str[i] === letter) {
      count += 1;
    }
  }
  console.log(count);
}

countString1('susus', 's');
//------------------------------------------------------------------

const strArray = ['sarvesh', 'name', 'San', 'abc', 'sir']
function returnValForS() {
  for (let i = 0; i < strArray.length; i++) {
    let str = strArray[i].toLowerCase();
    //Return value which has "S"
    if (str.includes('s')) {
      console.log(strArray[i])
    }

    //Return value which start with "S"
    if (str.startsWith('s')) {
      console.log(strArray[i])
    }

    //Return value which end with bc
    if (str.endsWith('bc')) {
      console.log(strArray[i])
    }

    //Return value is 'Sarvesh' available in array
    if (strArray.includes('sarvesh')) {
      console.log(true)
    }
  }
}
//-------------------------------------------------------------

const duplicateArr = [2, 1, 2, 5, 6, 3, 8, 5, 6]
//1- Remove duplicate from arr by User defined prototype method
Array.prototype.uniqueArray = function () {
  let uniqueArr = []
  for (let i = 0; i < this.length; i++) {
    if (uniqueArr.indexOf(this[i]) === -1) {
      uniqueArr.push(this[i]);
    }
  }
  return uniqueArr;
}

const newUniqueArr = duplicateArr.uniqueArray();
console.log('New Unique Array is ==>', newUniqueArr)

//2- Remove duplicate from arr by regular funciton
function uniqueValue() {
  let uniqueArr = []
  for (let i = 0; i < duplicateArr.length; i++) {
    if (uniqueArr.indexOf(duplicateArr[i]) === -1) {
      uniqueArr.push(duplicateArr[i]);
    }
  }
  return uniqueArr;
}

let newUniqueArr1 = uniqueValue(duplicateArr);
console.log("New Unique Array is ==>", newUniqueArr1)

//Remove duplicate from arr using Set

const newUniqueArr2 = [...new Set(duplicateArr)]
console.log("New Unique Array is ==>", newUniqueArr2)

//Remove duplicate from arr using filter method

const uqniueArr = arr.filter((ele, index, arr) => {
  return arr.indexOf[ele] === index;
});
console.log(uqniueArr)

