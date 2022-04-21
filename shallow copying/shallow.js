// // "use strict"

// // // // // // // // // // function Emp(ename,eid,sal)
// // // // // // // // // // {
// // // // // // // // // //     this.ename=ename;
// // // // // // // // // //     this.eid=eid;
// // // // // // // // // //     this.sal=sal;
// // // // // // // // // // }
// // // // // // // // // // let e1=new Emp("Smith",111,10000);
// // // // // // // // // // // let e2=new Emp("Miller",222,20000);
// // // // // // // // // // let e2=e1;
// // // // // // // // // // console.log(e1);
// // // // // // // // // // console.log(e2);
// // // // // // // // // // console.log(e2===e1);


// // // // // // // // // // let Add=
// // // // // // // // // // {
// // // // // // // // // //     city:"Bengaluru",
// // // // // // // // // //     area:"BTM"
// // // // // // // // // // }
// // // // // // // // // // function Emp(ename,eid,sal,Add)
// // // // // // // // // // {
// // // // // // // // // //     this.ename=ename;
// // // // // // // // // //     this.eid=eid;
// // // // // // // // // //     this.sal=sal;
// // // // // // // // // //     this.Add=Add;
// // // // // // // // // // }
// // // // // // // // // // let e1=new Emp("Smith",111,10000,Add);
// // // // // // // // // // let e2=new Emp("Miller",222,20000,Add);
// // // // // // // // // // console.log(e1);
// // // // // // // // // // console.log(e2);
// // // // // // // // // // console.log(e1===e2);
// // // // // // // // // // e2.Add.city="Hubli"


// // // // // // // // // let Add=
// // // // // // // // // {
// // // // // // // // //     city:"Bengaluru",
// // // // // // // // //     area:"BTM"
// // // // // // // // // }
// // // // // // // // // function Emp(ename,eid,sal,Add)
// // // // // // // // // {
// // // // // // // // //     this.ename=ename;
// // // // // // // // //     this.eid=eid;
// // // // // // // // //     this.sal=sal;
// // // // // // // // //     this.Add=Add;
// // // // // // // // // }
// // // // // // // // // let e1=new Emp("Smith",111,10000,Add);
// // // // // // // // // // let e2=new Emp("Miller",222,20000,Add);
// // // // // // // // // let e2=JSON.parse(JSON.stringify(e1));
// // // // // // // // // console.log(e1);
// // // // // // // // // console.log(e2);
// // // // // // // // // console.log(e1==e2);
// // // // // // // // // console.log(e1.Add==e2.Add);
// // // // // // // // // e2.Add.city="Hubli"


// // // // // // // // // let arr=[1,2,3,4,5,6];
// // // // // // // // // let arr2=[]

// // // // // // // // // for(let i=0;i<=arr.length-1;i++)
// // // // // // // // // {
// // // // // // // // //     arr2.push(arr[i])
// // // // // // // // // }
// // // // // // // // // console.log(arr);
// // // // // // // // // console.log(arr2);

// // // // // // // // let arr1=[1,3,5,7]
// // // // // // // // let arr2=[2,4,6,8,10]
// // // // // // // // let arr3=[]

// // // // // // // // // for(let i=0;(i<arr2.length)||(i<arr1.length);i++)
// // // // // // // // // {
// // // // // // // // //     if(arr1[i])
// // // // // // // // //     arr3.push(arr1[i]);
// // // // // // // // //     if(arr2[i])
    
// // // // // // // // //         arr3.push(arr2[i]);
    
// // // // // // // // // }

// // // // // // // // let length1=arr1.length>arr2.length?arr1.length:arr2.length;
// // // // // // // // for(let i=0;i<length1;i++)
// // // // // // // // {
// // // // // // // //     if(i<arr1.length)
// // // // // // // //     arr3.push(arr1[i])
// // // // // // // //     if(i<arr2.length)
// // // // // // // //     arr3.push(arr2[i])
// // // // // // // // }
// // // // // // // // console.log(arr1);
// // // // // // // // console.log(arr2);
// // // // // // // // console.log(arr3);


// // // // // // // let obj=
// // // // // // // {
// // // // // // //     name:"ubaid",
// // // // // // //     id:005,
// // // // // // //     designation:"Developer",
// // // // // // //     sal:25000
// // // // // // // }
// // // // // // // // console.log(obj);

// // // // // // // let {a,...b}=obj;
// // // // // // // console.log(obj.name)
// // // // // // // // console.log(obj);
// // // // // // // console.log(a);
// // // // // // // console.log(b);

// // // // // // // let arr=[1,2,3,4,5,6];
// // // // // // // let [a,b,...c]=arr;
// // // // // // // console.log(a);
// // // // // // // console.log(b);
// // // // // // // console.log (...c);

// // // // // // let arr1=["Raj"];
// // // // // // let arr2=["Vishnu"];
// // // // // // let arr3=[];

// // // // // // function copy(...arrCo)
// // // // // // {
// // // // // //     arr3=arrCo;
// // // // // // }

// // // // // // copy(arr1,arr2);
// // // // // // console.log(arr1);
// // // // // // console.log(arr2);
// // // // // // console.log();

// // // // // let arr=[1,2,3,4,5];
// // // // // let [...arr2]=arr;
// // // // // console.log(arr);
// // // // // console.log(arr2);

// // // // // let EmpTy=
// // // // // {
// // // // //     Dname:"develops1",
// // // // //     EName:"abc",
// // // // //     sal:30000
// // // // // }

// // // // // let e1={};
// // // // // [...EmpTy;
// // // // // console.log(EmpTy);
// // // // // console.log(e1);


// // // // let x=new Date();

// // // // console.log(`Today's date is ${x}`);
// // // // console.log(`Todays's date ${x.getDate()}`);
// // // // console.log(`Todays's day ${x.getDay()}`);
// // // // console.log(`This month ${x.getMonth()}`);
// // // // console.log(`Hour ${x.getHours()}`);
// // // // console.log(`Min ${x.getMinutes()}`);


// // // // console.log("MAth methods");

// // // // console.log(Math.sqrt(4));
// // // // console.log(Math.cbrt(8));
// // // // console.log(Math.pow(2,4));
// // // // console.log(Math.floor(4.7));
// // // // console.log(Math.ceil(4.2));
// // // // console.log(Math.round(4.5));


// // // function test ()
// // // {
// // //     console.log(b);
// // //     const b;
// // //     b=10;
// // // }
// // // test();


// // // function demo()
// // // {
// // //     const b;
// // //     console.log(b);
// // //     b=20;
// // // }
// // // demo();

// // a=10;
// // console.log(a);

// console.log("start");
// let x=777;
// let y=888;
// console.log(y);

// function rev()
// {
//     console.log(x);
//     console.log(this.x);
//     console.log(y);
//     console.log(this.y);
//     var z=666;
//     console.log(z);
//     // console.log(d);
//     let d;
//     console.log(d);
//     d=99;
//     console.log(d);
// }
// rev();
// console.log("End");

console.log("Start");
var a=20;
console.log(a);
let b=40;
console.log(b);
function test()
{
    console.log(a);
    var a=50;
    console.log(a);
    console.log(this.a);
    // console.log(m);
    let m;
    m=10;
    console.log(m);
}

test();

console.log(a);
console.log("end");