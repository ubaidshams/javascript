

let validateEmail=()=>
{
    let regex=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$com|in/
    let email=document.getElementById('email').value
    if(email===''||email===null)
    {
        alert('Email field cannot be blank')
        email.focus()
    }
    else if(!email.match(regex))
    {
        alert(
            `Please enter a valid email address
            example:abc@xyz.com`
        )
        email.focus()
    }
}
let validatePassword = ()=>{
    let pwd=document.getElementById('pwd').value
    let pattern=/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]){8,}/
    if(pwd===""||pwd===null)
    {
        alert(`password field cannot be blank`)
        pwd.focus()
    }
    else if(!pwd.match(pattern))
    {
        alert(`Please enter 1 uppercase letter 1 lowercase letter 1 digit and 1 special character`)
        pwd.focus()
    }
}

let showPwd = ()=>{
    let pwd=document.getElementById('pwd')
    if(pwd.type=='password')
    {
        pwd.type='text'
    }
    else
    pwd.type='password'
}