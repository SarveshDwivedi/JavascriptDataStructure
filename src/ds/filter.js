// Input = "i am angular developer"
// Output = "i ma ralugna repoleved"

let str1 = "i am angular developer"
function reverseFn(str1, delimeter) {
  return str1.split(delimeter).reverse().join(delimeter);
}
let newStr = reverseFn(str1, "");
console.log(newStr);

let newStr1 = reverseFn(newStr, "");
console.log(newStr1)

//Return string which comes more then 1 like two
let str = "Elephant is a four legged creature with two small eyes and two big ears."
let arry = str.split(' ')
let obj = {};
for (i = 0; i < arry.length; i++) {
  obj[arry[i]] = (obj[arry[i]] || 0) + 1;
}
//console.log(obj);
for (ele in obj) {
  if (obj[ele] > 1) {
    console.log(ele);
  }
}
//console.log(obj)


//Given a string S, delete the minimum number of the letters necessary to obtain a string 
//without any three the same identical consecutive letters
//input "eedaaad", result - "eedaad"

function filterString(str) {
  // Implement your solution here
  const resData = [str.charAt(0), str.charAt(1)];
  for (let i = 2; i < str.length; i++) {
    if (str.charAt(i) !== str.charAt(i - 1) || str.charAt(i) !== str.charAt(i - 2)) {
      resData.push(str[i]);
    }
  }
  return resData.join('');
}

console.log(filterString("eedaaad"))

//Delete as many characters as possible using this method and return the resulting string. If the final string is empty, return Empty String
//Example 1:
//s = “aab”
//aab shortens to b in one operation: remove the adjacent a characters.
//onsole.log('aaabdccddd → abdccddd → abdddd → abdd->abd');

function reduceString(s) {
  let sb = s.split("")
  for (let i = 1; i < sb.length; i++) {
    if (sb[i] == sb[i - 1]) {
      sb.splice(i - 1, i + 1);
    }
  }

  if (sb.length == 0) {
    return "Empty String";
  }

  return sb.join("");

}

console.log(reduceString("aaabdccddd"));