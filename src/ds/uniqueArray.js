//Count number of unique element
function countUnique(arr){
    if(arr.length > 0){
    let i = 0;
    for(let j =1; j < arr.length; j++){
      if(arr[i] != arr[j]){
        i++;
        arr[i] = arr[j];
      }
    }
      return i+1;
    }
  }
  
  const uniqueCount = countUnique([1,1,2,2,3,4,4,5,6,7,8,8,9,9]);
  console.log(uniqueCount);

  
//Remove duplicate from arr by regular funciton
const duplicateArr = [1,1,2,2,3,4,4,5,6,7,8,8,9,9];
function uniqueValue(duplicateArr) {
    let uniqueArr = []
    for (let i = 0; i < duplicateArr.length; i++) {
      if (uniqueArr.indexOf(duplicateArr[i]) === -1) {
        uniqueArr.push(duplicateArr[i]);
      }
    }
    return uniqueArr;
  }
  
  let newUniqueArr1 = uniqueValue(duplicateArr);
  console.log("New Unique Array is ==>", newUniqueArr1)
  
  //Remove duplicate from arr using Set
  
  const newUniqueArr2 = [...new Set(duplicateArr)]
  console.log("New Unique Array is ==>", newUniqueArr2)
  
  //Remove duplicate from arr using filter method
  
  const uqniueArr = duplicateArr.filter((ele, index, arr) => {
    return arr.indexOf[ele] === index;
  });
  console.log(uqniueArr);

  //Get Count of Duplicate element with their count
const arrDuplicate = ['one', 'two', 'three', 'one', 'two', 'three', 'one']
function getEleCount(arrDuplicate) {
    const count = {};
    arrDuplicate.forEach(ele => {
        count[ele] = (count[ele] || 0) + 1
    });
    console.log(count)
}
getEleCount(arrDuplicate);

//other way
function getEleCount1(arrDuplicate) {
    const count = {};
    for (let i = 0; i < arrDuplicate.length; i++) {
        let ele = arrDuplicate[i];
        count[ele] = (count[ele] || 0) + 1
    };
    console.log(count);
}
getEleCount1(arrDuplicate);

// remove duplicates from an array of objects using JavaScript
const books = [
  { title: "C++", author: "Bjarne" },
  { title: "Java", author: "James" },
  { title: "Python", author: "Guido" },
  { title: "Java", author: "James" },
];

const unique = books.filter((obj, index) => {
  return index === books.findIndex(o => obj.title === o.title);
});

console.log(unique);


const ids = books.map(({ title }) => title);
const filtered = books.filter(({ title }, index) =>
    !ids.includes(title, index + 1));
 
console.log(filtered);