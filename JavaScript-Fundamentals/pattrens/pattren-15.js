function pattrenFourteen(rows) {

    for (let i = rows; i >= 1; i--) {
        let star = "";
        for (let j = 1; j <= rows - i; j++) {
            star += " ";
        }
        for (let k = 1; k <= 2 * i - 1; k++) {
            star += "*";
        }
        console.log(star)
    }
    for (let i = 2; i <= rows; i++) {
        let star = "";
        for (let j = 1; j <= rows - i; j++) {
            star += " ";
        }
        for (let k = 1; k <= 2 * i - 1; k++) {
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