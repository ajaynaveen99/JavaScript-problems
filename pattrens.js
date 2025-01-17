// //  pattren-1
// let i;
// let j;
// for (i = 1; i <= 5; i++) {
//     let emp='' ;
//     for (j = 1; j <= 5; j++) {
//         emp = emp + "*";
//     }
//     console.log(emp);
// }


// //// pattren--2
// let i,j;
// n=20;
// console.log(Math.floor(n/2))
// for(i=0;i<n;i++){
//     let space="";
//     for(j=0;j<n;j++){
//         if(i==0||i==n-1||j==0|j==n-1||j==Math.floor(n/2)||i==Math.floor(n/2)){
//         space+="*";
//     }else{
//     space=space+" ";
//     }
// }console.log(space)
// }
// ////program 2.1 2-crosses
// let i,j;
// n=20;
// console.log(Math.floor(n/2))
// for(i=0;i<n;i++){
//     let space="";
//     for(j=0;j<n;j++){

//         if(i==0||i==n-1||j==0|j==n-1||j==Math.floor(n/2)||i==Math.floor(n/2)||
// i==j||i+j==n-1){
//         space+="*";
//     }else{
//     space=space+" ";
//     }
// }console.log(space)
// }

////program 2.2 2-crosses(in-cross)
let i, j;
n = 20;
console.log(Math.floor(n / 2))
for (i = 0; i < n; i++) {
    let space = "";
    for (j = 0; j < n; j++) {

        if (i == 0 || i == n - 1 || j == 0 | j == n - 1 || j == Math.floor(n / 2) || i == Math.floor(n / 2) || i == j || i + j == n - 1 ||
            i + j == Math.floor(n / 2) || i - j == Math.floor(n / 2) || j - i == Math.floor(n / 2) || i + j == (n - 1) + Math.floor(n / 2)) {
            space += "*";
        } else {
            space = space + " ";
        }
    } console.log(space)
}