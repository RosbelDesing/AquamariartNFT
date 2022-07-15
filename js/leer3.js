const btn3 = document.getElementById("btn-tres");
const texto3 = document.querySelector(".historia-text-sigilo-3");

btn3.addEventListener("click",() => {
    texto3.classList.toggle("historia-text-visible-3");   
});
