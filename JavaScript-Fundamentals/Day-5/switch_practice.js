// ======================================================
// DAY-6 : SWITCH STATEMENT PRACTICE
// ======================================================
// Covers: syntax, grouping, expressions, fallthrough,
// nested switches, missing breaks, strict equality,
// default position, real use cases, tricky interview
// questions, and developer edge cases.
// ======================================================


// ------------------------------------------------------
// 1. Basic switch example
// ------------------------------------------------------

let day = 2;

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
// Output: Tuesday


// ------------------------------------------------------
// 2. Missing break causes fall-through
// ------------------------------------------------------

let color = "red";

switch (color) {
  case "red":
    console.log("Color is red");
  case "blue":
    console.log("Color is blue");
  default:
    console.log("No match");
}
// Output:
// Color is red
// Color is blue
// No match


// ------------------------------------------------------
// 3. Using default case
// ------------------------------------------------------

let role = "viewer";

switch (role) {
  case "admin":
    console.log("Full access");
    break;
  case "editor":
    console.log("Edit access");
    break;
  default:
    console.log("Read only");
}
// Output: Read only


// ------------------------------------------------------
// 4. Grouping multiple cases together
// ------------------------------------------------------

let fruit = "mango";

switch (fruit) {
  case "apple":
  case "banana":
  case "mango":
    console.log("It’s a fruit");
    break;
  default:
    console.log("Not a fruit");
}
// Output: It’s a fruit


// ------------------------------------------------------
// 5. Strict equality test (===)
// ------------------------------------------------------

let val = "1";

switch (val) {
  case 1:
    console.log("Number one");
    break;
  case "1":
    console.log("String one");
    break;
  default:
    console.log("No match");
}
// Output: String one


// ------------------------------------------------------
// 6. Using expressions in case
// ------------------------------------------------------

let num = 10;

switch (true) {
  case num > 0 && num < 5:
    console.log("Small");
    break;
  case num >= 5 && num <= 10:
    console.log("Medium");
    break;
  default:
    console.log("Large");
}
// Output: Medium


// ------------------------------------------------------
// 7. Switch without matching case
// ------------------------------------------------------

let food = "pizza";

switch (food) {
  case "burger":
  case "fries":
    console.log("Fast food");
    break;
  default:
    console.log("Not fast food");
}
// Output: Not fast food


// ------------------------------------------------------
// 8. Default case can appear anywhere (not recommended)
// ------------------------------------------------------

let item = "pen";

switch (item) {
  default:
    console.log("Default first");
    break;
  case "book":
    console.log("Book found");
    break;
}
// Output: Default first


// ------------------------------------------------------
// 9. switch(true) used like if/else chain
// ------------------------------------------------------

let score = 85;

switch (true) {
  case score >= 90:
    console.log("Grade A");
    break;
  case score >= 75:
    console.log("Grade B");
    break;
  case score >= 60:
    console.log("Grade C");
    break;
  default:
    console.log("Fail");
}
// Output: Grade B


// ------------------------------------------------------
// 10. Using functions with switch
// ------------------------------------------------------

function getDayName(num) {
  switch (num) {
    case 1: return "Monday";
    case 2: return "Tuesday";
    case 3: return "Wednesday";
    default: return "Invalid";
  }
}
console.log("Day 2 =", getDayName(2));
// Output: Day 2 = Tuesday


// ------------------------------------------------------
// 11. Nested switch
// ------------------------------------------------------

let userType = "admin";
let action = "delete";

switch (userType) {
  case "admin":
    switch (action) {
      case "delete":
        console.log("Admin deleted item");
        break;
      default:
        console.log("Admin did something else");
    }
    break;
  default:
    console.log("Not admin");
}
// Output: Admin deleted item


// ------------------------------------------------------
// 12. Fall-through intentionally used
// ------------------------------------------------------

let direction = "east";

switch (direction) {
  case "north":
  case "south":
  case "east":
  case "west":
    console.log("Valid direction");
    break;
  default:
    console.log("Invalid direction");
}
// Output: Valid direction


// ------------------------------------------------------
// 13. Switch inside a loop (practical usage)
// ------------------------------------------------------

for (let i = 1; i <= 3; i++) {
  switch (i) {
    case 1:
      console.log("Loop", i, "-> One");
      break;
    case 2:
      console.log("Loop", i, "-> Two");
      break;
    default:
      console.log("Loop", i, "-> Other");
  }
}


// ------------------------------------------------------
// 14. Case with expression calculation
// ------------------------------------------------------

let x = 4;

switch (x * 2) {
  case 4:
    console.log("4");
    break;
  case 8:
    console.log("8");
    break;
  default:
    console.log("None");
}
// Output: 8


// ------------------------------------------------------
// 15. Boolean switch example
// ------------------------------------------------------

