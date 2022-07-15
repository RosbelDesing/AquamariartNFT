const btn2 = document.getElementById("btn-dos");
const texto2 = document.querySelector(".historia-text-sigilo-2");

btn2.addEventListener("click",() => {
    texto2.classList.toggle("historia-text-visible-2");   
});
