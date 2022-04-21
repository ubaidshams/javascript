let string = ''
let n=Number(prompt('Enter a number'))

for(let i=0;i<n;i++)
{
    for(j=0;j<n;j++)
    {
        string += '*'
    }
    string += '\n'
}
console.log(string);