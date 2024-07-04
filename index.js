function hacerCalculoMatematico(numero1, numero2, operador){
    switch(operador){
        case "+":
            return numero1 + numero2;
        case "-":
            return numero1 - numero2;
        case "*":
            return numero1 * numero2;
        case "/":
            if( numero1 == 0 && numero2 == 0 ){
                return 0;
            }
            return numero1 / numero2;
        default:
            console.log("El operador indicado no se reconoce");
            return 0;
    }
}

let resultadoSuma = hacerCalculoMatematico(1, 2, "+");
console.log(resultadoSuma);

let resultadoResta = hacerCalculoMatematico(1, 2, "-");
console.log(resultadoResta);

let resultadoMultiplicacion = hacerCalculoMatematico(1, 2, "*");
console.log(resultadoMultiplicacion);

let resultadoDivision = hacerCalculoMatematico(1, 2, "/");
console.log(resultadoDivision);

let resultadoInesperado = hacerCalculoMatematico(1, 2, "raiz");
console.log(resultadoInesperado);

let resultadoDividirCeroEntreCero = hacerCalculoMatematico(0, 0, "/");
console.log(resultadoDividirCeroEntreCero);


function mostrarAlerta(){
    alert("Hola");
}


document.addEventListener("DOMContentLoaded", () => {
    const boton = document.getElementById("boton-mostrar-alerta");
    boton.addEventListener("click", mostrarAlerta);
});