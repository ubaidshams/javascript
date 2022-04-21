// // // // // function operation(a,b,task)
// // // // // {
// // // // //     let res=task(a,b);
// // // // //     return res
// // // // // }

// // // // // let sum=operation(10,5,function(a,b){
// // // // //     return a+b
// // // // // })
// // // // // console.log(sum);

// // // // // let substr=operation(10,5,(a,b)=>a-b);
// // // // // console.log(substr);
// // // // // let div=operation(20,5,(a,b)=>a/b);
// // // // // console.log(div);

// // // // let x=Number(prompt("Enter the first number"));
// // // // let y=Number(prompt("Enter the second number"));
// // // // let z=Number(prompt("Enter the third number"));
// // // // let cal=((a,b,c,opr)=>
// // // // {
// // // //     let res=opr(a,b,c);
// // // //     return res
// // // // });

// // // // let sum=cal(x,y,z,(a,b,c)=>a+b+c);
// // // // console.log(sum);
// // // // let sub=cal(x,y,z,(a,b,c)=>a-b-c);
// // // // console.log(sub);
// // // // let prod=cal(x,y,z,(a,b,c)=>a*b*c);
// // // // console.log(prod);
// // // // let div=cal(x,y,z,(a,b,c)=>a/b/c);
// // // // console.log(div);

// // // let a =[10,20,30,40,50]
// // // let b=a.filter(function(value,index)
// // // {
// // //     if(value>20)
// // //     return true
// // // })

// // // console.log(a);
// // // console.log(b);

// // // // let arr=[10,20,30,40,50]
// // // let increasePrice=b.map((value)=>{
    
// // //     value+=10;
// // //     return value
// // // })
// // // // console.log(arr);
// // // console.log(increasePrice);
// // // let totalPrice=increasePrice.reduce((acmltr,value)=>acmltr+value);
// // // console.log(totalPrice);

// // let x=[1,2,3,4,5]
// // let reduced=x.reduce((acc,value)=>{
// //     return acc*value
// // },2)
// // console.log(reduced);

// let x=["u","b","a","i","d"]
// let reduced=x.reduce((acc,value)=>{
//     return acc+value
// })
// console.log(reduced);

let pricesOfBook=[100,200,555,888,55]
console.log(pricesOfBook);
let priceIncreased=pricesOfBook.map((value)=>{
    return value+100;
})
console.log(`after the increase in price ${priceIncreased}`);
let filtered=priceIncreased.filter((value)=>
{
    if(value>=300)
    return true
})
console.log(`the books after filtering the price of greater then 300 is ${filtered}`);

let totalPrice=filtered.reduce((acc,value)=>{
    return acc+value;
})
console.log(`total price of the books above 300rs is ${totalPrice}`);