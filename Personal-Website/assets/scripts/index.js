

const header = document.querySelector("header");

window.addEventListener("scroll", ()=>{
    header.classList.toggle("sticky", window.scroll > 120);
});