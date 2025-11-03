
// Type Conversion Examples

let value = true;
console.log(typeof value); // boolean

value = String(value);
console.log(value);        // "true"
console.log(typeof value); // string

// -------------------------------------
console.log("6" / "2"); 
console.log("6" * "2"); 
console.log("6" - 2);  
console.log("6" + 2);   
//-------------------------------------
let str = "123";
console.log(typeof str);

let num = Number(str);
console.log(num);        
console.log(typeof num);

// -------------------------------------
console.log(Number("  123  ")); // 123
console.log(Number("123z"));    // NaN
console.log(Number(true));      // 1
console.log(Number(false));     // 0
console.log(Number(null));      // 0
console.log(Number(undefined)); // NaN


