function printObjectKeys(obj) {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        console.log(key);
      }
    }
  }
  
  
  let exampleObject = {
    name: 'ajay',
    age: 30,
    city: 'banglore'
  };
  
  printObjectKeys(exampleObject);

  