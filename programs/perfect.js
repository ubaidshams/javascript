// let n=Number(prompt("Enter a number"));
// let factsum=0;
// for(let i=1;i<=n/2;i++)
// {
//     if(n%i==0)
//     {
//         factsum+=i;
//     }
// }
// if (factsum==n)
// {
//     console.log(`${n} is a perfect number`);
// }
// else
// console.log(`${n} is not a perfect number`);


let low=Number(prompt("Enter the lower range"));
let high=Number(prompt("Enter the upper range"));


for(let n=low;n<=high;n++)
{
    let factsum=0;
    for(let i=n;i<n/2;i++)
    {
        if(n%i==0)
        {
            factsum+=i;
        }
    }
    if(factsum==n)
    {
        console.log(`${n} is a happy number`);
    }
}