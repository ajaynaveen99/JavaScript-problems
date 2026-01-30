function pattrenSix(rows){
    for(let i=1;i<=rows;i++){
        let star="";
        for(let j=1;j<=rows;j++){

            if(i==1 || i==rows){
                star=star+"*";
                
            }
            else if(j==1 || j==rows){
                star=star+"*";
            }else{
                star=star+" ";
            }
        }
        console.log(star)
    }

}
pattrenSix(7)

/* Output
*****
*   *
*   *
*   *
*****
*/