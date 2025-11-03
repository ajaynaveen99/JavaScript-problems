function removeLeadingAndTrailingZeros(n) {
  // Convert the string to a number to remove leading zeros
  let num = parseFloat(n);
  
  // Convert the number back to a string and return it
  return num.toString();
}

// Examples
console.log(removeLeadingAndTrailingZeros("000234"));
console.log(removeLeadingAndTrailingZeros("000230.4000")); 
console.log(removeLeadingAndTrailingZeros("3.04000")); 
console.log(removeLeadingAndTrailingZeros("0.000")); 
console.log(removeLeadingAndTrailingZeros("0000"));