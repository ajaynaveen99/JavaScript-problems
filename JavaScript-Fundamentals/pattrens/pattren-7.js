function pattrenSeven(rows){
    for(let i=1;i<=rows;i++){
        let star="";
        for(let j=1;j<=i;j++){
            if(i==1||i==2||i==rows){
            star=star+"*";
            }else if(j==1 ||j==i){
                star=star+"*";
            
            }
            else{
                star+=" ";
            }

        }
        console.log(star)
    }

}
pattrenSeven(6);
/* OutPut
*
**
* *
*  *
*   *
******

*/