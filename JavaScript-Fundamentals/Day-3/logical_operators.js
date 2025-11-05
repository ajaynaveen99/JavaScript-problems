// ======================================================
// LOGICAL OPERATORS IN JAVASCRIPT
// ======================================================
// Covers: || (OR), && (AND), ! (NOT)
// Source concepts: MDN + javascript.info
// ======================================================


// ------------------------------------------------------
// SECTION 1: BASIC BOOLEAN OR (||)
// ------------------------------------------------------

console.log(true || true);   // true
console.log(false || true);  // true
console.log(true || false);  // true
console.log(false || false); // false


// ------------------------------------------------------
// SECTION 2: OR (||) WITH NON-BOOLEAN VALUES
// ------------------------------------------------------
// Evaluates operands from left to right.
// For each operand, converts it to boolean. If the result is true, stops and returns the original value of that operand.
// If all operands have been evaluated (i.e. all were false), returns the last operand.
// The difference is that AND returns the first falsy value while OR returns the first truthy one.
// ////======
// Sometimes, people use the AND && operator as a “shorter way to write if”.

console.log(1 || 0);          // 1 (truthy value returned)
console.log(null || 1);       // 1 (first truthy value)
console.log(null || 0 || 1);  // 1 (first truthy value)
console.log(undefined || null || 0); // 0 (all falsy, returns last)


// ------------------------------------------------------
// SECTION 3: OR (||) — DEFAULT / FALLBACK VALUES
// ------------------------------------------------------

let firstName = "";
let lastName = "";
let nickName = "SuperCoder";

console.log(firstName || lastName || nickName || "Anonymous"); // SuperCoder

let userInput = ""; // empty string is falsy
let username = userInput || "Guest"; // fallback runs
console.log("Username:", username); // Guest


// ------------------------------------------------------
// SECTION 4: OR (||) — SHORT CIRCUIT BEHAVIOR
// ------------------------------------------------------
//* stops evaluating when it finds the first truthy*

true  || console.log("Not printed");
false || console.log("Printed because left is falsy");


// ------------------------------------------------------
// SECTION 5: OR (||) — EXECUTION TRICKS
// ------------------------------------------------------

let user = null;
user || console.log("User not found!"); // right side executes only if left falsy

let loaded = true;
loaded || console.log("Data will load"); // does not run


// ------------------------------------------------------
// SECTION 6: OR (||) — CHAINING MULTIPLE EXPRESSIONS
// ------------------------------------------------------

function a() { console.log("A executed"); return false; }
function b() { console.log("B executed"); return "done"; }

console.log(a() || b()); // stops at b since a returns falsy


// ------------------------------------------------------
// SECTION 7: AND (&&) — BASIC BOOLEAN LOGIC
// ------------------------------------------------------

console.log(true && true);   // true
console.log(false && true);  // false
console.log(true && false);  // false
console.log(false && false); // false


// ------------------------------------------------------
// SECTION 8: AND (&&) — NON-BOOLEAN VALUES
// ------------------------------------------------------

console.log(1 && 0);        // 0 (first falsy value)
console.log(1 && 5);        // 5 (both truthy, returns last)
console.log(null && 5);     // null (stops at falsy)
console.log(0 && "Hello");  // 0 (stops at falsy)
console.log("Hi" && "Bye"); // "Bye" (last truthy returned)


// ------------------------------------------------------
// SECTION 9: AND (&&) — MULTIPLE OPERANDS
// ------------------------------------------------------

console.log(1 && 2 && null && 3); // null (first falsy)
console.log(1 && 2 && 3);         // 3 (all truthy, returns last)


// ------------------------------------------------------
// SECTION 10: AND (&&) — CONDITIONAL EXECUTION
// ------------------------------------------------------

let age = 25;
(age > 18) && console.log("You can vote"); // executes if condition truthy

let userObj = { active: true };
userObj && userObj.active && console.log("User is active");


// ------------------------------------------------------
// SECTION 11: AND (&&) — SHORT CIRCUIT EXAMPLES
// ------------------------------------------------------

function left() { console.log("Left called"); return false; }
function right() { console.log("Right called"); return true; }

console.log(left() && right()); // Right never executes because left is falsy


// ------------------------------------------------------
// SECTION 12: AND (&&) — CHAIN WITH SIDE EFFECTS
// ------------------------------------------------------

let counter = 0;
true && (counter += 1);
console.log("Counter after true &&:", counter);

false && (counter += 1);
console.log("Counter after false &&:", counter);


// ------------------------------------------------------
// SECTION 13: NOT (!) — BASIC BEHAVIOR
// ------------------------------------------------------

console.log(!true);  // false
console.log(!false); // true
console.log(!0);     // true
console.log(!1);     // false
console.log(!"");    // true
console.log(!"hello"); // false


