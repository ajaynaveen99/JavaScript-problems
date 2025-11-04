// //without 'use strict'
// name = "Ajay";  // No 'let', 'var', or 'const'
// console.log(name);


// Enable strict mode
//
// "use strict";  

// person = "Ajay";
// console.log(person);// we get error because 'person' is not declared.

//================= Strict Mode Example =================//
// "use strict";
let package = 10;  
console.log(package);// Error: 'package' is a reserved word
// In strict mode, using reserved words as variable names is not allowed.

//================= End of Example =================//
//================= Strict Mode Example =================//

"use strict";
function showThis() {
  console.log(this); //refers to global object (window)
}
showThis();
// In strict mode, 'this' remains undefined in such cases.