let add=document.getElementById("add")
add.onclick=(()=>{
    let x=document.getElementById("fnum").value
    let y=document.getElementById("snum").value
    let sum=Number(x)+Number(y)
    
    let res=document.getElementById("res")
    res.innerHTML=`The result of ${x} and ${y} = ${sum}`

})

let cname=()=>{
    let city=document.getElementById("city").value
    let cityname=document.getElementById("res")
    cityname.innerHTML=`your city is ${city}`
}