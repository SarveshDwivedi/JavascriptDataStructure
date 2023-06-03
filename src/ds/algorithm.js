// Task 2: Given an array of colors, create divs for each element of the array.
// If a color appears in the array only once,
// the div should have border of this color.If a color appears twice or more,
// the div should have this background color.
// Example: ['green', 'orange', 'black', 'orange'] =>
// (div with green border), (div with orange background),
// (div with black border), (div with orange background)

const arr = ['green', 'red', 'orange', 'black', 'orange'];
let container = document.getElementById('target');
let s1 = {}
for (let i = 0; i < arr.length; i++) {
    let clr = arr[i];
    s1[clr] = (s1[clr] || 0) + 1
}

console.log('s1==>', s1);
let index = 1;
for (let ele in s1) {
    console.log('ele==>', ele);
    console.log('s1[ele]==>', s1[ele]);
    var newElement = document.createElement('div');
    newElement.id = "clr" + index;
    newElement.className = "clrDiv";
    newElement.innerHTML = ele;
    document.getElementById('target').appendChild(newElement);

    if (s1[ele] == 1) {
        document.getElementById('clr' + index).style.borderColor = ele;
    } else if (s1[ele] > 1) {
        document.getElementById('clr' + index).style.backgroundColor = ele;
    }
    index++;
}