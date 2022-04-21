// // let str="hello"
// //  str=str.split("")
// // let str1=new Set(str);
// // for(let i of str1)
// // {
// //     let count=0
// //     for(let j of str)
// //     {
// //         if(i==j)
// //         {
// //             count++
// //         }
// //     }
// //     console.log(`the character ${i} is occuring ${count} times`);
// // }

// let str="hello"
//  str=str.split("")
// let str1=new Set(str);
// for(let i of str1)
// {
//     let count=0
//     for(let j of str)
//     {
//         if(i==j)
//         {
//             count++
//         }
//     }
//     if(count==1)
//     {
//         console.log(`the character ${i} is occuring ${count} times`);
//     }
// }

let arr=[5,10,3,4,60,9,65,23,30,22]
let two_five=[]
let even=[]
let odd=[]
for(let i of arr)
{
    if(i%2==0&&i%5==0)
    two_five.push(i)
    else if(i%2==0)
    even.push(i)
    else if(i%2!=0)
    odd.push(i)
}

two_five.sort((a,b)=>a-b);
even.sort((a,b)=>a-b);
odd.sort((a,b)=>a-b);
console.log(two_five);
console.log(even);
console.log(odd);
let final=[...two_five,...even,...odd];
console.log(final);
