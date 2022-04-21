function Emp(ename,city)
{
    this.ename=ename;
    this.city=city;
}

let e1=new Emp("abc","chennai")
let e2=new Emp("asd","bangalore")
let e3=new Emp("zxc","hubli")
let e4=new Emp("xyz","bangalore")
let e5=new Emp("pqr","chennai")
// let arr=[e1,e2,e3,e4]
// console.log(arr);
// let arr2=[]
// arr2=arr.sort((a,b)=>(b.sal-a.sal))
// console.log(arr2);
let arr=[e1,e2,e3,e4,e5]
console.log(arr);
let city1;
for(a of arr)
{
    city1.push(a.city)
}
city1=new Set(city1);

for(c of city1)
{
    let count=0;
    for(a of arr)
    {
        if(a.city==c)
        count++
    }
    console.log(`there are ${count} employees working in ${c} city`);
}