let flag = false;

switch (flag) {
  case true:
    console.log("True block");
    break;
  case false:
    console.log("False block");
    break;
  default:
    console.log("Default block");
}
// Output: False block


// ------------------------------------------------------
// 16. Comparing numbers and strings carefully
// ------------------------------------------------------

let data = 10;

switch (data) {
  case "10":
    console.log("string 10");
    break;
  case 10:
    console.log("number 10");
    break;
  default:
    console.log("no match");
}
// Output: number 10


// ------------------------------------------------------
// 17. Using switch with ranges via true
// ------------------------------------------------------

let age = 25;

switch (true) {
  case (age < 13):
    console.log("Child");
    break;
  case (age >= 13 && age < 20):
    console.log("Teenager");
    break;
  case (age >= 20 && age < 60):
    console.log("Adult");
    break;
  default:
    console.log("Senior");
}
// Output: Adult


// ------------------------------------------------------
// 18. Case order matters
// ------------------------------------------------------

let value = 2;

switch (value) {
  case 2:
    console.log("First match 2");
    break;
  case 2: // duplicate ignored after first match
    console.log("Second match 2");
    break;
  default:
    console.log("No match");
}
// Output: First match 2


// ------------------------------------------------------
// 19. Switch with variable inside case
// ------------------------------------------------------

let check = "active";
let caseValue = "active";

switch (check) {
  case caseValue:
    console.log("Matched variable case");
    break;
  default:
    console.log("No match");
}
// Output: Matched variable case


// ------------------------------------------------------
// 20. switch with function call result
// ------------------------------------------------------

function getType() {
  return "fruit";
}

switch (getType()) {
  case "fruit":
    console.log("Got fruit");
    break;
  default:
    console.log("No match");
}
// Output: Got fruit


// ------------------------------------------------------
// 21. switch used for numeric categories
// ------------------------------------------------------

let temperature = 30;

switch (true) {
  case temperature < 0:
    console.log("Freezing");
    break;
  case temperature < 20:
    console.log("Cold");
    break;
  case temperature < 30:
    console.log("Warm");
    break;
  default:
    console.log("Hot");
}
// Output: Hot


// ------------------------------------------------------
// 22. Developer tricky question 1 — missing break
// ------------------------------------------------------

let n1 = 1;
switch (n1) {
  case 1:
    console.log("Case 1");
  case 2:
    console.log("Case 2");
  default:
    console.log("Default");
}
// Output:
// Case 1
// Case 2
// Default


// ------------------------------------------------------
// 23. Developer tricky question 2 — false vs 0
// ------------------------------------------------------

let n2 = 0;
switch (n2) {
  case false:
    console.log("false");
    break;
  case 0:
    console.log("zero");
    break;
  default:
    console.log("none");
}
// Output: zero


// ------------------------------------------------------
// 24. Developer tricky question 3 — using expression
// ------------------------------------------------------

let n3 = 3;
switch (n3) {
  case 1 + 2:
    console.log("expression matched");
    break;
  default:
    console.log("no match");
}
// Output: expression matched


// ------------------------------------------------------
// 25. Developer tricky question 4 — variable recheck
// ------------------------------------------------------

let n4 = 2;
switch (n4) {
  case n4:
    console.log("Same variable works");
    break;
  default:
    console.log("No match");
}
// Output: Same variable works


// ------------------------------------------------------
// 26. Developer tricky question 5 — break inside nested switch
// ------------------------------------------------------

let role1 = "user";
let action1 = "login";

switch (role1) {
  case "user":
    switch (action1) {
      case "login":
        console.log("User logged in");
        break;
      default:
        console.log("No user action");
    }
    break;
  default:
    console.log("No role");
}
// Output: User logged in


// ------------------------------------------------------
// 27. Developer tricky question 6 — no default
// ------------------------------------------------------

let z = 100;

switch (z) {
  case 10:
    console.log("Ten");
    break;
  case 20:
    console.log("Twenty");
    break;
}
// Output: nothing


// ------------------------------------------------------
// 28. Developer tricky question 7 — numeric vs string mismatch
// ------------------------------------------------------

let z1 = "10";

switch (z1) {
  case 10:
    console.log("number");
    break;
  case "10":
    console.log("string");
    break;
  default:
    console.log("none");
}
// Output: string


// ------------------------------------------------------
// 29. Developer tricky question 8 — multiple fallthroughs
// ------------------------------------------------------

let n5 = 2;
switch (n5) {
  case 1:
  case 2:
  case 3:
    console.log("1,2,3 handled");
    break;
  default:
    console.log("no match");
}
// Output: 1,2,3 handled


// ------------------------------------------------------
// 30. Developer tricky question 9 — numeric operations
// ------------------------------------------------------

