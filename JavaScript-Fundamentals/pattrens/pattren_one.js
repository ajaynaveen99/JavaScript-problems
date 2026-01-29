function printPyramid(rows) {

  for (let i = 1; i <= rows; i++) {

        let line = "";

    for (let j = 1; j <= rows - i; j++) {
      line += " ";
    }

    for (let k = 1; k <= i; k++) {
      line += "* ";//use this ==> line+="* " get piramid triangle
    }

    console.log(line);
  }
}

printPyramid(5);

/* 
output
    *
   **
  ***
 ****
*****

 and
 =====
    * 
   * * 
  * * * 
 * * * * 
* * * * * 
 ======

*/
