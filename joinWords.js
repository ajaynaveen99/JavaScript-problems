function joinWords(str, delimiter) {
    return str.split(' ').join(delimiter);
}

// Example usage:
const sentence = "well come to my world of computer science";
const delimiter = "'";// it's add each word 
const result = joinWords(sentence, delimiter);
console.log(result); 
