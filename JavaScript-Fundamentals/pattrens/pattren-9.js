function parttrenNine(rows){
    for(let i=1;i<=rows;i++){
        let star="";
        for(let j=1;j<=rows-i;j++){
            star+=" ";
        }
        for(let k=1;k<=2*i-1;k++){
            if(i==1||i==rows||k==1||k==2*i-1){
            star+="*"
    }else {
        star+=" ";
    }
    }
    console.log(star)
}
}
parttrenNine(5)
/* Output
    *
   * *
  *   *
 *     *
*********
 */