/*
Have the function LongestPalindromicSubstring(str) take a string as a parameter and return the longest palindromic substring in the string.
A palindrome is a word, phrase, or sequence that reads the same backward as forward.

Your task is to return the longest substring from the input string that forms a palindrome.
If there is no palindrome substring, return an empty string.

For example:
If the input is "babad", the longest palindromic substring is "bab". "aba" is also a valid answer.

Examples
Input: "test"
Output: ""
Input: "testyourskil%lmadaml%labc"
Output: "l%lmadaml%l"

*/
function LongestPalindromicSubstring(str) {
  let longest = "";
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      let substring = str.substring(i, j);
      if (substring === substring.split("").reverse().join("")) {
        if (substring.length > longest.length) {
          longest = substring;
        }
      }
    }
  }
  return longest;
}
// Test the function
console.log(LongestPalindromicSubstring("babad")); // Output: "bab"
console.log(LongestPalindromicSubstring("test")); // Output: ""
console.log(LongestPalindromicSubstring("testyourskil%lmadaml%l"));
