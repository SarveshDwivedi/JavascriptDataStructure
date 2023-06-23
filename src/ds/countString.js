// program to check the number of occurrence of a character
function countString(str, letter) {
  let count = 0;
  
  // looping through the items
  for (let i = 0; i < str.length; i++) {
    
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



