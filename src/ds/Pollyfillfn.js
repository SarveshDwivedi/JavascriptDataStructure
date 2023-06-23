// MAP
const arr = [1, 2, 3, 4, 5];

function double(x) {
  return x + x;
}

Array.prototype.ourMap = function (callBack) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    newArray.push(callBack(this[i]));
  }
  return newArray;
};
console.log(users.ourMap(double));

//Filter Pollyfill

function greaterThan(x) {
  return x > 4;
}

Array.prototype.ourFilter = function (callBack) {
  let output = [];
  for (let i = 0; i < this.length; i++) {
    if (callBack(this[i])) {
      output.push(this[i]);
    }
  }
  return output;
};

console.log(arr.ourFilter(greaterThan));

//Reduce Pollyfill
const numbers = [1, 2, 3, 4, 5, 6];

function callBack(accumulator, current) {
  return accumulator + current;
}

Array.prototype.myReduce = function (cb, initial) {
  let accumulator = initial !== 'undefined ' ? initial : this[0];

  for (i = 0; i < this.length; i++) {
    accumulator = cb(accumulator, this[i]);
  }

  return accumulator;
}

console.log(numbers.myReduce(callBack, 0));


//Bind Pollyfill
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
let arrPush = [1, 2, 3];
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

console.log('before==>', arr);
arrPush.myPush(5, 2);
console.log('after==>', arr);

//POP  function pollyfill
Array.prototype.myPop = function () {
  return this.splice(this.length - 1)[0];
};

console.log('before==>', arr);
arr.myPop();
console.log('after==>', arr);

//Array convert into Object
Array.prototype.convertIntoObj = function () {
  let obj = {};
  this.forEach((ele, index) => {
    obj[index] = ele;
  })
  return obj;
}

console.log(arr.convertIntoObj())

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


//Foreach

const names = ["Sarvesh", "Amit", "Manish"];

function consoleFunc(x) {
  console.log(x);
}

Array.prototype.ourForEach = function (callBack) {
  for (let i = 0; i < this.length; i++) {
    callBack(this[i]);
  }
};

names.ourForEach(consoleFunc);