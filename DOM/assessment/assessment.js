let container=document.createElement("div")
container.className="container"
document.body.append(container)

let h1=document.createElement("h2")
h1.textContent="Registration Form"
container.appendChild(h1)

let iholder=document.createElement("div")
container.appendChild(iholder)
iholder.className="iholder"

let uname=document.createElement("input")
uname.className="uname"
uname.type="text";
uname.placeholder="Enter your name"
iholder.appendChild(uname)

let email=document.createElement("input")
email.className="email"
email.type="email";
email.placeholder="Enter your email"
iholder.appendChild(email)

let phone=document.createElement("input")
phone.className="phone"
phone.type="tel";
phone.placeholder="Enter your phone number"
iholder.appendChild(phone)

let submitbtn=document.createElement("button")
submitbtn.className="sub-btn"
submitbtn.textContent="Submit"
iholder.appendChild(submitbtn)
