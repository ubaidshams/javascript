// // let users = {
// //   username: "abcd",
// // };

// // function displayName() {
// //   //   console.log(this); //window
// //   //   console.log(this.users);  //undefined
// //   // console.log(this.username); //undefined
// //   console.log(this.username);
// // };

// // displayName.call(users);

// ex2
// let emp = {
//   id: 123,
//   emp_name: "John",
// };

// function dispEmp() {
//   console.log(this.id);
//   console.log(this.emp_name);
// }

// dispEmp.call(emp);

// ex 3

// let data = {
//   num1: 10,
// };

// function add(s2) {
//   let sum = this.num1 + s2;
//   console.log(sum);
// }

// add.call(data, 20);

// ex 4
// //
// let data = {
//   a: 15,
//   b: 33,
// };

// function addVal(c, d) {
//   let sum = this.a + this.b + c + d;
//   console.log(sum);
// }
// addVal.call(data, 25, 30);

// ex 4

// let person = {
//   fname: "John",
// };

// function fullName(lname) {
//   let fullNa = this.fname + " " + lname;
//   console.log(fullNa);
// }
// fullName.call(person, "Miller");

// ex 5
// let data = {
//   a: 15,
//   b: 33,
// };

// function addVal(c, d) {
//   let sum = this.a + this.b + c + d;
//   console.log(sum);
// }
// addVal.apply(data, [25, 30]);

// bind method

let data = {
  a: 15,
  b: 33,
};

function addVal(c, d, e) {
  let sum = this.a + this.b + c + d + e;
  console.log(sum);
}
let total = addVal.bind(data, [25, 30, 40]);
console.log(total);
console.log(addVal);
