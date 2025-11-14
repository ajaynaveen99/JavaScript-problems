// function bubbleSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length - 1; j++) {
//       if (arr[j] > arr[j + 1]) {////o//2>1//1=//2>5//2//5>3//3//5>1//0//
//         let temp = arr[j];//temp=2//5//5
//         arr[j] = arr[j + 1];//1//3//1
//         arr[j + 1] = temp;//2//5//5
//       }
//     }
//   }
//   return arr;
// }
// arr=[2,1,5,3,1]//arr[1,2,3,1,5]
// console.log(bubbleSort(arr))
// //maximum
// let max=(arr)=>{
//   let maximum =0;

//   for(let i of arr){
//     if(maximum<i)

//     maximum=i;
    
//   }
//   return maximum;
  
// }
 
// console.log(max([2,5,7,9,2,10]))


// //secMax
// let secmax=(arr)=>{
//   let maximum =0;
//   let secondMax;
//   for(let i of arr){
//     if(maximum<i){
//     secondMax=maximum;//0//2//5//7//9
//       maximum=i;//2//5//7//9//10
//     }
//   }
//   return {secondMax,maximum};
  
// }
 
// console.log(secmax([2,5,7,9,2,10]))
 
// //product of Odd arr
// ProdOdd=(arr)=>{
//   let prod=1;
//   for(let i of arr){
//     if(i%2!=0){
//       prod*=i
       
//     }
//   }
//   return prod;
   
// }
// console.log(ProdOdd([1,2,3,4,5,6,7,8]))
 
// //
// const frequentInArray=(array)=>{
//   let obj={};
//   for(element of array){//1//-3//2//1
//     if(obj[element]){//undefined-false
//       obj[element]=obj[element]+1//obj={1:3}
//     }else{
//       obj[element]=1;//obj={1:1 ,-3:1, 2:1}
//     }
//   }
//   console.log(obj)
//   let result=0;
//   let prop;
// for(key in obj ){
//   if(result<obj[key]){//true
//     result=obj[key];//3
//     prop=key;//1
//   }
// }
// return `${prop} is ${result}`
// }
// console.log(frequentInArray( [ 1,-3,2,1, 8, 7, 6, 5, -4, 3, 2, 1 ])

//=======Array Methods========
array=[1,20,3,40,5,60,7,80,9]
//==-push-1
array.push(100)
console.log(array)
//===unshift-2
array.unshift(-10)
console.log(array)
//====pop()-3
array.pop()
console.log(array)
//===shift-4
array.shift()
console.log(array)
//====splice(startIndex, deleteCount, item1, item2, …)-5
let remove=array.splice(2,2)//start index 2 and delete 2-elements 3,40 => store saparate arr
 console.log(array)
 console.log(remove)
 //replace element
 array.splice(1,1,50)
 console.log  (array)
 //add perticulerIndex for element
 array.splice(2,0,99)
 console.log  (array)
 //replace multiple elements
 array.splice(5,2,88,50)
 console.log  (array)
 //====indexOf-6
 console.log(array.indexOf(50))//it's tacken first accurence indexOf
 console.log(array.lastIndexOf(50))//take last indexOf
 //===includes--7
 console.log(array.includes(9))//check whether exits or not
  console.log(array.includes(90))
  
//=== map-method input callback-fun//output newarray==>8
ar=[1,2,3,4]
let  newArr= ar.map(x => x*2); 
console.log(newArr)
//===filter returen new array when condition is pass--9
 let filterArr=[1,2,3,4,5,6,7]
let newFilterArr=filterArr.filter(x=>x%2===0)
console.log(newFilterArr)
//===reduce method input callback-fun/output newArr-10
let reduceArry =[1,3,5,7,9]
let sum=reduceArry.reduce((total,x)=>total+x,0)
console.log(sum)
//===some() tacke a callback-fun as input return Boolean value when one element is match-11
SomeArr=[30,46,90,86]
result=SomeArr.some(x=>x>89)//one value match return true
console.log(result)
//=====every()same as above but every should satisfy-12
everyArr=[30,46,90,86]
result=everyArr.every(x=>x>35)//all value match return true
console.log(result)
//===find input as callback-fun return where should match element-13
let findAr = [10,20,30].find(x => x > 15);
console.log(findAr)
let findIndexAr = [10,20,30].findIndex(x => x > 15);
console.log(findIndexAr)