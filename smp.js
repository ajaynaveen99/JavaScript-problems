// function gcd(num1,num2)
// {
//   while(num1 != num2){
    
    
//     if(num1 > num2){
     
//       num1 = num1 - num2;
//     }else{
    
//       num2 = num2 - num1;
//     }
//   }
  
//   return num2;
// }
// console.log(gcd(60, 15));
// console.log(gcd(60, 36));
////program--2

// function calculateSquareRoot(number) {
//     return Math.sqrt(number);
// }

// let num = 25;
// console.log("The square root of " + num + " is " + calculateSquareRoot(num));
//// program-3
function getType(input) {
    return typeof input;
}

let value = 42;
console.log("The type of the input is " + getType(value));
