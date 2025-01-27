function countNum(num){
    let count=0;
    if(num<0){
        num=-num;
    }
      
   
    while(num>0){
        count++;
        num=Math.floor(num/10);
        
    }
    if(count==0){
        return 1
}
    return count;
   
    }
   
console.log(countNum(19230));
console.log(countNum(0));
console.log(countNum(-2342319230));

//// type-2 using length
// function countNum(num){
//     console.log(num.toString().length())
// }
// countNum(932842);
 
