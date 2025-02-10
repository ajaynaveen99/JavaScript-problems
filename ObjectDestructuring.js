// Example 1: Basic Destructuring
const user = { name: "Ajay", age: 23 };
const { name, age } = user;
console.log(name);
console.log(age);

// Example 2: Renaming Variables
const person = { uname: "AjayNaveen", mail: "ajay@example.com" };
const { uname: u, mail: m } = person;
console.log(u);
console.log(m);

// Example 3: Default Values
const data = { name: "Ak" };
const { name: n, age: a = 30 } = data;
console.log(n);
console.log(a);

// Example 4: Nested Object Destructuring
const info = { name: "Bob", addr: { city: "NY", zip: 10001 } };
const { name: nm, addr: { city, zip } } = info;
console.log(nm);
console.log(city);
console.log(zip);

// Example 5: Destructuring in Function Parameters
function show({ brand, model }) {
    console.log(`Brand: ${brand}, Model: ${model}`);
}
const car = { brand: "Tesla", model: "M3" };
show(car);
