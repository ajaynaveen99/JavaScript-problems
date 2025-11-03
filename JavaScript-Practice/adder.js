// function adder(x){
//      return function(n){
//      return x+n;
// }}
// let add=adder(10)
// console.log(add(20))


function check(Name,Name1){
     if(Name.length!==Name1.length){
          console.log("not  a anagram")
     }
     else{
          let str=Name.split('').sort().join('');
          let str1=Name1.split('').sort().join('');
          if(str===str1){
               console.log("matched")
          }
          else{
               console.log("not matched")
          }
     }

}



check('abc','cba')
