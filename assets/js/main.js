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