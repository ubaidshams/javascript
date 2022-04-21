    let add=(()=>{
        if(document.getElementById("ename").value=="")
        {
            return
        }
    let uname=document.getElementById("ename").value
    let desg=document.getElementById("desg").value
    uname.document.getElementById("ename").value=" "
    desg.document.getElementById("desg").value=" "


    let tr=document.createElement("tr")
    let td1=document.createElement("td")
    let td2=document.createElement("td")
    td1.innerhtml=uname
    td2.innerhtml=desg
    tr.appendChild(td1,td2)
    let tab=document.getElementById("tab")
    tab.appendChild(tr)
})