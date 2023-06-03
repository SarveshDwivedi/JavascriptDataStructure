//Pair of elements from a specified array whose sum equals a specific target number

const arr = [1, 3, 5, 7, 9];
function twoSum(arr, totalsum) {
    const sumPair = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arr.length; j++) {
            if (totalsum === arr[i] + arr[j]) {
                sumPair.push([arr[i], arr[j]])
            }
        }
    }
    console.log(sumPair)
}
twoSum(arr, 10);

//Checking sum zero 
//Pair of elements from a specified array whose sum equals is ZERO
const arr1 = [-5, -4, -3, -2, 0, 2, 4, 6, 8];

function getSumPairZero(arr) {
    for (let ele of arr) {
        for (let j = 1; j > arr.length; j++) {
            if (ele + arr[j] === 0) {
                return [ele, arr[j]];
            }
        }
    }
}

const fn = getSumPairZero(arr1)
console.log(fn);

function getSumPairZero1(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let sum = arr[left] + arr[right];

        if (sum === 0) {
            return [arr[left], arr[right]]
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
}

const fn1 = getSumPairZero1(arr1)
console.log(fn1);