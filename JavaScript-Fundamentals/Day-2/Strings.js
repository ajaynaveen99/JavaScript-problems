//========1=============
//-----without using inbuilt functions-----
function rev(str){
    let reversed="";
    for(let i=str.length-1;i>=0;i--){
       reversed=reversed+str[i];
   
    }
     return reversed;
}

console.log(rev("Hello world"));


///-----using inbuilt functions-----
function reverseStr(str){
    return str.split("").reverse().join((""));
}
console.log(reverseStr("Hello world"));
//===============END======================


//========2=============
function capitalize(str){
  return str[0].toUpperCase() + str.slice(1);
}
//======end=========
//======3========
//-----Vowel Count without using inbuilt functions-----
function countVowels(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    let ch = str[i];

    // check both lowercase and uppercase vowels
    if (
      ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u' ||
      ch === 'A' || ch === 'E' || ch === 'I' || ch === 'O' || ch === 'U'
    ) {
      count++;
    }
  }

  return count;
}
console.log(countVowels("AjayNaveen"));
//-----Vowel Count using inbuilt functions-----
function countVowels(str){
  let count = 0;
  for(let char of str){
    if("aeiouAEIOU".includes(char)){
      count++;
    }
  }
  return count;
}
console.log(countVowels("AjayNaveen"));
//=============end========================

//==========4==============
function isPalindrome(str){
  let reversed = str.split("").reverse().join("");
  return str === reversed;
}
console.log(isPalindrome("madam"));
console.log(isPalindrome("hello"));
//============end===================
//==========5=============
function replaceSpaces(str){
  return str.replaceAll(" ", "-");
}
console.log(replaceSpaces("Hello World from JavaScript"));
//============end===================
//==========6=============
function longestWord(sentence){
  let words = sentence.split(" ");
  let longest = "";
  for(let word of words){
    if(word.length > longest.length){
      longest = word;
    }
  }
  return longest;
}
console.log(longestWord("hello world from JavaScript"));
//============end===================
//==========7=============
function repeatString(str, n){
  return str.repeat(n);
}
console.log(repeatString("abc", 3));
//============end===================
//==========8=============
function contains(str, sub){
  return str.includes(sub);
}
console.log(contains("Hello world", "world"));
console.log(contains("Hello world", "JavaScript"));
//============end===================
//==========9=============
function titleCase(sentence){
  return sentence
    .split(" ")
    .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}
console.log(titleCase("hello world from javascript"));
//============end===================
//==========10=============
function removeNonAlpha(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    let ch = str[i];
    if (
      (ch >= 'a' && ch <= 'z') ||
      (ch >= 'A' && ch <= 'Z')
    ) {
      result += ch;
    }
  }

  return result;
}
console.log(removeNonAlpha("Hello, World! 123"));
//============end===================
//=== with inbuilt functions=====
function removeNonAlpha(str){
  return str.replace(/[^a-zA-Z]/g, ""); 
}
console.log(removeNonAlpha("Hello, World! 123"));
//============end===================
