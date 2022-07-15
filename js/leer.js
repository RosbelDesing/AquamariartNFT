const btn = document.getElementById("btn-leer");
const texto = document.querySelector(".historia-text-sigilo");

btn.addEventListener("click",() => {
    texto.classList.toggle("historia-text-visible");   
});


