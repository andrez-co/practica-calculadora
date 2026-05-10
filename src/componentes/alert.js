const modalContainer = document.getElementById('resultado');
const closeButton = document.getElementById('close');
const mensajeResultado = document.getElementById('mensaje-resultado');
const input1 = document.getElementById('num1');
const input2 = document.getElementById('num2');

window.mostrarMensaje = function(texto) {
    if (input1.value !== "" && input2.value !== "") {
        mensajeResultado.textContent = texto;
        modalContainer.style.display = "flex";
    } else {
        mensajeResultado.textContent = "--Revisa bien putito--";
        modalContainer.style.display = "flex";
    }
};


closeButton.onclick = function() {
    modalContainer.style.display = "none";
};


window.onclick = function(event) {
    if (event.target === modalContainer) {
        modalContainer.style.display = "none";
    }
};
