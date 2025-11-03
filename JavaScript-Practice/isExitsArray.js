function isExists(arr, elToFind){
  
    // If indexOf returns -1, the element does not exist
    
    // return arr.indexOf(elToFind) !== -1;or
    return arr.includes(elToFind)
  
    
  }
  console.log(isExists([1, 2, 3], 2)); 
  console.log(isExists(["apple", "banana"], "orange")); 
  