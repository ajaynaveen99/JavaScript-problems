// ======================================================
// DAY-4: NULLISH COALESCING OPERATOR (??)
// ======================================================
// Ref: MDN + javascript.info
// ======================================================

//The nullish coalescing operator ?? provides a short way to choose the first “defined” value from a list.
//It’s used to assign default values to variables when dealing with potential null or undefined values.
// It only considers null and undefined as “empty” values, unlike || which treats all falsy values (0, "", false, NaN) as empty.
// This makes ?? particularly useful when you want to allow falsy values like 0 or "" to be valid inputs.
// ======================================================
// ------------------------------------------------------
// 1. Basic Examples
// ------------------------------------------------------

console.log(null ?? "Default");        // Default
console.log(undefined ?? "Default");   // Default
console.log("Hello" ?? "World");       // Hello


// ------------------------------------------------------
// 2. Difference between || and ??
// ------------------------------------------------------

console.log(0 || 100);   // 100 (0 is falsy)
console.log(0 ?? 100);   // 0   (not null or undefined)

console.log("" || "Hi"); // "Hi"  ("" is falsy)
console.log("" ?? "Hi"); // ""    (keeps empty string)

console.log(false || "Yes"); // "Yes"
console.log(false ?? "Yes"); // false


// ------------------------------------------------------
// 3. Real-world Example
// ------------------------------------------------------

let user = {
  name: "Ajay",
  age: 0,
  theme: null,
};

let userName = user.name ?? "Guest";
let userAge = user.age ?? 18;
let userTheme = user.theme ?? "light";

console.log(userName, userAge, userTheme); // Ajay 0 light


// ------------------------------------------------------
// 4. Nested Nullish Coalescing
// ------------------------------------------------------

let result = null ?? undefined ?? 0 ?? "JS";
console.log(result); // 0


// ------------------------------------------------------
// 5. Using with Functions
// ------------------------------------------------------

function getConfig() {
  return null;
}
console.log(getConfig() ?? "Default Config");

function getValue() {
  return 0;
}
console.log(getValue() ?? 10); // 0


// ------------------------------------------------------
// 6. Combining with Optional Chaining
// ------------------------------------------------------

let settings = { theme: null };
let theme = settings?.theme ?? "light";
console.log("Theme:", theme);


// ------------------------------------------------------
// 7. Precedence and Parentheses
// ------------------------------------------------------
{
let a = 1 && 2 ?? 3; // SyntaxError if not wrapped
let correct = (1 && 2) ?? 3; // 
console.log(correct); // 2
}

// ------------------------------------------------------
// 8. Real Dev Case — Server Port
// ------------------------------------------------------

let PORT = process.env.PORT ?? 8080;
console.log("Server running on port:", PORT);


// ------------------------------------------------------
// 9. Multiple Defaults (Chaining)
// ------------------------------------------------------

let a1 = null, a2 = undefined, a3 = 0;
let final = a1 ?? a2 ?? a3 ?? "done";
console.log("Final:", final);


// ------------------------------------------------------
// 10. Comparison vs OR
// ------------------------------------------------------

let val1 = 0 ?? 100; // 0
let val2 = 0 || 100; // 100
console.log("??:", val1, "||:", val2);


// ------------------------------------------------------
// 11. Edge Cases
// ------------------------------------------------------

let emptyStr = "";
console.log(emptyStr ?? "fallback"); // ""
let zeroNum = 0;
console.log(zeroNum ?? 5); // 0
let falseBool = false;
console.log(falseBool ?? true); // false


// ------------------------------------------------------
// 12. Interview Trick Example
// ------------------------------------------------------

let name = null ?? "Kushal";
let city = undefined ?? "Bangalore";
let active = false ?? true;

console.log(name, city, active); // Kushal Bangalore false


// ------------------------------------------------------
// 13. Mixing ?? with || and &&
// ------------------------------------------------------

let tricky = (false || null) ?? "default";
console.log("Tricky:", tricky); // default

let mix = (null ?? 2) && (undefined ?? 3);
console.log("Mix:", mix); // 3


// ------------------------------------------------------
// 14. Null vs Undefined Tests
// ------------------------------------------------------

let n = null;
let u = undefined;
console.log(n ?? "Null value fallback");
console.log(u ?? "Undefined value fallback");


// ------------------------------------------------------
// 15. Summary
// ------------------------------------------------------

console.log("\nSUMMARY:");
console.log("?? → Returns first non-null/undefined value");
console.log("|| → Returns first truthy value");
console.log("Preserves falsy values like 0, '', false");
console.log("Can't mix ?? with || or && without parentheses");
console.log("Great for clean defaults & config handling");

