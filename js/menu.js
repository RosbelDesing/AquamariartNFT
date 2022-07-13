const navToggle = document.getElementById("nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const closeBtn = document.querySelector(".close");
const OpenBtn = document.querySelector(".open");

navToggle.addEventListener("click",() => {
    navMenu.classList.toggle("nav-menu-visible");
    closeBtn.classList.toggle("close-visible");
    OpenBtn.classList.toggle("open-none");
})


const menuLinks = document.querySelectorAll(".nav-menu a[href^=\"#\"]");

menuLinks.forEach(menuLink =>{ 
    menuLink.addEventListener("click",function() {
        navMenu.classList.remove("nav-menu-visible");
    })
});