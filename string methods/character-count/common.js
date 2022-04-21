// let arr1=[1,2,3,4]
// let arr2=[3,2];
// // let common=[]
// // let not_common=[]

// // for(let i of arr1)
// // {
// //     for(let j of arr2)
// //     {
// //         if(i==j)
// //         common.push(i)
// //         else
// //         not_common.push(i)
// //     }
// // }
// // console.log(arr1);
// // console.log(arr2);
// // console.log(common);
// // console.log(not_common);

// console.log(arr1);
// console.log(arr2);

// for(let i=0;i<arr2.length;i++)
// {
//     for(let j=0;j<arr1.length;j++)
//     {
//         if(arr2[i]!=arr1[j])
//         arr1.splice(j,1)
//     }
// }
// console.log(arr1);
let n=Number(prompt("enter the card number"));
let primeArray=[]
let count=0
var l;
for(let num=2;num<=n;num++)
{
    let count1=0
    let flag=false;
    for(let i=2;i<=num/2;i++)
    {
        if(num%i==0)
        count1++
        // break
    }
    if(count1==0)
    count++
    
    if(count==n)
    console.log(num);
}

