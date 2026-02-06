
function pattrenSeventeen(rows) {
    for (let i = 1; i <= rows; i++) {
        let num = "";
        for (let j = 1; j <= i; j++) {
            num += j
        }
        for (let k = 1; k < 2 * (rows - i); k++) {
            num += " ";
        }
        let dec = i
        for (let r = 1; r <= i; r++) {

            num += dec;
            dec--;

        }
        console.log(num)
    }
}
pattrenSeventeen(5);
/* output
1       1
12     21
123   321
1234 4321
1234554321
*/