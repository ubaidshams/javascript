// // // function demo(...a,b)  //Uncaught SyntaxError: Rest parameter must be last formal parameter
// // // {
// // //     console.log(a);
// // //     console.log(b);
// // // }
// // // demo(10,20,30,40);


// // let arr=[1,2,3,4,5,6];
// // let [a,b,...c]=arr;
// // console.log(a);
// // console.log(b);
// // console.log(c);


// // let Student=
// // {
// //     name:"Dinga",
// //     id:345,
// //     city:"Bengaluru",
// //     pin:560051
// // };
// // let {name, ...remaining}=Student;
// // console.log(name);
// // console.log(remaining);


// // let arr1=[1,2,3,4,5];
// // let [...arr2]=arr1;
// // console.log(arr1);
// // console.log(arr2);
// // console.log(arr1===arr2);

// let arr=[1,2,3,4,5];
// let c=arr;
// let [...d]=arr;
// arr[arr.length]=7;
// console.log(arr);
// console.log(c);
// console.log(d);
// console.log(arr===c);
// console.log(arr===d);

let a=[10,20,30];
console.log(Math.max(...a));
console.log(Math.max(a[0],a[1],a[2]));
console.log(Math.max(a));
console.log(Math.max([10,20,30]));
console.log(Math.max(10,20,30));
console.log(a);


console.log("using spread operator in object");
let empdetails=
{
    id:222,
    sal:30000
}
console.log(empdetails);
console.log(...empdetails);