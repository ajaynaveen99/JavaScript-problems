// =====================================
// 1 NUMBER
// =====================================
console.log("=== Number Examples ===");

let num1 = 123;
let num2 = 12.345;
let sum = num1 + num2;
let diff = num1 - num2;
let product = num1 * 2;
let quotient = num1 / 2;

console.log(num1, typeof num1);
console.log(num2, typeof num2);
console.log(sum, typeof sum);
console.log(diff, typeof diff);
console.log(product, typeof product);
console.log(quotient, typeof quotient);

let infinityExample = 1 / 0;
let negativeInfinity = -1 / 0;
let notANumber = "abc" / 3;

console.log(infinityExample, typeof infinityExample);
console.log(negativeInfinity, typeof negativeInfinity);
console.log(notANumber, typeof notANumber);
console.log(NaN + 1, typeof (NaN + 1));
console.log(2 ** 4, typeof (2 ** 4));


// =====================================
// 2 BIGINT
// =====================================
console.log("\n=== BigInt Examples ===");

const bigNum1 = 1234567890123456789012345678901234567890n;
const bigNum2 = 100000000000000000000000000000n;
const bigSum = bigNum1 + bigNum2;
const bigDiff = bigNum1 - bigNum2;
const bigProduct = 200000n * 30000n;

console.log(bigNum1, typeof bigNum1);
console.log(bigNum2, typeof bigNum2);
console.log(bigSum, typeof bigSum);
console.log(bigDiff, typeof bigDiff);
console.log(bigProduct, typeof bigProduct);


// =====================================
// 3 STRING
// =====================================
console.log("\n=== String Examples ===");

let str1 = "Hello";
let str2 = 'World';
let str3 = `JavaScript`;
let str4 = `Sum of 5 + 10 is ${5 + 10}`;
let str5 = `Uppercase: ${str1.toUpperCase()}`;
let str6 = "";
let str7 = "A";

console.log(str1, typeof str1);
console.log(str2, typeof str2);
console.log(str3, typeof str3);
console.log(str4, typeof str4);
console.log(str5, typeof str5);
console.log(str6, typeof str6);
console.log(str7, typeof str7);


// =====================================
// 4 BOOLEAN
// =====================================
console.log("\n=== Boolean Examples ===");

let isAdult = true;
let isStudent = false;
let isGreater = 10 > 5;
let isSmaller = 5 < 2;
let isEqual = 10 === 10;
let isNotEqual = 5 !== 10;

console.log(isAdult, typeof isAdult);
console.log(isStudent, typeof isStudent);
console.log(isGreater, typeof isGreater);
console.log(isSmaller, typeof isSmaller);
console.log(isEqual, typeof isEqual);
console.log(isNotEqual, typeof isNotEqual);


// =====================================
// 5 NULL
// =====================================
console.log("\n=== Null Examples ===");

let userAge = null;
let userLocation = null;

console.log(userAge, typeof userAge);
console.log(userLocation, typeof userLocation);


// =====================================
// 6 UNDEFINED
// =====================================
console.log("\n=== Undefined Examples ===");

let username;
let city = undefined;

console.log(username, typeof username);
console.log(city, typeof city);


// =====================================
// 7  SYMBOL
// =====================================
console.log("\n=== Symbol Examples ===");

const id1 = Symbol("id");
const id2 = Symbol("id");
const uniqueKey = Symbol("key");

console.log(id1, typeof id1);
console.log(id2, typeof id2);
console.log(id1 === id2, typeof (id1 === id2));

const user = {
  [id1]: "UserOne",
  name: "Ajay"
};

console.log(user[id1], typeof user[id1]);
console.log(user.name, typeof user.name);


// =====================================
// 8 OBJECT
// =====================================
console.log("\n=== Object Examples ===");

let person = {
  name: "Siddarth",
  age: 25,
  isStudent: true
};

let book = {
  title: "JavaScript Basics",
  pages: 250
};

console.log(person, typeof person);
console.log(book, typeof book);
console.log(person.name, typeof person.name);
console.log(person.age, typeof person.age);

let colors = ["red", "green", "blue"];
console.log(colors, typeof colors);
console.log(colors[1], typeof colors[1]);

function greet() {
  return "Hello from function";
}
console.log(greet, typeof greet);
console.log(greet(), typeof greet());


// =====================================
//  typeof OPERATOR ALL-IN-ONE CHECK
// =====================================
console.log("\n=== typeof Summary ===");

console.log(typeof 100);
console.log(typeof 12.5);
console.log(typeof 10n);
console.log(typeof "Hello");
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof Symbol("id"));
console.log(typeof {});
console.log(typeof []);
console.log(typeof function() {});
