
function PattrenEight(rows){

    for(let i=rows;i>=1;i--){
        star="";
        for(j=0;j<rows-i;j++){
            star+=" ";
        }
        for(k=1;k<=2*i-1;k++){
            star+="*"
        }
        console.log(star);
    }
}
PattrenEight(5

)

/* output
*********
 *******
  *****
   ***
    *
*/