let num=Number(prompt("Enter a number"));
let temp=num;
let sum=0;

while(num>0)
{
    let digit=num%10;
    sum+=fact(digit);
    num=Math.trunc(num/10);
}
if(sum==temp)
{
    console.log(`${temp} is a strong number`);
}
else
console.log(`${temp} is not a strong number`);

function fact(num)
{
    let fac=1;
    for(let i=1;i<=num;i++)
    {
        fac*=i;
    }
    return fac;
}