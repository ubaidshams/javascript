// let n=1;
// while (n<=10)
// {
//     console.log(n);
//     n++;
// }

// do
// {
//     console.log(n);
//     n++;
// }while(n<=10);

// for(let i=1;i<=10;i++)
// {
//     console.log(i);
// }

//factorial
// var n=Number(prompt("enter a number"));
// var fact=1;
// // for(let i=n;i>=1;i--)
// // {
// //     fact=fact*i;
// // }
// var i=1;
// while(i<=n)
// {
//     fact=fact*i;
//     i++;
// }
// console.log(`The factorial of ${n} is ${fact}`);


//sum of 20 even natural numbers

// let n=1;
// let sum=0;
// let count=1;
// for(;count<=5;n++)
// {
//     if(n%2==0)
//     {
//         sum=sum+n;
//         count++;
//     }
// }
// console.log(`The sum of ${count} even numbers is ${sum}`);

// //sum of even and odd from a given range
// let sumeven=0;
// let sumodd=0;

// for(let i=10;i<=50;i++)
// {
//     if(i%2==0)
//     {
//         sumeven=sumeven+i
//     }
//     else
//     {
//         sumodd=sumodd+i;
//     }
// }

// console.log(`Sum of odd numbers from 10-50 is ${sumodd}
// Sum of even numbers from 10-50 is ${sumeven}`);

// //factorial of a number from a given range
// let lrange=Number(prompt("Enter the lower range"));
// let urange=Number(prompt("Enter the upper range"));


// for(let i=lrange;i<=urange;i++)
// {
//     fact=1;
//     for(let num=1;num<=i;num++)
//     {
//         fact=fact*num;
//     }
//     console.log(`the factorial of ${i} is ${fact}`);
// }


//factors of a number
let n=Number(prompt("enter a number"));

for(let i=1;i<=n;i++)
{
    if(n%i==0)
    {
        console.log(i);
    }
}