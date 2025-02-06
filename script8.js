// Function to merge two arrays and sort the result
function mergeArrays(arr1, arr2) {
  let arr3 = arr1.concat(arr2);
  //arr3.sort();
  arr3.sort((a, b) => a - b);
  return arr3;
}

let arr1 = [1, 3, 5, 4, 11];
let arr2 = [2, 4, 6, 8];
let arr3 = mergeArrays(arr1, arr2);

console.log(arr3.join(" "));
//  this is updated code
