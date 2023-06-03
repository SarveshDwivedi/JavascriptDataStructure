const arr = [1, 2, 3]; //result - [1,4,9]
Array.prototype.myMap = function (callbackFn) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    /* call the callback function for every value of this array and       push the returned value into our resulting array
    */
    arr.push(callbackFn(this[i], i, this));
  }
  return arr;
}

function multiple(n, i, arr) {
  return n * n
}

console.log(arr.myMap(multiple));


//1- Remove duplicate from arr by User defined prototype method
const duplicateArr = [2, 1, 2, 5, 6, 3, 8, 5, 6];
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


//Bind function pollyfill
function getName() {
  console.log(this.fname + " " + this.lname)
}

let Person = {
  fname: "Sarvesh",
  lname: "Dwivedi"
}

Function.prototype.MyBind = function (obj) {
  const func = this;
  return function () {
    return func.call(obj)
  }
}

const bindName = getName.MyBind(Person);
bindName()

//Push  function pollyfill
let arrPush = [1,2,3];
Array.prototype.myPush = function () {
  //console.log(this.length);
  for (var i = 0, len = arguments.length; i < len; i++) {
    this[this.length] = arguments[i];
    if (Object.prototype.toString.call(this).slice(8, -1).toLowerCase() === 'object') {
      this.length += 1;
    }
  }
  return this.length;
};

console.log('before==>',arr);
arrPush.myPush(5,2);
console.log('after==>',arr);

//POP  function pollyfill
Array.prototype.myPop = function(){
  return this.splice(this.length-1)[0];
};

console.log('before==>',arr);
arr.myPop();
console.log('after==>',arr);

//Array convert into Object
Array.prototype.convertIntoObj = function(){
  let obj = {};
  this.forEach((ele,index) => {
      obj[index] = ele;
    })
    return obj;
  }
  
  console.log(arr.convertIntoObj())