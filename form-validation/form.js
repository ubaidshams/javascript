let unameValidate=()=>{
    let uname=document.getElementById('uname').value
    if(uname==''||uname==null)
    alert('unsername cannot be blank')
}

let pwdValidate=()=>{
    let pwd=document.getElementById('pwd').value
    if(pwd==""||pwd==null)
    alert('password field cannot be blank')
    else if(pwd.length<8)
    alert("password shot be at least 8 characters")
}
