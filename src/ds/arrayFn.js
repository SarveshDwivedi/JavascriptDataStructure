const arr = [1800, 2000, 3000, 5000, 500];
 

//Array Reduce
const sumWithInitial = arr.reduce((acc, current) => acc+current);
console.log(sumWithInitial);

//Array Filter
const arrFilter =  arr.filter((ele, i, arr) => ele > 1800);
console.log(arrFilter)

//Array Map
const arrMap =  arr.map((ele, arr) => ele * 2);
console.log(arrMap)
