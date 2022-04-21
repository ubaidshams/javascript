let str=prompt("Enter a sentence");
let str1="";
console.log(str);
var count=0;
for(let i=0;i<str.length;i++)

{
    if(((i==0)&&(str.charAt(i)!=" "))||(str.charAt(i)!=" ")&&(str.charAt(i-1)==" "))
    {
        str1=str1+str.charAt(i).toUpperCase();
        count++;
    }
    else
    str1=str1+str.charAt(i).toLowerCase()
}
console.log(`The sentecnce "${str1}" :has ${count} words in it`);