// ------------------------------------------------------
// SECTION 14: NOT (!) — DOUBLE NOT (BOOLEAN CONVERSION)
// ------------------------------------------------------

console.log(!!"non-empty string"); // true
console.log(!!"");                 // false
console.log(!!0);                  // false
console.log(!!123);                // true
console.log(!!null);               // false

let testValue = "Hello";
console.log(Boolean(testValue));   // true (same result)


// ------------------------------------------------------
// SECTION 15: COMBINED EXAMPLES (||, &&, !)
// ------------------------------------------------------

let isWeekend = true;
let hour = 12;

// office open if hour 10–18 and not weekend
if (hour >= 10 && hour <= 18 && !isWeekend) {
  console.log("Office is open");
} else {
  console.log("Office is closed");
}


// ------------------------------------------------------
// SECTION 16: SHORT CIRCUIT CHAIN — MIXED
// ------------------------------------------------------

console.log(true || false && false);   // true (&& runs first)
console.log((true || false) && false); // false
console.log(false && true || true);    // true (&& false → false || true → true)


// ------------------------------------------------------
// SECTION 17: PRECEDENCE CHECK
// ------------------------------------------------------
// ! (highest) -> && -> ||

let a = true, b = false, c = true;
console.log(a || b && c); // true || (b && c) → true
console.log((a || b) && c); // (true || false) && true → true


// ------------------------------------------------------
// SECTION 18: DEVELOPER TRICKS (REAL USE CASES)
// ------------------------------------------------------

// 1 Default value fallback
let port = process.env.PORT || 3000;
console.log("Server running on port:", port);

// 2 Safe property access
let data = null;
let result = data && data.name; // avoids crash
console.log("Result:", result);

// 3 Execute only if condition true
let isLogged = false;
isLogged || console.log("Please log in!"); // runs because left is falsy

// 4 Convert value to boolean (double NOT)
let input = "AJAY";
let isNonEmpty = !!input;
console.log("Non-empty?", isNonEmpty);

// 5 Conditional function execution
let userActive = true;
userActive && console.log("Sending notification...");


// ------------------------------------------------------
// SECTION 19: COMMON INTERVIEW GOTCHAS
// ------------------------------------------------------

// ❌ 1. Expecting boolean but get value
let val = 0 || "default";  // "default" even though 0 is valid
console.log("Gotcha 1:", val);

// ❌ 2. Difference between == and === in logic
console.log(false || 0 == "0");  // true (loose equality)
console.log(false || 0 === "0"); // false (strict)

// ✅ 3. Proper fallback when 0 should be allowed
let qty = 0;
let safeQty = (qty ?? 10); // nullish coalescing (only replaces null/undefined)
console.log("Safe Quantity:", safeQty);

// ✅ 4. Operator return type confusion
console.log(1 && 2 && 3); // 3
console.log(1 || 2 || 3); // 1


// ------------------------------------------------------
// SECTION 20: ADVANCED CHAINING & SHORT CIRCUIT PRACTICE
// ------------------------------------------------------

function logAndReturn(value) {
  console.log("Checking:", value);
  return value;
}

console.log("Result (OR chain):", logAndReturn(0) || logAndReturn(null) || logAndReturn("Done"));
// stops after "Done"

console.log("Result (AND chain):", logAndReturn(1) && logAndReturn(2) && logAndReturn(0) && logAndReturn(3));
// stops after 0


// ------------------------------------------------------
// SECTION 21: NEGATION & COMBINED COMPLEX EXAMPLES
// ------------------------------------------------------

let x = 0;
let y = "JS";

console.log(!x || y); // true || "JS" => true (since !x → true)
console.log(!!x || y); // false || "JS" => "JS"
console.log(!(x || y)); // !(0 || "JS") => !("JS") => false


// ------------------------------------------------------
// SECTION 22: PRECEDENCE — TRICK TESTS
// ------------------------------------------------------

console.log(true && false || true);   // true (&& → false, then false || true)
console.log(true && (false || true)); // true (inside parentheses executes first)
console.log(!true && true || false);  // false (NOT first, then AND, then OR)


// ------------------------------------------------------
// SECTION 23: EMPTY OBJECTS & ARRAYS TRUTHINESS
// ------------------------------------------------------

if ([]) console.log("[] is truthy");        // yes
if ({}) console.log("{} is truthy");        // yes
if (![]) console.log("[] falsy?"); else console.log("[] is truthy in JS");


// ------------------------------------------------------
// SECTION 24: FINAL SUMMARY OUTPUTS
// ------------------------------------------------------

console.log("\nSummary:");
console.log("|| → returns first truthy or last falsy");
console.log("&& → returns first falsy or last truthy");
console.log("!  → converts to boolean and inverts it");
console.log("Precedence → ! > && > ||");
console.log("Use || for defaults, && for safe access, !! for boolean conversion");

