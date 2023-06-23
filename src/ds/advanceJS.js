//Infinite Currying in JavaScript

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
const obj = { 'fname': 'sarvesh' };
const obj1 = Object.create(obj);
obj1.lname = 'dwivedi';

console.log(obj1.fname)
console.log(obj1.lname)
console.log(obj1)

// Debounce function - 
// Debouncing waits for a certain time before invoking the function again.

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

// Debouncing is a technique to delay the execution of a
// function until after a specific amount of time has passed without the
// function being called again.
function debounce(func, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => func.apply(this, args), delay);
    };
}
function saveData() {
    console.log('Data saved');
}
const debouncedSave = debounce(saveData, 1000);
debouncedSave(); // (No output)
debouncedSave(); // (No output)
debouncedSave(); // Output: Data saved


// Throttling Function - 
// Throttling limits the number of times the function can be called over a certain period.

function throttle(func, delay) {
    let lastCall = 0;
    return function (...args) {
        const now = new Date().getTime();
        if (now - lastCall < delay) {
            return;
        }
        lastCall = now;
        func(...args);
    };
}

function logMessage(message) {
    console.log(message);
}

const throttledLogMessage = throttle(logMessage, 1000);

// Logs 'Hello'
throttledLogMessage('Hello');


// Throttling is a technique to limit the number of times
// a function can be called within a specific time frame.
function throttle(func, limit) {
    let inThrottle;
    return function (...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => (inThrottle = false), limit);
        }
    };
}
function logMessage() {
    console.log('Message logged');
}
const throttledLog = throttle(logMessage, 1000);
throttledLog(); // Output: Message logged