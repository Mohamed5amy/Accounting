// Start Loader 
var loader = document.getElementById("loader")
        window.addEventListener("load", ()=>{
            loader.style.display = 'none';
            document.body.style.overflowY = 'visible'
})
// End Loader 
// Start Menu
const btn1 = document.getElementById("btn1");
const menu = document.querySelector(".menu");
const menuLi = document.querySelectorAll(".menu li")

btn1.addEventListener("click", () => {
    menu.classList.toggle("active")
    window.scrollTo(0,0)
})
menuLi.forEach((li)=> {
    li.addEventListener("click", ()=> {
        menu.classList.remove("active")
    })
}) 
// End Menu 
// The form 
var plan1B = document.querySelector(".plan1")
var plan2B = document.querySelector(".plan2")
plan1B.addEventListener("click", ()=>{
    window.open("https://mail.google.com/mail/u/0/?fs=1&to=mohamedsamy582002@gmail.com&su=Hi I'm Coming From The Website about (خدمات محاسب أونلاين) plan &body=Enter your message here &tf=cm")
})
plan2B.addEventListener("click", ()=>{
    window.open("https://mail.google.com/mail/u/0/?fs=1&to=mohamedsamy582002@gmail.com&su=Hi I'm Coming From The Website about (مؤسسات ناشئة) plan &body=Enter your message here &tf=cm")
})