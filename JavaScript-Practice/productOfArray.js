function calProduct(arr){
    let prod=1;
    for( let i in arr){
      prod=prod*arr[i];
    }
    return prod;
  }
  let arr=[1,2,3,4,5]
  console.log(calProduct(arr))