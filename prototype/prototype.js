function Student(Sname,Sid)
{
    this.Sname=Sname
    this.Sid=Sid
}

let s1=new Student('abc',123)
let s2=new Student('xyz',222)


s1.__proto__.perc=50
console.log(s1);
console.log(s2);