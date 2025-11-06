
// ======================================================
// Covers: while, do..while, for, break, continue, labels,
// prefix/postfix confusion, infinite loops, tricky cases.
// ======================================================


// ------------------------------------------------------
// 1. Basic while loop
// ------------------------------------------------------

let i = 0;
while (i < 3) {
  console.log("while:", i);
  i++;
}

// ------------------------------------------------------
// 2. Short form single-line while
// ------------------------------------------------------

let j = 3;
while (j) console.log("short while:", j--);

// ------------------------------------------------------
// 3. while with non-boolean condition
// ------------------------------------------------------

let n = 3;
while (n) {
  console.log("Value:", n);
  n--; // loop stops when n becomes 0 (falsy)
}

// ------------------------------------------------------
// 4. do..while — runs at least once
// ------------------------------------------------------

let k = 0;
do {
  console.log("do..while:", k);
  k++;
} while (k < 3);

// ------------------------------------------------------
// 5. do..while executes body before checking condition
// ------------------------------------------------------

let val = 5;
do {
  console.log("Executed even if false");
} while (val < 0);

// ------------------------------------------------------
// 6. for loop — classic syntax
// ------------------------------------------------------

for (let i = 0; i < 3; i++) {
  console.log("for:", i);
}

// ------------------------------------------------------
// 7. for loop — inline declaration vs external variable
// ------------------------------------------------------

let x = 0;
for (; x < 3; x++) {
  console.log("external var:", x);
}
console.log("x after loop:", x); // visible outside

// ------------------------------------------------------
// 8. Omitting parts (begin, step)
// ------------------------------------------------------

let y = 0;
for (; y < 3;) {
  console.log("no step:", y);
  y++;
}

// ------------------------------------------------------
// 9. Infinite loop example (stopped by break)
// ------------------------------------------------------

let count = 0;
while (true) {
  count++;
  if (count === 3) break;
  console.log("infinite style loop count:", count);
}

// ------------------------------------------------------
// 10. Using break
// ------------------------------------------------------

for (let i = 1; i <= 5; i++) {
  if (i === 4) break;
  console.log("break example:", i);
}

// ------------------------------------------------------
// 11. Using continue
// ------------------------------------------------------

for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) continue; // skip even
  console.log("odd number:", i);
}

// ------------------------------------------------------
// 12. Nested loops with label
// ------------------------------------------------------

outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) break outer;
    console.log(`labelled loop i=${i}, j=${j}`);
  }
}
console.log("Exited outer loop");

// ------------------------------------------------------
// 13. continue with label
// ------------------------------------------------------

outerLoop: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (j === 1) continue outerLoop;
    console.log(`continue label -> i=${i}, j=${j}`);
  }
}

// ------------------------------------------------------
// 14. Prefix (++i) vs Postfix (i++)
// ------------------------------------------------------

let a = 0;
while (++a < 5) console.log("prefix:", a); // prints 1,2,3,4

let b = 0;
while (b++ < 5) console.log("postfix:", b); // prints 1,2,3,4,5

// ------------------------------------------------------
// 15. Convert while to for (same logic)
// ------------------------------------------------------

let w = 0;
for (; w < 3;) {
  console.log("while converted:", w);
  w++;
}

// ------------------------------------------------------
// 16. Infinite for loop with manual break
// ------------------------------------------------------

let total = 0;
for (;;) {
  total++;
  if (total === 3) break;
}
console.log("total:", total);

// ------------------------------------------------------
// 17. while vs do..while difference
// ------------------------------------------------------

let check = 5;
while (check < 5) console.log("while never runs");

do {
  console.log("do..while runs once");
} while (check < 5);

// ------------------------------------------------------
// 18. Real example — sum until zero entered (simulate)
// ------------------------------------------------------

let numbers = [5, 3, 0];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === 0) break;
  sum += numbers[i];
}
console.log("Sum before zero:", sum);

// ------------------------------------------------------
// 19. Skip iteration with continue
// ------------------------------------------------------

for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log("continue example:", i);
}

// ------------------------------------------------------
// 20. Developer tricky question 1 — loop variable scope
// ------------------------------------------------------

for (let i = 0; i < 2; i++) {
  setTimeout(() => console.log("let i:", i), 0);
}
for (var j = 0; j < 2; j++) {
  setTimeout(() => console.log("var j:", j), 0);
}
// Explanation: let keeps block scope, prints 0,1. var is function scoped → prints 2,2.

// ------------------------------------------------------
// 21. Developer tricky question 2 — modifying variable inside
// ------------------------------------------------------

for (let i = 0; i < 5; i++) {
  console.log("i start:", i);
  if (i === 2) i += 2; // jump ahead
  console.log("i end:", i);
}
// Explanation: modifying counter inside body changes flow unpredictably.

// ------------------------------------------------------
// 22. Developer tricky question 3 — nested break/continue logic
// ------------------------------------------------------

outerCheck: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i === j) continue outerCheck;
    console.log(`outerCheck -> i=${i}, j=${j}`);
  }
}
// Explanation: continue outerCheck jumps to next i immediately when i===j.

// ------------------------------------------------------
// 23. Developer tricky question 4 — while with falsy check
// ------------------------------------------------------

let num = 3;
while (num) {
  console.log("falsy test:", num);
  num--;
}
// Explanation: while converts num to boolean; stops when num===0 (falsy).

// ------------------------------------------------------
// 24. Developer tricky question 5 — loop conversion logic
// ------------------------------------------------------

let p = 0;
while (++p < 3) console.log("while prefix:", p);
// Equivalent for-loop:
for (let q = 1; q < 3; q++) console.log("for version:", q);

