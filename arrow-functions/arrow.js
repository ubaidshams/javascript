let task =((a,b)=>
{
    sum=a+b;
    prod=a*b;
    return prod,sum;
})

console.log(task(5,10));


let test=()=>"hello";
console.log(test());

let test1=()=>{
return "hello";
}

let emp=(eid)=> eid;
console.log(emp("typ123"));

console.log(test1());

let n=Number(prompt("Enter a number to find the factorial"));
let factorial=((n)=>
{
    let fact=1;
    for(let i=1;i<=n;i++)
    {
        fact*=i;
    }
    return fact;
})

console.log(factorial(n));


let x=()=>
{
    let a =10;
    console.log(a);
    let y=()=>
    {
        let b=20;
        console.log(b);
    }
    y();
}
x();