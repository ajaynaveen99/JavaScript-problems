function PattrenTen(rows) {
    for (let i = 1; i <= rows; i++) {
        let star = "";
        for (let j = 1; j <= Math.floor(rows / 2); j++) {
            if (i == 4) {
                continue;
            }
            star += " ";
        }
        for (let k = 1; k <= rows; k++) {
            if (i == 4) {
                star += "*"
            } else if (k == 1) {
                star += "*";
            }
            else {
                star += " ";
            }
        }
        console.log(star)
    }
}
PattrenTen(7)
/* Output (+) 

   *      
   *      
   *      
*******   
   *      
   *      
   *


*/