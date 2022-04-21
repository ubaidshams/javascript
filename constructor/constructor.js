// // function Student(sname,sid)
// // {
// //     this.sname=sname;
// //     this.sid=sid;
// // }
// // let S1=new Student("dinga",100);
// // let S2=new Student("dingi",200);
// // console.log(S1);

// // console.log(S2.sname);

// function books(bName,bPrice,bAuthor)
// {
//     this.bName=bName;
//     this.bPrice=Number(bPrice);
//     this.bAuthor=bAuthor;
// }
// let b1=new books("harry potter",1000,"J.K.Rowling");
// let b2=new books("half girlfriend",500,"Chetan Bhagat");
// let b3=new books("Rich dad poor dad",800,"Anonymous");
// // console.log(books);
// console.log(b1);
// console.log(b2);
// console.log(b3);

function Emp(eName,Designation,Sal,isPermanent)
{
    this.eName=eName;
    this.Designation=Designation;
    this.Sal=Number(Sal);
    this.isPermanent=Boolean(isPermanent);
}

let e1=new Emp("ubaid","developer",25000,true);
let e2=new Emp("musaib","developer",35000,false);
let e3=new Emp("tushar","testing",20000,true);
console.log(e1);
console.log(e2);
console.log(e3);
