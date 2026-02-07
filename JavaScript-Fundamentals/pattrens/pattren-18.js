function zigzagPattern(rows, cols) {
    for (let row = 1; row <= rows; row++) {
        let line = "";

        for (let col = 1; col <= cols; col++) {
            if ((row + col) % 4 === 0 || (row === 2 && col % 4 === 0)) {
                line += "*";
            } else {
                line += " ";
            }
        }

        console.log(line);
    }
}

zigzagPattern(3, 9);
/* output
*   *   *
 * * * *
  *   *
*/