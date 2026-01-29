function pattrenThree(row){

    for(let i=1;i<=row;i++){
            let star="";
            for(let j=1;j<=row-i;j++){
                star+=" ";
            }
            for(let k=1;k<=2*i-1;k++){
                star+="*";

            }
            console.log(star)
        
    }

}
pattrenThree(5)
/* 
Output--------
    *
   ***
  *****
 *******
*********
---------
*/