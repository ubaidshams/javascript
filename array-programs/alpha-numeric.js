let arr=["hello", "nfdj73r7", "world", "8u7fdbs8"];
console.log(arr);

for(let a of arr)
{
    let alpha=0;
    let digit=0;
    for(let i=0;i<arr.length;i++)
{
    if(a.charCodeAt(i)>=48&&a.charCodeAt(i)<=57)
    digit++
    else if(a.charCodeAt(i)>=65&&a.charCodeAt(i)<=90)
    alpha++
    else if(a.charCodeAt(i)>=97&&a.charCodeAt(i)<=122)
    alpha++
}
if(digit!=0&&alpha!=0)
{
    console.log(a);
}
}