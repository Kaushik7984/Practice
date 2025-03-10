/**
 * Given a string `num` representing a non-negative integer `num`, and an integer `k`,
  return the smallest possible integer after removing `k` digits from `num`.
 */

function removeKdigits(num, k) {
  const arr = [];

  for (let digit of num) {
    while (k > 0 && arr.length > 0 && arr[arr.length - 1] > digit) {
      arr.pop();

      k--;
    }

    arr.push(digit);
  }

  let result = arr.join("");
  return result;
}

console.log(removeKdigits("1432219", 3)); // Output: "1219"
