const btnReadMore = document.getElementById("btn-desplegar");
const description = document.querySelector(".description-sigilo");

const btnOcultar = document.getElementById("btn-ocultar");
const btnDesplegar = document.querySelector(".btn-desplegar");
const btnOcultarClass = document.querySelector(".btn-ocultar");

btnReadMore.addEventListener("click",() => {
    description.classList.toggle("sigilo-visible");
    btnDesplegar.classList.toggle("btn-desplegar-none");
    btnOcultarClass.classList.toggle("btn-ocultar-block");   
});

btnOcultar.addEventListener("click",() => {
    description.classList.remove("sigilo-visible");
    btnDesplegar.classList.remove("btn-desplegar-none");
    btnOcultarClass.classList.remove("btn-ocultar-block"); 
});




