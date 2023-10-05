//Sort aray by color

let arr = [
    {
      "color": "purple",
      "type": true
  
    },
    {
      "color": "red",
      "type": false
    },
  {
      "color": "green",
      "type": true
    },
  {
      "color": "black",
      "type": false
    },
  {
      "color": "pink",
      "type": true
    }]
  
  arr.sort((a, b) => a.color < b.color ? -1 : (a.color > b.color ? 1 : 0));
  
  console.log(arr)

//custom funciton
  function sortedArray(arr){
    for(let i = 0; i< arr.length; i++){
        newArr.push(arr[i].color);
    }
  
    let sortedArr = newArr.sort();
    //console.log(sortedArr);
    let newArr1 = [];
    for(let i = 0; i<sortedArr.length; i++){
      let obj = {
        "color" :sortedArr[i],
        "type" : getColorType(sortedArr[i])
      }
      newArr1.push(obj);
    }
    return newArr1;
  }
  function getColorType(color){
    for(i = 0 ; i < arr.length; i++){
      if(arr[i].color == color){
        return arr[i].type
      }
    }
  }

  sortedArray(arr)