
function pattrenSeventeen(rows) {
    for (let i = 1; i <= rows; i++) {
        let num = "";
        for (let j = 1; j <= i; j++) {
            num += j
        }
        for (k = 1; k < 2 * (rows - i); k++) {
            num += " ";
        }
        let dsec = i
        for (let r = 1; r <= i; r++) {

            num += dsec;
            dsec--;

        }
        console.log(num)
    }

}
pattrenSeventeen(5)

/* output
1       1
12     21
123   321
1234 4321
1234554321
*/