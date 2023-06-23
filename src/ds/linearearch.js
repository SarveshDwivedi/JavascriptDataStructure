// How Does Linear Search Algorithm Work?
// In Linear Search Algorithm, 

// Every element is considered as a potential match for the key and checked for the same.
// If any element is found equal to the key, the search is successful and the index of that element is returned.
// If no element is found equal to the key, the search yields “No match found”.
// For example: Consider the array arr[] = {10, 50, 30, 70, 80, 20, 90, 40} and key = 30

// Output: Element is present at index 3
// Complexity Analysis of Linear Search:
// Time Complexity:

// Best Case: In the best case, the key might be present at the first index. So the best case complexity is O(1)
// Worst Case: In the worst case, the key might be present at the last index i.e., opposite to the end from which the search has started in the list. So the worst-case complexity is O(N) where N is the size of the list.
// Average Case: O(N)


// Javascript code to linearly search x in arr[].

function indexOf(array, index) {
    for (let i in array) {
      if (array[i] === index) return i;
    }
    return -1;
  }
  
  const results = indexOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 7);
  console.log(results); 

/////////////////
function search(arr, n, x)
{
    for (let i = 0; i < n; i++)
        if (arr[i] == x)
            return i;
    return -1;
}
  
// Driver code
  
    let arr = [ 2, 3, 4, 10, 40 ];    
    let n = arr.length;
    let x = 10;
  
    // Function call
    let result = search(arr, n, x);
    (result == -1)
        ? console.log("Element is not present in array")
        : console.log("Element is present at index " + result);