let n6 = 6;
switch (n6 - 1) {
  case 5:
    console.log("result 5");
    break;
  default:
    console.log("default");
}
// Output: result 5


// ------------------------------------------------------
// 31. Developer tricky question 10 — switch inside function
// ------------------------------------------------------

function checkType(val) {
  switch (typeof val) {
    case "string":
      return "String";
    case "number":
      return "Number";
    case "boolean":
      return "Boolean";
    default:
      return "Other";
  }
}
console.log("checkType:", checkType(100));
// Output: checkType: Number


// ------------------------------------------------------
// 32. Developer tricky question 11 — case order with default in middle
// ------------------------------------------------------

let n7 = 3;
switch (n7) {
  default:
    console.log("middle default");
    break;
  case 3:
    console.log("case 3");
    break;
}
// Output: middle default
// Explanation: evaluation stops once first match found; default executed because it's before match and reached earlier


// ------------------------------------------------------
// 33. Developer tricky question 12 — using return instead of break
// ------------------------------------------------------

function testReturn(val) {
  switch (val) {
    case 1: return "One";
    case 2: return "Two";
    default: return "None";
  }
}
console.log("Return test:", testReturn(2));
// Output: Return test: Two


// ------------------------------------------------------
// 34. Developer tricky question 13 — switch(true) used for comparison ranges
// ------------------------------------------------------

let height = 180;

switch (true) {
  case height < 150:
    console.log("Short");
    break;
  case height >= 150 && height < 180:
    console.log("Average");
    break;
  case height >= 180:
    console.log("Tall");
    break;
}
// Output: Tall


// ------------------------------------------------------
// 35. Developer tricky question 14 — case with function return
// ------------------------------------------------------

function giveValue() { return 2; }
let checkVal = 2;

switch (checkVal) {
  case giveValue():
    console.log("Function return matched");
    break;
  default:
    console.log("No match");
}
// Output: Function return matched


// ------------------------------------------------------
// 36. Developer tricky question 15 — logical operator inside case
// ------------------------------------------------------

let val3 = 5;
switch (true) {
  case (val3 > 0 && val3 < 10):
    console.log("Between 1 and 9");
    break;
  default:
    console.log("Outside range");
}
// Output: Between 1 and 9


// ------------------------------------------------------
// 37. Developer tricky question 16 — same string different case
// ------------------------------------------------------

let city = "Delhi";

switch (city.toLowerCase()) {
  case "delhi":
    console.log("Lowercase match");
    break;
  default:
    console.log("No match");
}
// Output: Lowercase match


// ------------------------------------------------------
// 38. Developer tricky question 17 — empty string and space
// ------------------------------------------------------

let input = " ";
switch (input) {
  case "":
    console.log("Empty");
    break;
  case " ":
    console.log("Space");
    break;
  default:
    console.log("Other");
}
// Output: Space


// ------------------------------------------------------
// 39. Developer tricky question 18 — multiple data types
// ------------------------------------------------------

let mixed = true;
switch (typeof mixed) {
  case "string":
    console.log("String type");
    break;
  case "boolean":
    console.log("Boolean type");
    break;
  default:
    console.log("Other type");
}
// Output: Boolean type


// ------------------------------------------------------
// 40. Developer tricky question 19 — nested switch real-world
// ------------------------------------------------------

let permission = "write";
let user = "editor";

switch (user) {
  case "admin":
    console.log("Full access");
    break;
  case "editor":
    switch (permission) {
      case "read":
        console.log("Can read");
        break;
      case "write":
        console.log("Can write");
        break;
      default:
        console.log("Limited access");
    }
    break;
  default:
    console.log("No access");
}
// Output: Can write


// ------------------------------------------------------
// 41. Developer tricky question 20 — default fallthrough
// ------------------------------------------------------

let number = 10;
switch (number) {
  default:
    console.log("default first");
  case 10:
    console.log("case 10");
}
// Output:
// default first
// case 10
// Explanation: no break after default


// ------------------------------------------------------
// 42. Practical challenge — months
// ------------------------------------------------------

let month = 4;
switch (month) {
  case 1: console.log("Jan"); break;
  case 2: console.log("Feb"); break;
  case 3: console.log("Mar"); break;
  case 4: console.log("Apr"); break;
  case 5: console.log("May"); break;
  default: console.log("Other");
}
// Output: Apr


// ------------------------------------------------------
// SUMMARY
// ------------------------------------------------------

console.log("\nSUMMARY:");
console.log("switch → compares one value to many using strict equality");
console.log("break → stops execution, otherwise fall-through continues");
console.log("default → runs if no case matches");
console.log("case values can be constants or expressions");
console.log("multiple cases can share same block");
console.log("switch(true) → useful for range checks");
console.log("Avoid missing breaks unless fall-through is intended");
console.log("Remember: strict comparison (===) → types must match");
