//! 45. Reverse Each Word of String

var string = "Welcome to this Javascript Guide!";
var reverseEntireSentence = reverseBySeparator(string, "");
var reverseEachWord = reverseBySeparator(reverseEntireSentence, " ");
console.log(reverseEntireSentence);
console.log(reverseEachWord);

function reverseBySeparator(string, separator) {
  return string.split(separator).reverse().join(separator);
}

let rev=string.split("").reverse().join('').split(" ").reverse().join(' ')
console.log(rev);