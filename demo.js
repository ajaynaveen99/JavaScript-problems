

// //program-->2
// // function reverseString(str){
// //   let reverse="";
// //   for(let i=str.length-1;i>0;i--){
// // reverse+=str[i]

// //   }
// //   return reverse;

// // }

// // console.log(reverseString("helloworld"));

// //program-3
// function sortedArray(arr1,arr2){
//     let sortarr=[];
//     let i=0;
//     let j=0;
//     while(i<arr1.length && j<arr2.length){
//       if(arr1[i]<arr2[j]){
//         sortarr.push(arr1[i])
//         i++;
//       }else{
//         sortarr.push(arr2[j])
//         j++;
//       }
//     }
//     while(i<arr1.length){
//       sortarr.push(arr1[i])
//       i++;
//     }
//     while(j<arr2.length){
//       sortarr.push(arr2[j])
//       j++;
//     }
//     return sortarr;


//    }
//    let arr1=[1,3,5, 13];
//    let arr2=[12,4,9,8];
//    console.log(sortedArray(arr1,arr2));


// ////program-->4
// function text(str){
//     let i;
//     let count=0;
//     for(i=0;i<str.length;i++){

//         if(str[i]=="a"||str[i]== "e" ||str[i]== "i" || str[i]=="o" ||str[i]== "u"){
//             count=count+1
//         }

//     } console.log(count)
// }


// console.log(text("helloworldgoodmarning"));
////program-->5

function between(a, b) {

  let sum = 0;
  for (let i = a; i < b; i++) {
    sum = sum + i;
  } console.log(sum)

}
let a = 2;
let b = 8;
console.log(between(a, b))

