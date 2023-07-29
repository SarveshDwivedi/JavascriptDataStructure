let arr = [2, "b", 4, "d", 3, "a", "c", "e", 5, 1];
//Output arr = [2, 4, 3, 5, 1, "b", "d", "a", "c", "e"];

let arr1 = [];
let arr2 = [];

function arrangArray(arr){
  for(ele of arr){
    //console.log(typeof ele)
    if(typeof ele == "number"){
       arr1.push(ele)
     } else{
      arr2.push(ele)
     } 
  }
  return [...arr1, ...arr2];
}

console.log(arrangArray(arr))

//function to check interger and float number
function checkNumber(x) {

  // check if the passed value is a number
  if(typeof x == 'number' && !isNaN(x)){
  
      // check if it is integer
      if (Number.isInteger(x)) {
          console.log(`${x} is integer.`);
      }
      else {
          console.log(`${x} is a float value.`);
      }
  
  } else {
      console.log(`${x} is not a number`);
  }
}

checkNumber('hello');
checkNumber(44);
checkNumber(3.4);
checkNumber(-3.4);
checkNumber(NaN);

function isInt(num){ 
  //console.log(val)
  let arr = num.toString().split("");
 // console.log(arr);
  if(arr.includes('.')){
    return false
  } else {
    return true
  }  
}

console.log(isInt(4)); // true
console.log(isInt(12.2)); // false
console.log(isInt(0.3)); // false