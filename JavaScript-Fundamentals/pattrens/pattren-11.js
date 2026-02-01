function PattrenLeven(rows) {
    let mid = Math.floor(rows / 2) + 1;
    for (let i = 1; i <= mid; i++) {
        let star = "";
        for (let j = 1; j <= mid - i; j++) {
            star += " ";
        }
        for (let k = 1; k <= 2 * i - 1; k++) {
            star += "*";
        }
        console.log(star)
    }
    for (let l = mid - 1; l >= 1; l--) {
        let line = "";
        for (let m = 1; m <= mid - l; m++) {
            line += " ";
        }
        for (let n = 1; n <= 2 * l - 1; n++) {
            line += "*"
        }
        console.log(line)
    }
}
PattrenLeven(5);
/* Output
  *
 ***
*****
 ***
  *
*/