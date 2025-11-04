//=====================================
// Falsy values
// =====================================

console.log(Boolean(false));        // false
console.log(Boolean(0));            // false
console.log(Boolean(-0));           // false
console.log(Boolean(0n));           // false (BigInt zero)
console.log(Boolean(""));           // false (empty string)
console.log(Boolean(null));         // false
console.log(Boolean(undefined));    // false
console.log(Boolean(NaN));          // false
///=====================================
// Truthy values
// =====================================

console.log(Boolean(true));         // true
console.log(Boolean(1));            // true
console.log(Boolean(-1));           // true
console.log(Boolean("hello"));      // true
console.log(Boolean(" "));          // true (space is not empty)
console.log(Boolean([]));           // true
console.log(Boolean({}));           // true
console.log(Boolean(function(){})); // true
console.log(Boolean(Infinity));     // true
console.log(Boolean(BigInt(1)));    // true
// Type Conversion Examples

// ======================================
// implicit Conversion

"5" + 2     // "52"   (number → string)
"5" - 2     // 3      (string → number)
"10" * "2"  // 20     (strings → numbers)
true + 1    // 2      (boolean → number)
false + "1" // "false1" (boolean → string)
///======================================


//=====================================
//Explicit (Manual) Conversions

String(100)        // "100"
Number("45.6")     // 45.6
Boolean(0)         // false
(100).toString()   // "100"
parseInt("42px")   // 42
parseFloat("3.14") // 3.14
JSON.stringify({a:1}) // '{"a":1}'
JSON.parse('{"a":1}') // {a:1}
// =====================================


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


