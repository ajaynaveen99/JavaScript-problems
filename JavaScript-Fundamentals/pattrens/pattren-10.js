//self written code (X)
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
/* Optimal solution is


*/function patternPlus(rows) {
    let mid = Math.floor(rows / 2) + 1;
    console.log(mid);

    for (let i = 1; i <= rows; i++) {
        let line = "";

        for (let j = 1; j <= rows; j++) {
            if (i === mid || j === mid) {
                line += "*";
            } else {
                line += " ";
            }
        }

        console.log(line);
    }
}

patternPlus(5);
