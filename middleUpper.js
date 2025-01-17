function middleCharUpper(input) {
    if (typeof input !== 'string') {
        return "Input is not a string";
    }

    const midIndex = Math.floor(input.length / 2);//math.floor is remove the float points
    if (input.length % 2 === 0) {
        return input[midIndex - 1].toUpperCase() + input[midIndex].toUpperCase();
    } else {
        return input[midIndex].toUpperCase();
    }
}

console.log(middleCharUpper("example"));  // Output: "M"
console.log(middleCharUpper("testing"));  // Output: "TI"
console.log(middleCharUpper(12345));      // Output: "Input is not a string"
