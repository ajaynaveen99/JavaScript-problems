
//Creating Object
let person = {
  name: "John",       // key: "name", value: "John"
  age: 25,            // key: "age", value: 25
  isStudent: true     // key: "isStudent", value: true
};
console.log(person.name); // Output: John
console.log(person.age);  // Output: 25
console.log(person["name"]); // Output: John
console.log(person["age"]);  // Output: 25

//creating method
let person1 = {
  name: "John",
  age: 25,
  isStudent: true,
  greet: function() {  // Method (a function inside an object)
    console.log("Hello, my name is " + this.name); // `this` refers to the object
  }
};

person1.greet(); // Output: Hello, my name is John


let person2 = {
  name: "John",
  age: 25,
  address: {  // Nested object
    city: "New York",
    country: "USA"
  }
};

console.log(person2.address.city); // Output: New York
//</>
let person3 = {
  name: "John",
  age: 25
};

// Update a property
person3.age = 30;
console.log(person.age); // Output: 30

// Add a new property
person3.job = "Developer";
console.log(person3.job); // Output: Developer


//</>
let person4 = {
  name: "John",
  age: 25
};

delete person4.age;
console.log(person4.age); // Output: undefined (property is deleted)
//</>
let person5 = {
  name: "John",
  age: 25,
  isStudent: true
};

for (let key in person5) {
  console.log(key + ": " + person5[key]);
}






















// function printObjectKeys(obj) {
//     for (let key in obj) {
//       if (obj.hasOwnProperty(key)) {
//         console.log(key);
//       }
//     }
//   }
  
  
//   let exampleObject = {
//     name: 'ajay',
//     age: 30,
//     city: 'banglore'
//   };
  
//   printObjectKeys(exampleObject);

  