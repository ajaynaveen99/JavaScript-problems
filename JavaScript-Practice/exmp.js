// // "use strict"

// // console.log(a);
// //  const a=100;
// // console.log(a);

// //// Type-1 basic oparation maths
// //pawer a**b is a power b
// console.log(2 ** 2); // 2² = 4
// console.log(2 ** 3); // 2³ = 8
// console.log(2 ** 4); // 2⁴ = 16
// console.log(4 ** (1 / 2))  // 2 (power of 1/2 is the same as a square root)
// console.log(8 ** (1 / 3))// 2 (power of 1/3 is the same as a cubic root)


// // T-2 string concatenation with binary
// let fistName = 'v' + 'ajay'
// console.log(fistName);
// console.log('1' + 2 + 3) // 1 is converted to number 
// console.log(1 + 2 + '3')//last 3  not converted to number then it is consider string
// console.log(1 + "2" + 3)


// //  T-3 Numeric conversion, unary +
// // No effect on numbers
// let x = 1;
// console.log( +x ); // 1

// let y = -2;
// console.log( +y ); // -2

// // Converts non-numbers
// console.log( +true ); // 1
// console.log( +"" );   // 0
// let a="1";
// let b="2";
// console.log(a+b) 
// console.log(+a+ +b)//but when use unary oparator get 3

// t-4 assignment
let m=5;
let n=10;
let r=20-(n=m+15);
console.log(n);
console.log(r);

let a,b,c;
a=b=c=2+2;
console.log(a)
console.log(b);
console.log(c)

let counter = 0;
counter++;
counter=10;
++counter;
counter++
console.log( counter++ );
console.log(counter);//13

let coun=1;
console.log(2*++coun);
console.log(2*coun++)
