

// ----------------------------------------------------
// 1. Basic if statement
// ----------------------------------------------------
let age = 20;

if (age >= 18) {
  console.log("You can vote");
}

// ----------------------------------------------------
// 2. if ... else
// ----------------------------------------------------
if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

// ----------------------------------------------------
// 3. if ... else if ... else (multiple conditions)
// ----------------------------------------------------
let score = 85;

if (score >= 90) {
  console.log("Grade A");
} else if (score >= 75) {
  console.log("Grade B");
} else if (score >= 50) {
  console.log("Grade C");
} else {
  console.log("Fail");
}

// ----------------------------------------------------
// 4. Truthy and Falsy values
// ----------------------------------------------------
let value = "";

if (value) {
  console.log("Truthy value");
} else {
  console.log("Falsy value");
}

// ----------------------------------------------------
// 5. Guard clause (early return pattern)
// ----------------------------------------------------
function login(user) {
  if (!user) return; // stop function if user not found
  console.log("User logged in:", user);
}
login("Ajay");
login(null);

// ----------------------------------------------------
// 6. Single-line if (not recommended for long code)
// ----------------------------------------------------
let isMember = true;
if (isMember) console.log("Welcome, member!");

// ----------------------------------------------------
// 7. Assignment inside if (be careful)
// ----------------------------------------------------
let x;
if (x = 10) {  // assigns 10, returns 10 (truthy)
  console.log("Assignment worked, x =", x);
}

// ----------------------------------------------------
// 8. Ternary operator (short if-else)
// ----------------------------------------------------
let age2 = 16;
let result = age2 >= 18 ? "Adult" : "Minor";
console.log(result);

// ----------------------------------------------------
// 9. Nested if example
// ----------------------------------------------------
let num = 15;

if (num > 0) {
  if (num % 2 === 0) {
    console.log("Positive Even");
  } else {
    console.log("Positive Odd");
  }
} else {
  console.log("Non-positive number");
}

// ----------------------------------------------------
// 10. Logical AND (&&) as a short conditional
// ----------------------------------------------------
let user = { name: "Ravi" };
user && console.log("User exists:", user.name);

// ----------------------------------------------------
// 11. Logical OR (||) for default values
// ----------------------------------------------------
let inputName = "";
let username = inputName || "Guest";
console.log("Username:", username);

// ----------------------------------------------------
// 12. Nullish coalescing (??)
// ----------------------------------------------------
let userScore = 0;
let finalScore = userScore ?? 10;
console.log("Final Score:", finalScore);

// ----------------------------------------------------
// 13. Switch statement
// ----------------------------------------------------
let day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Invalid day");
}

// ----------------------------------------------------
// 14. Break and Continue (inside loops)
// ----------------------------------------------------
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue; // skips 3
  if (i === 5) break;    // stops at 5
  console.log("Count =", i);
}

// ----------------------------------------------------
// 15. Strict equality (===) vs loose (==)
// ----------------------------------------------------
if (0 == false) {
  console.log("0 == false → true (loose check)");
}
if (0 === false) {
  console.log("0 === false → true");
} else {
  console.log("0 === false → false (strict check)");
}

// ----------------------------------------------------
// 16. Checking empty array and object correctly
// ----------------------------------------------------
let arr = [];
if (arr.length === 0) {
  console.log("Array is empty");
}

let obj = {};
if (Object.keys(obj).length === 0) {
  console.log("Object is empty");
}

// ----------------------------------------------------
// 17. Using return inside if (guard clause in function)
// ----------------------------------------------------
function divide(a, b) {
  if (b === 0) {
    console.log("Cannot divide by zero");
    return;
  }
  console.log("Result:", a / b);
}
divide(10, 2);
divide(10, 0);

// ----------------------------------------------------
// 18. Using multiple if conditions together
// ----------------------------------------------------
let temperature = 25;

if (temperature < 0) {
  console.log("Freezing");
} else if (temperature < 20) {
  console.log("Cold");
} else if (temperature < 30) {
  console.log("Warm");
} else {
  console.log("Hot");
}

// ----------------------------------------------------
// 19. Example: Real-world login check
// ----------------------------------------------------
let email = "ajay@example.com";
let password = "12345";

if (email && password) {
  console.log("Login successful");
} else {
  console.log("Email or password missing");
}

// ----------------------------------------------------
// 20. Example: Role-based access using switch
// ----------------------------------------------------
let role = "admin";

switch (role) {
  case "admin":
    console.log("Full Access");
    break;
  case "editor":
    console.log("Edit Access");
    break;
  case "viewer":
    console.log("Read Only");
    break;
  default:
    console.log("Unknown Role");
}

// ----------------------------------------------------
// 21. Example: Using logical operators in real condition
// ----------------------------------------------------
let hasLicense = true;
let hasCar = false;

if (hasLicense && hasCar) {
  console.log("You can drive");
} else if (hasLicense && !hasCar) {
  console.log("You can rent a car");
} else {
  console.log("You cannot drive");
}

// ----------------------------------------------------
// 22. Example: Checking falsy values clearly
// ----------------------------------------------------
let items = [1, 2, 3];
if (items.length === 0) {
  console.log("No items found");
} else {
  console.log("Items exist:", items);
}

// ----------------------------------------------------
// 23. Example: Using conditional logic in real scenario
// ----------------------------------------------------
let cartTotal = 1200;

if (cartTotal > 1000) {
  console.log("Discount applied: 10%");
} else {
  console.log("No discount");
}

// ----------------------------------------------------
// 24. Example: Switch as replacement for long if chains
// ----------------------------------------------------
let command = "pause";

switch (command) {
  case "start":
    console.log("Game started");
    break;
  case "pause":
    console.log("Game paused");
    break;
  case "stop":
    console.log("Game stopped");
    break;
  default:
    console.log("Unknown command");
}

// ----------------------------------------------------
// 25. Example: Nested conditions in real logic
// ----------------------------------------------------
let loggedIn = true;
let subscription = "premium";

if (loggedIn) {
  if (subscription === "premium") {
    console.log("Access to all features");
  } else {
    console.log("Limited access");
  }
} else {
  console.log("Please log in first");
}
