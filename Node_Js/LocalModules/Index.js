// let importedFunctionAndVariable=require(`./localModule.js`);
// console.log(importedFunctionAndVariable.name);
// console.log(importedFunctionAndVariable.add(5,3));
// console.log(importedFunctionAndVariable.subtract(5,3));
const {name,add,subtract}=require(`./localModule.js`);
console.log(name);
console.log(add(10,20));
console.log(subtract(10,5));