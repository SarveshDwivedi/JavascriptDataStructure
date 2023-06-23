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

function binarySearch(arr, x)
{
	let l = 0;
	let r = arr.length - 1;
	let mid;
	while (r >= l) {
		mid = l + Math.floor((r - l) / 2);
		// If the element is present at the middle itself
		if (arr[mid] == x)
			return mid;

		// If element is smaller than mid, then  it can only be present in left subarray
		if (arr[mid] > x)
			r = mid - 1;
			
		// Else the element can only be present in right subarray
		else
			l = mid + 1;
	}

	// We reach here when element is not present in array
	return -1;
}

	arr =new Array(2, 3, 4, 10, 40);
	x = 10;
	n = arr.length;
	result = binarySearch(arr, x);
	
(result == -1) ? console.log("Element is not present in array")
			: console.log ("Element is present at index " + result);
				

