let arr = [5, 2, 7, 1, 0]

//Sort the elements of array by using Javascript sort in-build function
console.log(arr.sort((a, b) => a - b));

//Without applying JavaScript Sort in-build function
//--------------Insertion Sort---------------------
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;
        // Moving elements of arr[0..i-1], that are  
        // greater than key, to one position ahead  
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
    return arr
}

console.log("Before sorting: ", arr);
console.log("After sorting: ", insertionSort(arr));



//--------------Bubble Sort---------------------
function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let swapped = false
        for (let j = 0; j < arr.length - i - 1; j++) {
            // swapping the elements
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
                swapped = true
            }
        }
        // if no elements are swapped
        // that means our array is sorted
        if (!swapped) break;
    }
    return arr;
}

console.log("Before sorting: ", arr)
console.log("After sorting: ", bubbleSort(arr))


//--------------Selection Sort---------------------
function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        // Finding the minimum element
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) minIndex = j;
        }
        // Swapping the minimum element with the first element
        let temp = arr[minIndex]
        arr[minIndex] = arr[i]
        arr[i] = temp
    }
    return arr
}

console.log("Before sorting: ", arr)
console.log("After sorting: ", selectionSort(arr))

//----
let sorted = arr.sort(function (a1, a2) {
    if (a1 > a2) {
        return 1
    }
    else {
        return -1
    }
})
console.log(sorted);