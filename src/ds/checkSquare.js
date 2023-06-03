//Checking Square in another array

const arr1 = [1, 2, 3, 4]
const arr2 = [1, 4, 9, 16, 45]
function findSquare(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        var isSquare = false;
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] * arr1[i] == arr2[j]) {
                isSquare = true;
            }
        }
    }
    return isSquare;
}

var ans = findSquare(arr1, arr2)
console.log(ans);


//Checking Square in another array
function isSquareCheck(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
       let isSquare = false;
     for (let j = 0; j < arr2.length; j++) {
       
         if (arr1[i] * arr1[i] === arr2[j]) {           
             isSquare =  true;
         }

         if (j === arr2.length - 1) {
             if (!isSquare) {
               console.log('in')
                 return false;
             }
         }
     }
 }
 return true;
}

const res = isSquareCheck(arr1, arr2);
console.log(res);


//Checking Square in another array
function checkSquare(arr1, arr2) {
    let map1 = {};
    let map2 = {};

    for (item of arr1) {
        map1[item] = (map1[item] || 0) + 1;
    }

    for (item1 of arr2) {
        map2[item1] = (map2[item1] || 0) + 1;
    }

    for (let key in map1) {
        if (!map2[key * key]) {
            return false;
        }
        if (map1[key] !== map2[key * key]) {
            return false
        }
    }
    return true

}

const res1 = checkSquare(arr1, arr2);
console.log(res1);