let nameValidate=()=>{
    let uname=document.getElementById("uname").value
    let regex=new RegExp("([0-9])")
    if(uname===""||uname===null)
    {
        alert("Name field cannot be empty")
        document.getElementById("uname").focus()
    }
    else if(uname.length<3||uname.length>20)
    {
        alert("Name should contain 3-20 characters")
        document.getElementById("uname").focus()
    }
    else if(uname.match(regex))
    {
        alert("Name cannot have any numbers")
        document.getElementById("uname").focus()
    }
}


let pwdValidate=()=>{
    let pwd=document.getElementById("pwd").value
    let regex=new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})");
    if(pwd==""||pwd==null)
    {
        alert("Password field cannot be empty")
        document.getElementById("pwd").focus()
    }
    else if(pwd.length<6||pwd.length>20)
    {
        alert("Password should contain 6-20 characters")
        document.getElementById("pwd").focus()
    }
    else if(!pwd.match(regex))
    {
        alert("Password  should contain atleast 1 uppercase 1 lowercase 1 digit and 1 special cahracter")
        document.getElementById("pwd").focus()
    }
}


let pnoValidate=()=>{
    let pno=document.getElementById("pno").value
    let regex=new RegExp("(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#\$%\^&\*])")
    if(pno==""||pno==null)
    {
        alert("Phone number field cannot be empty")
        document.getElementById("pno").focus()
    }
    else if(pno.length!=10)
    {
        alert("Phone number should contain 10 digits")
        document.getElementById("pno").focus()
    }
    else if(!pno.match(regex))
    {
        alert("Phone number cannot have any characters")
        document.getElementById("pno").focus()
    }
}


let zipValidate=()=>{
    let zip=document.getElementById("zip").value
    let regex=new RegExp("[0-9]");
    if(zip==""||zip==null)
    {
        alert("Pincode field cannot be empty")
        document.getElementById("zip").focus()
    }
    else if(zip.length!=6)
    {
        alert("Pincode should contain 6 digits")
        document.getElementById("zip").focus()
    }
    else if(!zip.match(regex))
    {
        alert("Pincode can only be digits")
        document.getElementById("zip").focus()
    }
}

let emailValidate=()=>{
    let email=document.getElementById("email").value
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(email==""||email==null)
    {
        alert("Email field cannot be blank")
        document.getElementById("email").focus()
    }
    else if(!email.match(re))
    {
        alert("Please enter a valid email")
        document.getElementById("email").focus()
    }

}