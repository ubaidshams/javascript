//! 68.How to convert array to object

let emp = {
  id: 1,
  name: "rupali",
  college: "dypatil",
};
let y = [];

y = Object.assign({}, emp);
console.log(y);
console.log({ ...emp });

let arr1 = [
  ["id", "1"],
  ["name", " User"],
  ["age", "25"],
  ["profession", "Developer"],
];
let x = Object.fromEntries(arr1);
console.log(x);
