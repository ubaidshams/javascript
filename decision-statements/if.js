// let n=Number(prompt("Enter a number"));

// if statement
// if (n%2==1)
// {
//     console.log(`${n} is and odd number`);
// }

// if((n%2==0)&&(n%5==0))
// {
//     console.log(`${n} is divisible by 2 and 5`);
// }

// if else

// if(n%2==0)
// {
//     console.log(`${n} is an even number`);
// }
// else
// {
//     console.log(`${n} is an odd number`);
// }

//else if statement

// let marks=Number(prompt("Enter your marks in percentage from 0-100"));
// if(marks>85)
// {
//     console.log(`distinction`);
// }
// else if((marks>59)&&(marks<85))
// {
//     console.log(`first class`);
// }
// else if((marks>45)&&(marks<60))
// {
//     console.log(`second class`);
// }
// else
// console.log(`fail`);

// let temp=Number(prompt("Enter your body temperature in celcius"));

// if(temp<=37)
// {
//     console.log(`You are normal`);
// }
// else if((temp>89)&&(temp<100))
// {
//     console.log(`you are having high fever please consult a doctor`);
// }
// else if(temp>100)
// {
//     console.log(`you might be infected with covid please quarantine yourself`);
// }

//largest of 4 numbers

// let a=Number(prompt("Enter the first number"));
// let b=Number(prompt("Enter the second number"));
// let c=Number(prompt("Enter the third number"));
// let d=Number(prompt("Enter the fourth number"));
// let largest;
// if((a>b)&&(a>c)&&(a>d))
// {
//     largest=a;
// }
// else if((b>c)&&(b>d))
// {
//     largest=b;
// }
// else if(c>d)
// {
//     largest=c;
// }
// else
// {
//     largest=d;
// }

// console.log(`The largest number of ${a}, ${b}, ${c} and ${d} is ${largest}`);



// console.log(`Menu
// 1.Idly
// 2.Dosa
// 3.Vada
// 4.Poori`);

// let item=Number(prompt("Please enter the item number from the menu"));

// switch(item)
// {
//     case 1:{
//         console.log(`Idly is on its way`);
//         break;
//     }
//     case 2:{
//         console.log(`Dosa is on its way`);
//         break;
//     }
//     case 3:{
//         console.log(`Vada is on its way`);
//         break;
//     }
//     case 4:{
//         console.log(`Poor is on its way`);
//         break;
//     }
//     default:{
//         console.log(`Please enter a valid item number from the menu`);
//     }
// }


// let marks=Number(prompt("Enter your marks"));

// switch(true)
// {
//     case (marks>84):
//         console.log(`distinction`);
//         break;
//     case ((marks>60)&&(marks<85)):
//         console.log(`first class`);
//         break;
//     case ((marks>44)&&(marks<60)):
//         console.log(`second class`);
//         break;
//     case marks<44:
//         console.log(`failed`);
//     default: console.log(`invalid marks`);    
// }


console.log(`Days
1.Mon
2.Tue
3.Wed
4.Thu
5.Fri
6.Sat
7.Sun`);

let day=Number(prompt("Enter the respective number for the day"));

switch(day)
{
    case (day==1||day==6):
        {
            console.log(`Play cricket`);
            break;
        }
        case (day==2||day==4):
        {
            console.log(`Play football`);
            break;
        }
        case day==3:
        {
            console.log(`Play kabaddi`);
            break;
        }
        case (day==5||day==7):
        {
            console.log(`Play `);
            break;
        }
        default:
        {
            console.log(`enter a valid number`);
        }
}