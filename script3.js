//1. Reverse a String

function reverseStr(str) {
  return str.split("").reverse().join("");
}
console.log(reverseStr("hello"));

//2. Check for Palindrome

function isPalindrome(str) {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}
// console.log(isPalindrome("madam"));
