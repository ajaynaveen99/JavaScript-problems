// ===========================
//  ALERT Example
// ===========================
function showAlert() {
  alert("Welcome to JavaScript!");
  let user = "Ajay";
  alert(`Hello ${user}!`);
}

// ===========================
// 2 PROMPT Example
// ===========================
function askUserName() {
  let name = prompt("What is your name?", "Guest");
  console.log("Name:", name);
  console.log("Type:", typeof name);

  let age = prompt("Enter your age:", "18");
  console.log("Age (string):", age, typeof age);

  let ageNumber = Number(age);
  console.log("Age (number):", ageNumber, typeof ageNumber);
}

// ===========================
// 3  CONFIRM Example
// ===========================
function checkAdult() {
  let isAdult = confirm("Are you 18 years or older?");
  console.log("User clicked:", isAdult);
  console.log("Type:", typeof isAdult);

  if (isAdult) {
    alert("Welcome adult user!");
  } else {
    alert("Sorry, you must be 18+ to continue.");
  }
}

// ===========================
// 4 COMBINED Example
// ===========================
function userInteraction() {
  alert("Welcome to our website!");
  let name = prompt("What's your name?", "Guest");
  let isSure = confirm(`Are you sure your name is ${name}?`);

  if (isSure) {
    alert(`Nice to meet you, ${name}!`);
  } else {
    alert("Okay, maybe next time!");
  }

  console.log("Name:", name, typeof name);
  console.log("Confirmed:", isSure, typeof isSure);
}
