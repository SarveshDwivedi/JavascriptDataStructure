// Return odd number array from given array
// exam- [1,2,3,4,5,6,7,8,9,10]
// expect - [1,3,5,7,9]

function findOdd(arr) {
    let result = [];

    function helperRecusrive(inputArr) {
        if (inputArr.length === 0) {
            return
        }
        if (inputArr[0] % 2 != 0) {
            result.push(inputArr[0]);
        }
        helperRecusrive(inputArr.slice(1));
    }
    helperRecusrive(arr);
    return result;
}

const res = findOdd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(res)