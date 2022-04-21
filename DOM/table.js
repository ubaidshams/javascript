let table=document.createElement("table");
let th1=document.createElement("th");
let th2=document.createElement("th");
let th3=document.createElement("th");
th1.textContent="Name";
th2.textContent="Role";
th3.textContent="Company";
let tr1=document.createElement("tr");
let tr2=document.createElement("tr");
let tr3=document.createElement("tr");
let tr4=document.createElement("tr");
table.appendChild(tr1)
table.appendChild(tr2)
table.appendChild(tr3)
table.appendChild(tr4)
tr1.appendChild(th1)
tr1.appendChild(th2)
tr1.appendChild(th3)
let td11=document.createElement("td")
let td12=document.createElement("td")
let td13=document.createElement("td")
let td21=document.createElement("td")
let td22=document.createElement("td")
let td23=document.createElement("td")
let td31=document.createElement("td")
let td32=document.createElement("td")
let td33=document.createElement("td")
td11.textContent="X"
td12.textContent="Y"
td13.textContent="Z"
td21.textContent="A"
td22.textContent="B"
td23.textContent="C"
td31.textContent="P"
td32.textContent="Q"
td33.textContent="R"

tr2.appendChild(td11)
tr3.appendChild(td12)
tr4.appendChild(td13)
tr2.appendChild(td21)
tr3.appendChild(td22)
tr4.appendChild(td23)
tr2.appendChild(td31)
tr3.appendChild(td32)
tr4.appendChild(td33)
table.style.border="2px solid black";
// onclick=document.getElementsByTagName("td1").style.color="red"
document.body.append(table)


let ul=document.createElement("ul")
ul.textContent="City Names"
let li1=document.createElement("li")
let li2=document.createElement("li")
let li3=document.createElement("li")
li1.textContent="Bengaluru"
li2.textContent="Mysore"
li3.textContent="Hubli"

ul.appendChild(li1)
ul.appendChild(li2)
ul.appendChild(li3)

document.body.append(ul)