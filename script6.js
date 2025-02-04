/* 
Have the function MinWindowSubstring(strArr) take the array of strings stored in strArr,
which will contain only two strings, the first parameter being the string N and the second parameter being a string K of some characters,
and your goal is to determine the smallest substring of N that contains all the characters in K.

For example:
if strArr is ["aaabaaddae", "aed"] then the smallest substring of N that contains the characters a, e, and d is "dae" located at the end of the string.
So for this example your program should return the string dae.
*/

function MinWindowSubstring(strArr) {
  const N = strArr[0]; // Main string
  const K = strArr[1]; // Characters to find
  let smallest = ""; // Store the smallest substring

  // Loop through all possible substrings of N
  for (let i = 0; i < N.length; i++) {
    for (let j = i + 1; j <= N.length; j++) {
      const substring = N.slice(i, j); // Current substring

      // Check if the substring contains all characters of K
      let containsAll = true;
      for (const char of K) {
        if (!substring.includes(char)) {
          containsAll = false;
          break;
        }
      }

      // If it contains all characters and is smaller than the current smallest, update
      if (
        containsAll &&
        (smallest === "" || substring.length < smallest.length)
      ) {
        smallest = substring;
      }
    }
  }

  return smallest;
}

// Example usage:
console.log(MinWindowSubstring(["aaabaaddae", "aed"])); // Output: "dae"
