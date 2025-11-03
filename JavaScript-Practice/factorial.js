
function factorial(n) {
    let result = 1;
    for ( i = 2; i <= n; i++) {
           
        result =result* i;
    }
    return result;
}

let num = -1;
console.log(`Factorial of ${num} is ${factorial(num)}`);
