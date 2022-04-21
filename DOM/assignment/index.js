// // let gp=document.getElementById("grandparent")
// // gp.addEventListener("click",(e)=>{
// //     console.log("grandparent clicked");
// //     console.log("event phase:"+e.eventPhase);
// // })

// // let p=document.getElementById("parent")
// // p.addEventListener("click",(f)=>{
// //     console.log("parent clicked");
// //     console.log("event phase:"+f.eventPhase);
// // })

// // let c=document.getElementById("child")
// // c.addEventListener("click",(g)=>{
// //     console.log("child clicked");
// //     console.log("event phase:"+g.eventPhase);
// // })

// let p=document.getElementById("parent")
// p.addEventListener("click",(e)=>{
//     // e.stopPropagation()
//     console.log("parent clicked");
//     console.log("event phase:"+e.eventPhase);
// },false)

// let c1=document.getElementById("child1")
// c1.addEventListener("click",(e)=>{
//     // e.stopPropagation()
//     console.log("child1 clicked");
//     console.log("event phase:"+e.eventPhase);
// },true)



// console.log(fnum);
// console.log(snum);
let add=document.getElementById("add")
    add.onclick=(()=>{
    let fnum=document.getElementById("fnum").value
    let snum=document.getElementById("snum").value
    let sum=Number(fnum)+Number(snum)
    let res=document.getElementById("res")
    res.innerHTML=`Sum of ${fnum} + ${snum} = ${sum}`
})