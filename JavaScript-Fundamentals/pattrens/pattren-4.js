function pattrenFour(rows){
    for(let i=1;i<=rows;i++){
        let star="";
        for(let j=5;j>i;j--){
            star=star+"*"
        }
        console.log(star);
    }
}
pattrenFour(6)

/* 
#output
****
***
**
*
----
*/