let olEle=document.createElement("ol");
let li1=document.createElement("li");
let li2=document.createElement("li");
let li3=document.createElement("li");
li2.textContent="Apple"
li1.textContent="Mango"
li3.textContent="Grapes"
olEle.style.backgroundColor="blue"
olEle.appendChild(li1);
olEle.appendChild(li2);
olEle.appendChild(li3);
document.body.append(olEle)