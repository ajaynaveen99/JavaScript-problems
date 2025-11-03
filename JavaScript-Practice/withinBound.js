function validateNumber(n, lower, upper) {
    if (!Number.isInteger(n)) {
        return false;
    } else if (n < lower) {
        return false;
    } else if (n > upper) {
        return false;
    } else {
        return true;
    }
}


console.log(validateNumber(5, 1, 10));  
console.log(validateNumber(0, 1, 10));  
console.log(validateNumber(15, 1, 10)); 
console.log(validateNumber('5', 1, 10)); 
