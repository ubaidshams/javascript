let arr=[3,5,7,2,8,6];
let temp=[];
console.log(arr);
for(let i=0;i<arr.length;i++)
{
    for(let j=i+1;j<arr.length;j++)
    {
        if((arr[i]+arr[j]==10)||(arr[j]+arr[i]==10))
        {
            console.log(`${arr[i]} and ${arr[j]}
            ${arr[j]} and ${arr[i]}`);
        }
    }
}
