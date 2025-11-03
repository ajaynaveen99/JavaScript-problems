function hasProperty(obj, property) {
    // Use the `in` operator to check if the property exists
    return property in obj;
  }
  
  // Example usage
  const exampleObject = {
    name: "John",
    age: 30,
    city: "New York"
  };
  
  console.log(hasProperty(exampleObject, "age"));  
  console.log(hasProperty(exampleObject, "gender"));  
  