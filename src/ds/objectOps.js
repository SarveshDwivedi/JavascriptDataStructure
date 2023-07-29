//Type of way to create object
//1-Using an Object Literal
const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
//2 - Using the JavaScript Keyword new
const person1 = new Object();
person.firstName = "Sarvesh";
person.lastName = "Dwivedi";


const object1 = {
    a: 'somestring',
    b: 42
};

//Return key, value pair in Array = [["a","somestring"], ["b",42]]
const obj = Object.entries(object1)
console.log('value1=>', obj)

//Return key in Array =["a","b"]
const obj1 = Object.keys(object1)
console.log('value2=>', obj1)

//Return value in Array = ["somestring",42]
const obj2 = Object.values(object1)
console.log('value3=>', obj2)

//-----------------------------------------------
// copies all enumerable own properties from one or more source objects to a target object. 
// It returns the modified target object.
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// Expected output: Object { a: 1, b: 4, c: 5 }

//Prototype Inheritence
const objs = { fname: 'sarvesh' };
const objs1 = Object.create(obj);
objs1.lname = 'dwivedi';

console.log(objs1.fname)
console.log(objs1.lname)
console.log(objs1)


//Covert obj into Array
// An Object
var objt = { "1": 500, "2": 15, "5": 4, "4": 480, "10": 87 };

let result = Object.entries(objt);
let arr = [];
// Printing values
for (var i = 0; i < result.length; i++) {
    for (var z = 0; z < 1; z++) {
        let obj = {};
        obj[result[i][0]] = result[i][1]
        arr.push(obj)
    }
}

console.log(arr);

var newobj = {
    name: 'Rajesh',
    Id: null,
    complex:
    {
        name: 'Prashanth',
        id: 1,
        complex: null
    }
}

function removeNullProperties(obj) {
    for (var prop in obj) {
        if (obj[prop] === null) {
            delete obj[prop];
        } else if (typeof obj[prop] === 'object') {
            removeNullProperties(obj[prop]);
        }
    }
}

removeNullProperties(obj);
console.log(obj);

//

function removeNullfrommObj(obj) {
    Object.keys(obj).forEach(function (ele) {
        if (obj[ele] && typeof obj[ele] === "object") {
            removeNullfrommObj(obj[ele]);
        } else {
            if (obj[ele] == null) {
                delete obj[ele];
            }
        }
    })
    return obj;
}
console.log(removeNullfrommObj(newobj));

//////////////////////

function removeEmpty(obj) {
    const newObj = {};
    Object.keys(obj).forEach(function (k) {
        if (obj[k] && typeof obj[k] === "object") {
            newObj[k] = removeEmpty(obj[k]);
        } else if (obj[k] != null) {
            newObj[k] = obj[k];
        }
    });
    return newObj;
}

console.log(removeEmpty(newobj));


//console.log(obj)