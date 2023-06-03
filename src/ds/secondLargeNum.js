// Javascript program to find second largest element in an array
// Function to print the second largest elements
function print2largest(arr, arr_size) {
    // There should be atleast two elements
    if (arr_size < 2) {
        console.log(" Invalid Array ");
        return;
    }

    // sort the array
    arr.sort();
    // start from second last element as the largest element is at last
    for (let i = arr_size - 2; i >= 0; i--) {
        // if the element is not equal to largest element
        if (arr[i] != arr[arr_size - 1]) {
            console.log("The second largest element is " + arr[i]);
            return;
        }
    }
    console.log("There is no second largest element<br>");
}

// Driver program to test above function
let arr = [12, 35, 1, 10, 34, 1];
let n = arr.length;
print2largest(arr, n);