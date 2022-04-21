let showPanCard=()=>{
    let card=document.createElement("div")
    card.style.width="20vw"
    // card.style.height="30vh"
    card.style.background="skyblue"
    card.style.borderRadius="10px"
    card.style.padding="10px"
    card.style.display="flex"
    card.style.flexDirection="column"

    let d1=document.createElement("div")
    d1.style.display="flex"
    // d1.style.justifyContent="space-evenly"
    d1.style.columnGap="20px"

    let hd1=document.createElement("p")
    hd1.textContent="INCOME TAX DEPARTMENT"
    hd1.style.textShadow="2px 2px 2px pink"
    hd1.style.fontSize="12px"

    let hd2=document.createElement("p")
    hd2.textContent="GOVT. OF INDIA"
    hd2.style.fontSize="12px"
    hd2.style.textShadow="2px 2px 2px pink"

    let name=document.createElement("p")
    name.textContent="UBAID UZ ZAMAN"
    name.style.fontSize="10px"
    name.style.fontWeight="bold"

    let fname=document.createElement("p")
    fname.textContent="MOHAMMED SALAHUDDIN MANSOOR"
    fname.style.fontSize="10px"
    fname.style.fontWeight="bold"

    let dob=document.createElement("p")
    dob.textContent="02/06/1996"
    dob.style.fontSize="10px"
    dob.style.fontWeight="bold"

    let pan=document.createElement("p")
    pan.textContent="PERMANENT ACCOUNT NUMBER"
    pan.style.fontSize="10px"
    pan.style.color="blue"


    let pNum=document.createElement("p")
    pNum.textContent="AFDPU0723J"
    pNum.style.fontSize="12px"
    pNum.style.fontWeight="bold"
    
    d1.appendChild(hd1)
    d1.appendChild(hd2)
    card.appendChild(d1)
    card.appendChild(name)
    card.appendChild(fname)
    card.appendChild(dob)
    card.appendChild(pan)
    card.appendChild(pNum)
    document.body.append(card)
}