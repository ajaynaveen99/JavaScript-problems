function PattrenTwelve(rows) {
    let mid = Math.floor(rows / 2) + 1
    for (let i = 1; i <= mid; i++) {
        let star = "";
        for (let j = 1; j <= mid - i; j++) {
            star += " ";
        }
        for (let k = 1; k <= 2 * i - 1; k++) {
            if (i == 1 || k == 1 || k == 2 * i - 1) {
                star += "*";
            } else {
                star += " ";
            }
        }
        console.log(star);
    }
    for (let a = mid - 1; a >= 1; a--) {
        let line = "";
        for (let b = 1; b <= mid - a; b++) {
            line += " ";
        }
        for (let c = 1; c <= 2 * a - 1; c++) {
            if (c == 1 || a == 1 || c == 2 * a - 1) {
                line += "*";
            } else {
                line += " "
            }

        }
        console.log(line)


    }


}
PattrenTwelve(5)


/* Output
    *
   * *
  *   *
   * *
    *
*/