function demoVariables() {
  var x = 10;
  let y = 20;
  const z = 30;

  if (true) {
    var x = 40;     
    let y = 50;    
    const z = 60;   

    console.log("Inside block:");
    console.log("x =", x); 
    console.log("y =", y); 
    console.log("z =", z); 
  }

  console.log("Outside block:");
  console.log("x =", x); 
  console.log("y =", y); 
  console.log("z =", z); 
}



demoVariables();