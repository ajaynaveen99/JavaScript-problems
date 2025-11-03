function printObjectValues(obj) {
    // Loop through each property in the object
    for (let key in obj) {
      // Check if the property belongs to the object itself
      if (obj.hasOwnProperty(key)) {
        // Print the value of the property
        console.log(obj[key]);
      }
    }
  }
  
  // Example usage
  let exampleObject = {
    name: 'ajay',
    age: 23,
    city: 'bangalore'
  };
  
  // Call the function and pass the exampleObject to it
  printObjectValues(exampleObject);
   