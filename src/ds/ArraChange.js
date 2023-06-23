var arr1 = [1,2,3,4];
var arr2 = [2,3,4,5,6,7,8];

//output = [3,5,7,9,6,7,8]


//var arr3 = [...arr1, ...arr2];
//var arr4 = [...new Set(arr3)];


var newArr = [];
for(i = 0; i < arr1.length; i++){
  newArr.push(arr1[i]+arr2[i])
}

var arr3 = arr2.slice(4,arr2.length);

console.log([...newArr, ...arr3]);