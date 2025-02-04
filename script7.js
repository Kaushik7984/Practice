/* 
Have the function MinWindowSubstring(strArr) take the array of strings stored in strArr,
which will contain only two strings, the first parameter being the string N and the second parameter being a string K of some characters,
and your goal is to determine the smallest substring of N that contains all the characters in K.
*/

function MinWindowSubstring(strArr) {
  const [N, K] = strArr;
  const charCount = {};
  let required = 0;

  // Count characters in K
  for (let char of K) {
    if (!charCount[char]) {
      charCount[char] = 0;
    }
    charCount[char]++;
    required++;
  }

  let left = 0,
    right = 0;
  let minLength = Infinity;
  let minSubstring = "";

  while (right < N.length) {
    if (charCount[N[right]] !== undefined) {
      charCount[N[right]]--;
      if (charCount[N[right]] >= 0) {
        required--;
      }
    }

    while (required === 0) {
      if (right - left + 1 < minLength) {
        minLength = right - left + 1;
        minSubstring = N.substring(left, right + 1);
      }

      if (charCount[N[left]] !== undefined) {
        charCount[N[left]]++;
        if (charCount[N[left]] > 0) {
          required++;
        }
      }
      left++;
    }
    right++;
  }

  return minSubstring;
}

// Example usage
console.log(MinWindowSubstring(["aaabaaddae", "aed"])); // Output: "dae"
