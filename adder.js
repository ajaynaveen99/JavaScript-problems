function adder(x){
     return function(n){
     return x+n;
}}
let add=adder(10)
console.log(add(20))