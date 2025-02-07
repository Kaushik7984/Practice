function Palindrome(str) {
  const reversed = str.split("").reverse().join("");
  //   const reversed = str.reverse();

  return str === reversed;
}
// console.log(isPalindrome("bab"));

function LongestPalindromicSubstring(str) {
  let long = "";

  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      const substr = str.slice(i, j + 1);

      if (Palindrome(substr) && substr.length > long.length) {
        long = substr;
      }
    }
  }
  return long;
}

// function LongestPalindromicSubstring(str) {
//   const all = [];

//   for (let i = 0; i < str.length; i++) {
//     for (let j = i + 1; j < str.length; j++) {
//       const substr = str.slice(i, j);

//       if (Palindrome(substr) && substr.length > 2) {
//         all.push(substr);
//       }
//     }
//   }
//   return all;
// }

console.log(LongestPalindromicSubstring("babad"));
console.log(
  LongestPalindromicSubstring("testyourskil%lmadaml%ll%lmadaml%labc")
);
console.log(LongestPalindromicSubstring("test"));
// console.log(LongestPalindromicSubstring(471745898989856998));
console.log(LongestPalindromicSubstring("iweieididieei"));
