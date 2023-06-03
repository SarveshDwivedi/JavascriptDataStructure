//Infinte Currying in JavaScript

function add(a) {
    return function (b) {
        if (b) return add(a + b);
        return a;
    }
}

console.log(add(4)(5)(6)(7)());


//Closure 
function init() {
    var name = "Mozilla"; // name is a local variable created by init
    function displayName() {
        // displayName() is the inner function, that forms the closure
        console.log(name); // use variable declared in the parent function
    }
    displayName();
}
init();

//Callback function
function myDisplayer(some) {
    console.log(some);
}

function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
}

myCalculator(5, 5, myDisplayer);


//Prototype Inheritence
const obj = { fname: 'sarvesh' };
const obj1 = Object.create(obj);
obj1.lname = 'dwivedi';

console.log(obj1.fname)
console.log(obj1.lname)
console.log(obj1)

//Debounce function

function getData() {
    console.log('fetch data=>');
}

function deBounce(fn, d) {
    let timer;
    return function (...arg) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            fn();
        }, d);
    }
}

const fnCall = deBounce(getData, 1000);

