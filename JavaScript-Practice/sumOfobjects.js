function sumOfIntegerValues(obj) {
    let sum = 0;
    
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        let value = obj[key];
        if (Number.isInteger(value)) {
          sum += value;
        }
      }
    }
    
    return sum;
  }
  
  
  let studentMarks = {
    math: 85,
    science: 92,
    history: 'A', 
    english: 78,
    extraCredit: -10 
  };
  
  let totalSum = sumOfIntegerValues(studentMarks);
  console.log('Total Sum of Integer Values:', totalSum); 
  