// ------------------------------------------------------
// 25. Developer tricky question 6 — multiple counters
// ------------------------------------------------------

for (let i = 0, j = 5; i < j; i++, j--) {
  console.log(`two vars -> i=${i}, j=${j}`);
}
// Explanation: both counters move toward each other.

// ------------------------------------------------------
// 26. Developer tricky question 7 — infinite loop safety
// ------------------------------------------------------

let loopCount = 0;
for (;;) {
  loopCount++;
  if (loopCount > 3) break;
}
console.log("infinite safety:", loopCount);

// ------------------------------------------------------
// 27. Developer tricky question 8 — while with object
// ------------------------------------------------------

let obj = { key: "value" };
while (obj) {
  console.log("object is truthy once");
  obj = null; // to stop loop
}
// Explanation: all objects are truthy. Must nullify or break manually.

// ------------------------------------------------------
// 28. Developer tricky question 9 — combining break & continue
// ------------------------------------------------------

for (let i = 0; i < 6; i++) {
  if (i === 2) continue;
  if (i === 5) break;
  console.log("mixed break/continue:", i);
}
// Explanation: skips 2, stops entirely at 5.

// ------------------------------------------------------
// 29. Developer tricky question 10 — nested while increments
// ------------------------------------------------------

let outer = 0;
while (outer < 2) {
  let inner = 0;
  while (inner < 2) {
    console.log(`nested -> outer=${outer}, inner=${inner}`);
    inner++;
  }
  outer++;
}
// Explanation: nested loops → 4 total prints.

// ------------------------------------------------------
// 30. Developer tricky question 11 — condition evaluated before loop
// ------------------------------------------------------

let test = 0;
while (test < 0) console.log("never executes");
do {
  console.log("executes once");
} while (test < 0);

// ------------------------------------------------------
// 31. Developer tricky question 12 — increment position impact
// ------------------------------------------------------

for (let i = 0; i < 5;) {
  console.log("position:", i);
  i += 2;
}
// Explanation: custom step inside body → prints 0,2,4.

// ------------------------------------------------------
// 32. Developer tricky question 13 — infinite recursion style
// ------------------------------------------------------

let counter = 0;
while (true) {
  if (counter === 3) break;
  console.log("safe infinite:", counter);
  counter++;
}

// ------------------------------------------------------
// 33. Developer tricky question 14 — break inside function
// ------------------------------------------------------

function testBreak() {
  for (let i = 0; i < 3; i++) {
    if (i === 1) break;
    console.log("function break:", i);
  }
}
testBreak();

// ------------------------------------------------------
// 34. Developer tricky question 15 — label with continue
// ------------------------------------------------------

outerMost: for (let i = 0; i < 2; i++) {
  inner: for (let j = 0; j < 3; j++) {
    if (j === 1) continue outerMost;
    console.log(`label continue i=${i} j=${j}`);
  }
}
// Explanation: when j===1, control jumps to next i.

// ------------------------------------------------------
// 35. Developer tricky question 16 — while using assignment
// ------------------------------------------------------

let arr = [3, 2, 1];
let val2;
while ((val2 = arr.pop())) {
  console.log("pop value:", val2);
}
// Explanation: loop runs while assignment returns truthy value; stops when undefined.

// ------------------------------------------------------
// 36. Developer tricky question 17 — do..while with false start
// ------------------------------------------------------

let flag = false;
do {
  console.log("runs once even though flag is false");
} while (flag);

// ------------------------------------------------------
// 37. Developer tricky question 18 — decreasing for loop
// ------------------------------------------------------

for (let i = 3; i > 0; i--) {
  console.log("reverse:", i);
}
// Explanation: good pattern for backward iteration (safe removal from arrays).

// ------------------------------------------------------
// 38. Developer tricky question 19 — nested continue
// ------------------------------------------------------

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (j === 1) continue;
    console.log(`nested continue -> i=${i} j=${j}`);
  }
}

// ------------------------------------------------------
// 39. Developer tricky question 20 — using break in while(true)
// ------------------------------------------------------

let sumNum = 0;
let values = [10, 20, null];
while (true) {
  let v = values.shift();
  if (!v) break;
  sumNum += v;
}
console.log("sum using while(true):", sumNum);

// ------------------------------------------------------
// 40. Practice Challenge — write output prediction
// ------------------------------------------------------
// Q1: What does this print?
let t = 0;
while (t++ < 3) console.log("Q1:", t);
// Explanation: prints 1,2,3

// Q2: Difference between ++t and t++
let p1 = 0;
while (++p1 < 3) console.log("Q2:", p1); // prints 1,2
let p2 = 0;
while (p2++ < 3) console.log("Q3:", p2); // prints 1,2,3

// Q3: for with two steps
for (let i = 0; i < 5; i += 2) console.log("Q4:", i); // 0,2,4

// Q4: while assignment pattern
let line;
let data = ["a", "b", undefined];
while ((line = data.shift())) console.log("Q5:", line);
// prints a,b

// Q5: label exit
exitAll:
for (let i = 0; i < 2; i++) {
  for (let j = 0; j < 2; j++) {
    if (i === 1 && j === 0) break exitAll;
    console.log(`Q6 -> i=${i} j=${j}`);
  }
}
console.log("Q6: exited loops successfully");


// ------------------------------------------------------
// End of file summary
// ------------------------------------------------------

console.log("\nSUMMARY:");
console.log("while → condition first");
console.log("do..while → body first, runs at least once");
console.log("for → condition + step in one line");
console.log("break → exit loop");
console.log("continue → skip current iteration");
console.log("label → control nested loops carefully");
console.log("Common mistakes: missing increments, prefix/postfix confusion, var/let scope issues");
