function wordToNumber(word) {
  const wordToNumMap = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    ten: 10,
    eleven: 11,
    twelve: 12,
    thirteen: 13,
    fourteen: 14,
    fifteen: 15,
    sixteen: 16,
    seventeen: 17,
    eighteen: 18,
    nineteen: 19,
    twenty: 20,
    thirty: 30,
    forty: 40,
    fifty: 50,
    sixty: 60,
    seventy: 70,
    eighty: 80,
    ninety: 90,
    hundred: 100,
    thousand: 1000,
    million: 1000000,
  };

  const words = word.toLowerCase().replace("-", " ").trim().split(/\s+/);
  let number = 0;
  let temp = 0;

  for (const w of words) {
    if (wordToNumMap[w] !== undefined) {
      if (w == "and") {
        continue;
      }
      if (w === "hundred") {
        temp *= wordToNumMap[w];
      } else if (w === "thousand" || w === "million") {
        temp *= wordToNumMap[w];
        number += temp;
        temp = 0;
      } else {
        temp += wordToNumMap[w];
      }
    }
  }

  number += temp;
  return number;
}

console.log(wordToNumber("thirty one thousand and three hundred  ")); // Output: 31300 *
console.log(wordToNumber("one million and one ")); // Output: 1000001
