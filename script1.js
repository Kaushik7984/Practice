//reverse odd length strings

function reverseOddLengthWords(str) {
  return str
    .split(" ")
    .map((word) => {
      return word.length % 2 !== 0 ? word.split("").reverse().join("") : word;
    })
    .join(" ");
}

const input = "Hello world this is a test";
const result = reverseOddLengthWords(input);
console.log(result);

// code update
