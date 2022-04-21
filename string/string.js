// // let str=new String("Hello");
// // let str1=new String("world");
// // console.log(str===str1);

// // let str2="Hello";
// // let str3="Hello";
// // console.log(str2===str3);
// // typeof str;

// // let str="ubaid Uz Zaman";
// // let str2="";
// // for(let i=0;i<str.length;i++)
// // {
// //     if(i==0)
// //     str2+=str.charAt(i).toUpperCase();
// //     else
// //     str2+=str.charAt(i).toLowerCase();
// // }
// // console.log(str2);


// //palindrome string

// // let str=prompt("Enter a word");
// // let temp=str;
// // let rev=str.split("").reverse().join("");
// // console.log(rev);
// // if(rev==temp)
// // {
// //     console.log(`${temp} is a plaindrome`);
// // }
// // else
// // console.log(`${temp} is not a plaindrome`);


// // let str="abfjb124kjk";

// // for(let i=0;i<str.length;i++)
// // {
// //     let c=str.charCodeAt(i);
// //     if(c>=48&&c<=57)
// //     console.log(str.charAt(i));
// // }
// // console.log(str);
// // // console.log(str1);

// //bubble  sort
// console.log("Bubble sort");
// let arr=[1,6,3,8,4,10,9];
// console.log(arr);
// for(let i=0;i<arr.length;i++)
// {
//     for(let j=i+1;j<arr.length;j++)
//     {
//        if(arr[i]>arr[j])
//        {
//         let temp=arr[i];
//         arr[i]=arr[j];
//         arr[j]=temp;
//        }
//     }
// }
// console.log(arr);

let arr1=["Raj"];
let arr2=["Vishnu"];
let arr3=[];

function con(...a)
{
    arr3=a;
}
con(arr1,arr2);
console.log(arr3);