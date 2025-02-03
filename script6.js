/* 
Have the function MinWindowSubstring(strArr) take the array of strings stored in strArr,
which will contain only two strings, the first parameter being the string N and the second parameter being a string K of some characters,
and your goal is to determine the smallest substring of N that contains all the characters in K.

For example:
if strArr is ["aaabaaddae", "aed"] then the smallest substring of N that contains the characters a, e, and d is "dae" located at the end of the string.
So for this example your program should return the string dae.
*/

var MinWindowSubstring = function (strArr) {
  const s = strArr[0];
  const t = strArr[1];
  if (!s || !t || s.length < t.length) {
    return "";
  }

  const tMap = new Map();
  for (const char of t) {
    tMap.set(char, (tMap.get(char) || 0) + 1);
  }

  let left = 0;
  let right = 0;
  let minWindow = "";
  let minLength = Infinity;
  let matchCount = 0;
  const window = new Map();

  while (right < s.length) {
    const char = s[right];
    if (tMap.has(char)) {
      window.set(char, (window.get(char) || 0) + 1);
      if (window.get(char) <= tMap.get(char)) {
        matchCount++;
      }
    }

    while (matchCount === t.length) {
      const windowLength = right - left + 1;
      if (windowLength < minLength) {
        minLength = windowLength;
        minWindow = s.substring(left, right + 1);
      }
      const leftChar = s[left];
      if (tMap.has(leftChar)) {
        window.set(leftChar, window.get(leftChar) - 1);
        if (window.get(leftChar) < tMap.get(leftChar)) {
          matchCount--;
        }
      }
      left++;
    }
    right++;
  }
  return minWindow;
};

console.log(minWindow("aaabaaddae", "aed"));
