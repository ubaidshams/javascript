let card=document.createElement("div");
let cardContent=document.getElementById("d1")
card.appendChild(cardContent)
// card.style.background="hotpink"
// card.style.display="flex"
// card.style.justifyContent="center"
// card.style.alignItems="center"
// card.style.width="15vw"
// card.style.height="40vh"
// card.style.margin="auto"
card.className="normal"
document.body.append(card)

card.onmouseover=(()=>{
    card.className="onHover"
})
card.onmouseout=(()=>{
    card.className="normal"
})


// console.log("start");
// let e1=document.querySelector(".divstyle1")
// console.log(e1);
// let elements=document.querySelectorAll(".divstyle1")
// console.log(elements);
// let e3=e1.querySelectorAll(".divstyle1")
// console.log(e3);
// console.log("end");


// //obtain the reference of div tag using id "d1", using query selector
// let e4 =document.querySelector("#d1")
// console.log(e4)
// //obtain the reference of the second div whose name is divstyle1
// let e5=document.querySelectorAll(".divstyle1")
// console.log(e5[1]);
// //obtain all the elements in the DOM
// let e6=document.querySelectorAll("*")
// console.log(e6);

// //to get 5th element
// console.log(document.querySelectorAll("*")[4]);

// let e7=document.querySelectorAll("#d1 p")
// console.log(e7.textContent);
// let e8=document.querySelectorAll("#d1 p")[1]
// console.log(e8.textContent);
// let e9=e8.textContent="age: 26"
// console.log(e9);