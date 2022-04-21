let showDrop=(()=>{
    let dropContent=document.getElementById("drop-content")
    dropContent.classList.toggle("show")
})
window.onclick = function(e) {
    if (!e.target.matches('#drop-btn')) {
    var myDropdown = document.getElementById("drop-content");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
    }
    if (!e.target.matches('#showReg')) {
        var regForm = document.getElementById("form-container");
        let chi=regForm.childNodes
        console.log(chi);
        
        }
  }

  let showRegister=(()=>{
      let regForm=document.getElementById("form-container")
      regForm.classList.toggle("showRegisterForm")
  })


  let hideRegister=()=>{
    let regForm=document.getElementById("form-container")
    if(regForm.classList.contains('showRegisterForm'))
    {
        regForm.classList.remove('showRegisterForm')
    }
  }
