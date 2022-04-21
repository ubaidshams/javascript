let body=document.body
body.style.margin="0px"
body.style.padding="0px"
body.style.boxSizing="border-box"
let div1=document.createElement("div");
let container=document.createElement("div");
div1.style.width="100%";
div1.style.height="80vh";
div1.style.display="flex"
div1.style.backgroundColor="#0f0617"
div1.style.justifyContent="center"
div1.style.alignItems="center"

container.style.width="90%";
container.style.height="60vh";
// container.style.margin="auto"
container.style.backgroundColor="grey"
container.style.display="flex"
container.style.alignItems="center"
container.style.justifyContent="space-evenly"

let card1=document.createElement("div")
let card2=document.createElement("div")
let card3=document.createElement("div")
card1.style.width="20%"
card2.style.width="20%"
card3.style.width="20%"

card1.style.height="80%"
card2.style.height="80%"
card3.style.height="80%"

card1.style.boxShadow="0px 0px 15px 4px"
card2.style.boxShadow="0px 0px 15px 4px"
card3.style.boxShadow="0px 0px 15px 4px"

card1.style.backgroundColor="hotpink"
card2.style.backgroundColor="#8230c6"
card3.style.backgroundColor="#a785ff"

card1.style.display="flex"
card1.style.flexDirection="column"
card1.style.alignItems="center"
// card1.style.justifyContent=""

card2.style.display="flex"
card2.style.flexDirection="column"
card2.style.alignItems="center"
// card2.style.justifyContent="center"

card3.style.flexDirection="column"
card3.style.display="flex"
card3.style.alignItems="center"
// card3.style.justifyContent="center"

let img1=document.createElement("img");
img1.src="/images/kitten.webp"
img1.style.height="60%"
img1.style.width="100%"
card1.appendChild(img1)

let img2=document.createElement("img");
img2.src="/images/vietnam.webp"
img2.style.height="50%"
img2.style.width="100%"
card2.appendChild(img2)

let img3=document.createElement("img");
img3.src="/images/kids.webp"
img3.style.height="60%"
img3.style.width="100%"
card3.appendChild(img3)

let hd1=document.createElement("h3")
hd1.textContent="Kitten"
hd1.style.textAlign="center"
card1.appendChild(hd1)

let hd2=document.createElement("h3")
hd2.textContent="Woman"
hd2.style.textAlign="center"
card2.appendChild(hd2)

let hd3=document.createElement("h3")
hd3.textContent="Kids"
hd3.style.textAlign="center"
card3.appendChild(hd3)

let p1=document.createElement("p")
p1.textContent="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum maiores praesentium aut nostrum quisquam ipsam nobis sit."
p1.style.textAlign="justify"
p1.style.margin="10px"
card1.appendChild(p1)

let p2=document.createElement("p")
p2.textContent="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum maiores praesentium aut nostrum quisquam ipsam nobis sit."
p2.style.textAlign="justify"
p2.style.margin="10px"
card2.appendChild(p2)

let p3=document.createElement("p")
p3.textContent="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum maiores praesentium aut nostrum quisquam ipsam nobis sit."
p3.style.textAlign="justify"
p3.style.margin="10px"
card3.appendChild(p3)

container.appendChild(card1)
container.appendChild(card2)
container.appendChild(card3)
div1.appendChild(container)
document.body.append(div1)