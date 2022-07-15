const btn5 = document.getElementById("btn-cinco");
const texto5 = document.querySelector(".historia-text-sigilo-5");

btn5.addEventListener("click",() => {
    texto5.classList.toggle("historia-text-visible-5");   
});