// Animación de aparición al hacer scroll

const elementos = document.querySelectorAll("section, .card");

const mostrarElemento = () => {

    const alturaPantalla = window.innerHeight;

    elementos.forEach(elemento => {

        const posicion = elemento.getBoundingClientRect().top;

        if (posicion < alturaPantalla - 100) {

            elemento.style.opacity = "1";
            elemento.style.transform = "translateY(0)";
        }

    });

};

elementos.forEach(elemento => {
    elemento.style.opacity = "0";
    elemento.style.transform = "translateY(50px)";
    elemento.style.transition = "all .8s ease";
});

window.addEventListener("scroll", mostrarElemento);

mostrarElemento();


// Animación del botón principal

const boton = document.querySelector(".boton");

setInterval(() => {

    boton.classList.toggle("brillo");

},1500);


// Mensaje de bienvenida

window.addEventListener("load",()=>{

    console.log("Bienvenido a Preludio Academia Musical 🎹");

});


// Año automático del footer

const footer = document.querySelector("footer p:last-child");

footer.innerHTML = `© ${new Date().getFullYear()} Todos los derechos reservados.`;
