let n = Number(prompt("Enter a three digit positive bumber"));
let sum = 0;
let temp = n;
let getCube = x => {
  c = x * x * x;
  return c;
};
while (n > 0) {
  let digit = Math.floor(n % 10);
  sum += getCube(digit);
  n = n / 10;
}
if (sum === temp) {
  console.log(`${temp} is an armstrong number`);
} else console.log(`${temp} is not an armstrong number`);
