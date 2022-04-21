//! 32. Vowels in String are present or not

const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
const string = prompt("Enter a string: ");
let vowArr = [];
function countVowel(str) {
  let count = 0;
  for (letter of str) {
    if (vowels.includes(letter)) {
      count++;
      vowArr.push(letter);
    }
  }
  return count;
}
console.log(string);
const result = countVowel(string);

console.log(
  `number of vowels in the string is ${result} and the letters are ${vowArr}`
);
