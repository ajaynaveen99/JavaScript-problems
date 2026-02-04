function pattrenFourteen(rows) {

    for (let i = 1; i <= rows; i++) {
        let star = "";
        for (let j = 1; j < i; j++) {
            star += " ";
        }
        for (let k = 1; k <= 9 - 2 * (i - 1); k++) {
            star += "*";
        }
        console.log(star)
    }
    for (let i = rows - 1; i >= 1; i--) {
        let star = "";
        for (let j = 1; j < i; j++) {
            star += " ";
        }
        for (let k = 1; k <= 9 - 2 * (i - 1); k++) {
            star += "*";
        }
        console.log(star)
    }


}
pattrenFourteen(5)

/* Output
*********
 *******
  *****
   ***
    *
   ***
  *****
 *******
*********
 
*/