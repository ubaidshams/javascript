let displayBg=()=>
{
    document.body.style.background="red"
    let h1=document.createElement("h1")
    h1.textContent="I am an event listener"
    document.body.append(h1)
}

let animalList=()=>{
    let ul=document.createElement("ul")
    ul.style.backgroundColor="blue"
    ul.textContent="Animals"
    ul.style.fontSize="20px"

    let li1=document.createElement("li")
    li1.textContent="Tiger"
    ul.appendChild(li1)

    let li2=document.createElement("li")
    li2.textContent="Lion"
    ul.appendChild(li2)

    let li3=document.createElement("li")
    li3.textContent="Zebra"
    ul.appendChild(li3)

    document.body.append(ul)
}