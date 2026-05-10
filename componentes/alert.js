 function mostrarMensaje(texto) {
            if(document.getElementById("num1").value !== "" && document.getElementById("num2").value !== ""){
            const toast = document.getElementById('resultado');
            toast.textContent = texto;
            toast.classList.add('show');
            }
            else{
                const toast = document.getElementById('resultado');
                toast.textContent = "Como vamos a operar si no hay numeros, bobo.";
                toast.classList.add('show');
                
            }
        }