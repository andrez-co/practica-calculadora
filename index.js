
function sumar(num1, num2) {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var respuesta = num1 + num2;
    return respuesta;
}

function restar(num1, num2) {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var respuesta = num1 - num2;
    return respuesta;
}

function multiplicar(num1, num2){
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var respuesta= num1 * num2;
    return respuesta;
}

function dividir(num1, num2){
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var respuesta= num1 / num2;
    return respuesta;
}
