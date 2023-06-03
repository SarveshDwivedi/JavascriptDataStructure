//Count larget sum of consecutive digits
//num = 4
function findLargest(arr, num) {
    if (num > arr.length) {
        throw new Error("Number is greater than array length!");
    } else {
        let max = 0;
        for (let i = 0; i < arr.length - num + 1; i++) {
            let tmp = 0;
            for (let j = 0; j < num; j++) {
                tmp += arr[i + j];
            }
            if (tmp > max) {
                max = tmp;
            }
        }
        return max;
    }
}

let largestSum1 = findLargest([1, 2, 3, 4, 3, 5, 4, 6, 7, 8], 4);
console.log(largestSum1);

//Count larget sum of consecutive digits
//num = 4
//sum = 25

function largestSumConsecutiveDigits(arr, num) {
    if (num > arr.length) {
        throw new Error("Number is greater than array length!");
    }
    else {
        let maxSum = 0;
        let tempSum = 0;
        for (let i = 0; i < num; i++) {
            maxSum += arr[i];
        }
        tempSum = maxSum;
        for (let i = num; i < arr.length; i++) {
            tempSum = tempSum - arr[i - num] + arr[i];
            maxSum = Math.max(maxSum, tempSum);
        }
        return maxSum;
    }
}

let largestSum = largestSumConsecutiveDigits([1, 2, 3, 4, 3, 5, 4, 6, 7, 8], 4);
console.log(largestSum);

