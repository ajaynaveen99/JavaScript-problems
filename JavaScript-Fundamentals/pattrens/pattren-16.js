function alphabetPyramid(rows) {
    let startCharCode = 'A'.charCodeAt(0);

    for (let row = 1; row <= rows; row++) {
        let line = "";
        //  spaces
        for (let space = 1; space <= rows - row; space++) {
            line += " ";
        }
        //  increasing letters
        for (let i = 0; i < row; i++) {
            line += String.fromCharCode(startCharCode + i);
        }
        // decreasing letters
        for (let i = row - 2; i >= 0; i--) {
            line += String.fromCharCode(startCharCode + i);
        }
        console.log(line);
    }
}

alphabetPyramid(5);


//Approach-2 recomemded
function alphabetPyramid(rows) {
    for (let row = 1; row <= rows; row++) {
        let line = "";


        for (let space = 1; space <= rows - row; space++) {
            line += " ";
        }

        let ch = 'A'.charCodeAt(0);
        for (let i = 1; i <= row; i++) {
            line += String.fromCharCode(ch);
            ch++;
        }
        ch -= 2;
        for (let i = 1; i < row; i++) {
            line += String.fromCharCode(ch);
            ch--;
        }

        console.log(line);
    }
}

alphabetPyramid(8);



/* OutPut
    A
   ABA
  ABCBA
 ABCDCBA
ABCDEDCBA
*/