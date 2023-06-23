// Insertion sort is a simple sorting algorithm that works similar to the way 
// you sort playing cards in your hands. 
// The array is virtually split into a sorted and an unsorted part. 
// Values from the unsorted part are picked and placed at the correct position in the sorted part.

// Insertion Sort Algorithm : To sort an array of size N in ascending order iterate over the array and compare 
// the current element (key) to its predecessor, if the key element is smaller than its predecessor, compare 
// it to the elements before. Move the greater elements one position up to make space for the swapped element.

// Output : 5 6 11 12 13 
// Time Complexity: O(N^2) 
// Auxiliary Space: O(1)

// Complexity Analysis of Insertion Sort:
// Time Complexity of Insertion Sort
// The worst-case time complexity of the Insertion sort is O(N^2)
// The average case time complexity of the Insertion sort is O(N^2)
// The time complexity of the best case is O(N).


// Javascript program for insertion sort 
   
// Function to sort an array using insertion sort
function insertionSort(arr, n) 
{ 
    let i, key, j; 
    for (i = 1; i < n; i++)
    { 
        key = arr[i]; 
        j = i - 1; 
   
        /* Move elements of arr[0..i-1], that are 
        greater than key, to one position ahead 
        of their current position */
        while (j >= 0 && arr[j] > key)
        { 
            arr[j + 1] = arr[j]; 
            j = j - 1; 
        } 
        arr[j + 1] = key; 
    } 
} 
   
// A utility function to print an array of size n 
function printArray(arr, n) 
{ 
    let i; 
    for (i = 0; i < n; i++) 
        document.write(arr[i] + " "); 
    document.write("<br>");
} 
   
// Driver code
    let arr = [12, 11, 13, 5, 6 ]; 
    let n = arr.length; 
   
    insertionSort(arr, n); 
    printArray(arr, n); 