// 2. Recursive  Binary Search Algorithm:
// Create a recursive function and compare the mid of the search space with the key. 
// And based on the result either return the index where the key is found or call the recursive function for the next search space.

// Output : Element is present at index 3
// Complexity Analysis of Binary Search:
// Time Complexity: 
// Best Case: O(1)
// Average Case: O(log N)
// Worst Case: O(log N)
// Auxiliary Space: O(1), If the recursive call stack is considered then the auxiliary space will be O(logN).

// Implementation of Recursive  Binary Search Algorithm:

// JavaScript program to implement recursive Binary Search

// A recursive binary search function. It returns
// location of x in given array arr[l..r] is present,
// otherwise -1
function binarySearch(arr, l, r, x) {
  if (r >= l) {
    let mid = l + Math.floor((r - l) / 2);

    // If the element is present at the middle itself
    if (arr[mid] == x)
      return mid;

    // If element is smaller than mid, then it can only be present in left subarray
    if (arr[mid] > x)
      return binarySearch(arr, l, mid - 1, x);

    // Else the element can only be present in right subarray
    return binarySearch(arr, mid + 1, r, x);
  }

  // We reach here when element is not
  // present in array
  return -1;
}

let arr = [2, 3, 4, 10, 40];
let x = 10;
let n = arr.length
let result = binarySearch(arr, 0, n - 1, x);
(result == -1) ? console.log("Element is not present in array")
  : console.log("Element is present at index " + result);
