let tableContainer=document.getElementById('table-container')
let table=document.createElement('table')
let tr=document.createElement('tr')
let th1=document.createElement('th')
let th2=document.createElement('th')
var tr2=document.createElement('tr')
    var td1=document.createElement('td')
    var td2=document.createElement('td')
    var fname
    var lname

let create=()=>{
    th1.innerHTML='First name'
    th2.innerHTML='Last name'
    tr.appendChild(th1)
    tr.appendChild(th2)
    table.appendChild(tr)
    tableContainer.appendChild(table)
    table.style.border='1px solid'
    th1.style.border='1px solid';
    th2.style.border='1px solid';
    td1.style.border='1px solid'
    td2.style.border='1px solid'
}
let read=()=>{
    fname=document.getElementById('fname').value
    lname=document.getElementById('lname').value
    
}
let update=()=>{
    td1.innerHTML=`${fname}`
    td2.innerHTML=`${lname}`
    tr2.appendChild(td1)
    tr2.appendChild(td2)
    table.appendChild(tr2)
}
let del=()=>{
    tableContainer.innerHTML=""
}