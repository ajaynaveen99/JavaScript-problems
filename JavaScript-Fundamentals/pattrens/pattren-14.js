function pattrenFourteen(rows) {

    for (let i = 1; i < rows; i++) {
        let num = "";
        for (let j = 1; j <= rows - i; j++) {
            num += " ";
        }
        for (let k = 1; k <= 2 * i - 1; k++) {
            if (k <= i) {
                num += k
            } else {
                num += i - (k - i)
                console.log("" + 5 - 4)

            }
        }
        console.log(num)

    }

}
pattrenFourteen(5);