

function sortedArray(arr1, arr2) {
  let sortarr = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      sortarr.push(arr1[i])
      i++;
    } else {
      sortarr.push(arr2[j])
      j++;
    }
  }
  while (i < arr1.length) {
    sortarr.push(arr1[i])
    i++;

  }
  while (j < arr2.length) {
    sortarr.push(arr2[j])
    j++;
  }
  return sortarr;


}
let arr1 = [1, 3, 5, 13];
let arr2 = [12, 4, 9, 8];
console.log(sortedArray(arr1, arr2));




