// //  a=Number(prompt("enter the first number"));
// //  b=Number(prompt("enter the second number"));

// // function sum(a,b)
// // {
// //     let sum=a+b;
// //     console.log(`the sum of ${a} and ${b} is ${sum}`);
// // }

// // sum(a,b);

// // let x=function ()
// // {
// //     console.log(`hi this is anonymous function`);
// // }

// // x();

// console.log("start");
// let a = "Hi";
// var b=100;
// b=200;

// function test(){
//     console.log(a);
//     a="hello";
//     console.log(a);
//     console.log(this.a);
//     var b="bye";
//     console.log(b);
//     console.log(this.b);
// }
// test();
// console.log(a);
// console.log(b);
// console.log("end");




console.log("start");
let x=700;
x=500;
var y=200;
function test()
{
    console.log(x);
    x=600;
    let z="hi";
    z="hello";
    console.log(z);
    console.log(x);
    console.log(this.x);
    var y=220;
    console.log(y);
    console.log(this.y);
}

test();
// console.log(z);
console.log("end");