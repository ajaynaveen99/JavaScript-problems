function check(input){
   let result=Number(input);
    if(!isNaN(result))
    {
        console.log(result+" ->is a number")
    }else{
        console.log(result+" ->it is a not number")
    }

}
check("1234")
check("abc"); 
check("3.14");