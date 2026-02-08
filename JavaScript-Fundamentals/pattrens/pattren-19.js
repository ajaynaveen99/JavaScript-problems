function numberDiamond(rows) {

    // upper half
    for (let i = 1; i <= rows; i++) {
        let line = "";

        for (let s = 1; s <= rows - i; s++) line += " ";

        for (let n = 1; n <= i; n++) line += n;
        for (let n = i - 1; n >= 1; n--) line += n;

        console.log(line);
    }

    // lower half
    for (let i = rows - 1; i >= 1; i--) {
        let line = "";

        for (let s = 1; s <= rows - i; s++) line += " ";

        for (let n = 1; n <= i; n++) line += n;
        for (let n = i - 1; n >= 1; n--) line += n;

        console.log(line);
    }
}

numberDiamond(4);
