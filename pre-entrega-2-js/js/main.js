// Datos del usuario
const nombre = prompt("¿Cuál es tu nombre?");
const ahorro = parseFloat(prompt("¿Cuánto dinero tienes ahorrado?"));

let continuar = "si";

// El simulador se repite mientras el usuario quiera continuar
while (continuar === "si") {

    const producto = prompt("¿Qué producto quieres comprar?");
    const precio = parseFloat(prompt("¿Cuánto cuesta el producto?"));

    // Evaluamos si el usuario puede comprarlo
    if (ahorro > precio) {

        const sobrante = ahorro - precio;

        alert(
            "Hola " + nombre +
            ". Puedes comprar " + producto +
            " y te sobrarían $" + sobrante
        );

    } else if (ahorro === precio) {

        alert(
            "Hola " + nombre +
            ". Puedes comprar " + producto +
            ", pero gastarías todos tus ahorros."
        );

    } else {

        const faltante = precio - ahorro;

        alert(
            "Hola " + nombre +
            ". No puedes comprar " + producto +
            ". Te faltan $" + faltante
        );
    }

    continuar = prompt(
        "¿Quieres consultar otro producto? Escribe si para continuar o no para salir."
    ).toLowerCase();
}

alert("Gracias por utilizar el simulador.");