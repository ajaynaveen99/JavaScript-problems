// =====================================
// JavaScript Operators – Practice File
// =====================================


// -------------------------------------------------------
// 1. Arithmetic Operators
// -------------------------------------------------------
console.log("Arithmetic Operators");

let a = 10;
let b = 3;

console.log("Addition:", a + b);          // 13
console.log("Subtraction:", a - b);       // 7
console.log("Multiplication:", a * b);    // 30
console.log("Division:", a / b);          // 3.333...
console.log("Remainder:", a % b);         // 1 (remainder after dividing 10/3)
console.log("Power:", a ** b);            // 1000 (10³)


// -------------------------------------------------------
// 2. Unary Operators
// -------------------------------------------------------
console.log(" 2. Unary Operators");

let x = 5;
console.log("Negation:", -x);             // -5
console.log("Unary plus on number:", +x); // 5 (no change)
console.log("Unary plus on string:", +"42"); // 42 (string → number)
console.log("Unary plus on true:", +true);   // 1
console.log("Unary plus on false:", +false); // 0
console.log("Unary plus on empty string:", +""); // 0


// -------------------------------------------------------
//3. Increment and Decrement
// -------------------------------------------------------
console.log(" 3. Increment & Decrement");

let count = 5;
console.log("Initial:", count);

console.log("Prefix ++:", ++count); // increases first, returns new value (6)
console.log("Postfix ++:", count++); // returns old value (6), then increases
console.log("After postfix:", count); // now 7

count = 5;
console.log("Prefix --:", --count); // decreases first, returns 4
console.log("Postfix --:", count--); // returns old value (4), then decreases
console.log("After postfix --:", count); // now 3


// -------------------------------------------------------
// 4. String Concatenation (+ with strings)
// -------------------------------------------------------
console.log("4. String Concatenation");

console.log("Hello " + "World");  // "Hello World"
console.log("Age" + 20);        // "Age: 20"
console.log(10 + "5");            // "105" (number → string)
console.log("5" + 10);            // "510"
console.log(2 + 2 + "1");         // "41" -> (2+2=4) then + "1" => "41"
console.log("1" + 2 + 2);         // "122" -> "1"+2="12", then "12"+2="122"


// -------------------------------------------------------
// 5. String → Number conversion in arithmetic
// -------------------------------------------------------
console.log("5. String → Number Conversion");

console.log("10" - 2); // 8 (string becomes number)
console.log("10" * 2); // 20
console.log("10" / 2); // 5
console.log("4px" - 2); // NaN (cannot convert "4px" to number)


// -------------------------------------------------------
// 6. Explicit Number Conversion
// -------------------------------------------------------
console.log(" 6. Explicit Number Conversion");

let str1 = "10", str2 = "20";
console.log("Using Number():", Number(str1) + Number(str2)); // 30
console.log("Using unary +:", +str1 + +str2); // 30 (shorter version)


// -------------------------------------------------------
//7. Assignment and Modify-in-Place
// -------------------------------------------------------
console.log(" 7. Assignment & Modify-in-Place");

let n = 10;
n += 5;   // n = n + 5 -> 15
n *= 2;   // n = n * 2 -> 30
console.log("After += and *=:", n);

// tricky: right side is evaluated first
n = 2;
n *= 3 + 5; // same as n = n * 
console.log("n *= 3 + 5:", n); 




// -------------------------------------------------------
// 8. Operator Precedence
// -------------------------------------------------------
console.log(" 8. Operator Precedence");

let result1 = 2 + 3 * 4;        // * runs first -> 2 + 12 = 14
let result2 = (2 + 3) * 4;      // () changes order -> 5 * 4 = 20
console.log("Default order:", result1);
console.log("With parentheses:", result2);


// -------------------------------------------------------
//  9. Chaining Assignments
// -------------------------------------------------------
console.log(" 9. Chaining Assignments");

let p, q, r;
p = q = r = 5 + 5; 
console.log("p:", p, "q:", q, "r:", r);


// -------------------------------------------------------
// 10. Type Conversion & Coercion
// -------------------------------------------------------
console.log("10. Type Conversion & Coercion");

console.log('"" + 1 + 0 =', "" + 1 + 0);//
console.log('"" - 1 + 0 =', "" - 1 + 0);
console.log('true + false =', true + false);
console.log('6 / "3" =', 6 / "3");
console.log('"2" * "3" =', "2" * "3");
console.log('4 + 5 + "px" =', 4 + 5 + "px");
console.log('"$" + 4 + 5 =', "$" + 4 + 5);
console.log('"4" - 2 =', "4" - 2);
console.log('"4px" - 2 =', "4px" - 2);
console.log('"  -9  " + 5 =', "  -9  " + 5);
console.log('"  -9  " - 5 =', "  -9  " - 5);
console.log('null + 1 =', null + 1);
console.log('undefined + 1 =', undefined + 1);
console.log('" \\t \\n" - 2 =', " \t \n" - 2);


// -------------------------------------------------------
// 11. Comma Operator (rare)
// -------------------------------------------------------
console.log(" 11. Comma Operator");

let val = (1 + 2, 3 + 4);  // 

console.log("Comma result:", val); // 7

// Example in for loop:
console.log("Comma in for loop:");
for (let i = 0, j = 3; i < j; i++, j--) {
  console.log("i:", i, "j:", j);
}


// -------------------------------------------------------
// END OF FILE
// -------------------------------------------------------
