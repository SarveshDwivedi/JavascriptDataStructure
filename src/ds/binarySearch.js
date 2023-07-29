//Binary Search is a searching technique which works on the Divide and Conquer approach. 
//It is used to search for any element in a sorted array. 

function indexOf(array, index) {
    for (let i in array) {
      if (array[i] === index) return i;
    }
    return -1;
  }
  
  
  const result = indexOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 7);
  console.log(result);