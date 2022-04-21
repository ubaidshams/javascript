let card=document.getElementById('card')
let audio=document.getElementById('audio')
card.addEventListener('click',()=>{
    let front=document.getElementById('front')
    let back=document.getElementById('back')
    front.classList.toggle('front-trans')
    back.classList.toggle('back-trans')

    if(audio.paused)
    {audio.src='/audio/happy-bday.mp3'
    audio.play()}
    else
    audio.src=""
})


document.querySelector(".gift-top-wrapper").addEventListener("click",()=>{
    console.log("working");
    document.querySelector(".gift-top-wrapper").classList.toggle("gift-top1");
    document.querySelector(".hidden-text").classList.toggle("hidden-toggle");
    // document.querySelector(".hidden-text").classList.toggle("hidden-toggle");
    // let bal=document.querySelectorAll(".baloons")
    // for (let index = 0; index < bal.length; index++) {
    //     let element = bal[index];
    //     if(document.querySelector(".gift-top-wrapper").classList.contains())
    //     element.classList.toggle("ballon");
    // }
    


})

document.querySelector(".gift-content").addEventListener("click",()=>{
    console.log("working");
    document.querySelector(".gift-top-wrapper").classList.toggle("gift-top1");
    document.querySelector(".hidden-text").classList.toggle("hidden-toggle");
    // let bal=document.querySelectorAll(".baloons")
    // for (let index = 0; index < bal.length; index++) {
    //     let element = bal[index];
    //     if(document.querySelector(".gift-top-wrapper").classList.contains())
    //     element.classList.toggle("ballon");
    // }

})
