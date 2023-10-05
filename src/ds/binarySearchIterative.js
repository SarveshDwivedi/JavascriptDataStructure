// Compare the middle element of the search space with the key. 
// If the key is found at middle element, the process is terminated.
// If the key is not found at middle element, choose which half will be used as the next search space.
// If the key is smaller than the middle element, then the left side is used for next search.
// If the key is larger than the middle element, then the right side is used for next search.
// This process is continued until the key is found or the total search space is exhausted.

// 1. Iterative  Binary Search Algorithm: Here we use a while loop to continue the process of comparing the key 
// and splitting the search space in two halves.

// Output :
// Element is present at index 3
// Time Complexity: O(log N)
// Auxiliary Space: O(1)


// A iterative binary search function. It returns
// location of x in given array arr[l..r] is present,
// otherwise -1

// Binary Search is implemented using an iterative function.
let iterativeFunction = function (sorted_arr, target) {
	let start = 0,
	   end = sorted_arr.length - 1;
 
	// Iterate as long as the beginning does not encounter the end.
	while (start <= end) {
	   // find out the middle index
	   let mid = Math.floor((start + end) / 2);
 
	   // Return True if the element is present in the middle.
	   if (sorted_arr[mid] == target) return true;
	   // Otherwise, look in the left or right half
	   else if (sorted_arr[mid] < target) start = mid + 1;
	   else end = mid - 1;
	}
 
	return false;
 };
 
 // Driver code
 let sorted_arr = [2, 6, 8, 10, 12, 14];
 let target = 9;
 
 if (iterativeFunction(sorted_arr, target, 0, sorted_arr.length - 1))
	document.write("Target found!<br>");
 else document.write("Target not found!<br>");
 
 target = 10;
 
 if (iterativeFunction(sorted_arr, target, 0, sorted_arr.length - 1))
	document.write("Target found!<br>");
 else document.write("Target not found!<br>");
 