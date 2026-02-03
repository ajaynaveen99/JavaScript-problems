function pattrenThirteen(rows) {
    for (let i = 1; i <= rows; i++) {
        let star = "";
        for (let j = 1; j <= rows; j++) {
            if (i == j || i + j == rows + 1) {
                star += "*";
            } else {
                star += " ";
            }
        }
        console.log(star)
    }

}
pattrenThirteen(5)
/* Output

*   *
 * * 
  *
 * *
*   *

*/