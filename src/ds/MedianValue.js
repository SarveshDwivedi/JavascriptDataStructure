/*
 * Median of two Sorted Arrays of Different Sizes
 * Complete the 'FindMedianValue' function below.
 * The function is expected to return a FLOAT.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY A
 *  2. INTEGER_ARRAY B
 */

function findMedianValue(A, B) {
    let newArray = [...A, ...B];
    newArray.sort((a,b) => a-b)
    console.log(newArray)
    let arrayLength = newArray.length;
      if(arrayLength%2 == 0){
          let midIndex = arrayLength/2;
          let midVal = newArray[midIndex];
          let previousMidVal = newArray[midIndex-1];
          let medianValue = (midVal + previousMidVal)/2
          return medianValue;
      } else {
         let midIndex = Math.floor(arrayLength/2);
         return newArray[midIndex];
      }
  }
  
  let arr1 = [2,5,3,7,8];
  let arr2 = [4,6,8,10]
  findMedianValue()