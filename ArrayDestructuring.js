const arr=[1,4,3,5,2]
let [a,b,c,d,f]=arr;
console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(f)
console.log({a,b,c,d,f})
//skip number
let [x,,,,y]=arr;
console.log({x,y})
// default values
let numbers = [10];

let [l= 1, m = 2, n = 3] = numbers;

console.log(l); // Output: 10 (takes the value from the array)
console.log(m); // Output: 2 (default value)
console.log(n); // Output: 3 (default value)
//Swapping variables
let i= 5;
let k= 10;

[i, k] = [k, i]; // Swap values

console.log(i); // Output: 10
console.log(k); // Output: 5
//...rest operator
let numbers1 = [10, 20, 30, 40, 50];

let [a1, b1, ...rest] = numbers1;

console.log(a1); // Output: 10
console.log(b1); // Output: 20
console.log(rest); // Output: [30, 40, 50]
//for -of loop
let colors = ["red", "green", "blue"];
for (let [index, color] of colors.entries()) {
    console.log(color);
  }