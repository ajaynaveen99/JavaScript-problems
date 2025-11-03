function filterNumbers(arr){
  
  
    return arr.filter((item) => typeof item === "number" && !isNaN(item));
  }
  
  // Example usage:
  let arr2 = [1, "Ajay", 2, "true", "apple", 3.5, 4,0,-4];
  console.log(filterNumbers(arr2)); 
    