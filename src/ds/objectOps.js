const object1 = {
    a: 'somestring',
    b: 42
};

//Return key, value pair in Array = ["a","somestring"], ["b",42]]
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