"use strict";

// ===========================
// 1 VAR Example
// ===========================
function exampleVar() {
  var name = "Ajay"; 
  // string
  console.log("Before change:", name);

  var name = "Rahul"; 
  // re-declare allowed
  console.log("After re-declare:", name);

  name = "Suresh"; 
  // update allowed
  console.log("After update:", name);

  if (true) {
    var city = "Hyderabad"; 
    // function-scoped, accessible outside block
  }
  console.log("City (accessible outside block):", city);
}

// ===========================
// 2 LET Example
// ===========================
function exampleLet() {
  let age = 25; 
  // number
  console.log("Before change:", age);

  age = 30; 
  // update allowed
  console.log("After update:", age);

  // let age = 35;  cannot re-declare in same scope

  if (true) {
    let city = "Chennai"; 
    // block-scoped
    console.log("Inside block:", city);
  }
  // console.log(city);  Not accessible outside block
}

// ===========================
// 3 CONST Example
// ===========================
function exampleConst() {
  const country = "India"; 
  // string
  console.log("Country:", country);

  // country = "USA";  cannot reassign const

  const numbers = [1, 2, 3]; 
  // array
  console.log("Array:", numbers);

  numbers.push(4); 
  // allowed: modifying content
  console.log("Modified Array:", numbers);

  const person = { name: "Ajay", age: 22 }; 
  // object
  person.age = 23; 
  // allowed: changing property
  console.log("Updated Object:", person);
}

// ===========================
// 4 HOISTING Behavior
// ===========================
function exampleHoisting() {
  console.log("Before var declare:", a); 
  // undefined (var is hoisted)
  var a = 10;
  console.log("After var declare:", a);

  // console.log(b);  Error: Cannot access before initialization
  let b = 20;
  console.log("b =", b);

  // console.log(c);  Error: Cannot access before initialization
  const c = 30;
  console.log("c =", c);
}
exampleVar();
exampleLet();
exampleConst();
exampleHoisting();


