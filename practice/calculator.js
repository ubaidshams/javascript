let res=document.getElementById("res")

let add=()=>{
    let fnum=document.getElementById("fnum").value
    let snum=document.getElementById("snum").value
    let sum=Number(fnum)+Number(snum)
    res.innerHTML=`The sum of ${fnum}+${snum}=${sum}`
}

let sub=()=>{
    let fnum=document.getElementById("fnum").value
    let snum=document.getElementById("snum").value
    let diff=Number(fnum)-Number(snum)
    res.innerHTML=`The difference of ${fnum}-${snum}=${diff}`
}

let mul=()=>{
    let fnum=document.getElementById("fnum").value
    let snum=document.getElementById("snum").value
    let prod=Number(fnum)*Number(snum)
    res.innerHTML=`The product of ${fnum}*${snum}=${prod}`
}

let div=()=>{
    let fnum=document.getElementById("fnum").value
    let snum=document.getElementById("snum").value
    let quo=Number(fnum)/Number(snum)
    res.innerHTML=`The quotient of ${fnum}/${snum}=${quo}`
}