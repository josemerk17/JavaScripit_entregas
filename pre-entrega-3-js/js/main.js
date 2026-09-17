// FUNCIÓN 1: Función declarada
// Procesa los datos y calcula la diferencia entre ahorro y precio.

function calcularDiferencia(ahorro, precio) {
    return ahorro - precio;
}


// FUNCIÓN 2: Función flecha
// Genera un mensaje utilizando los datos recibidos.

const crearMensaje = (nombre, producto) => {
    return "Hola " + nombre + ", estás consultando el producto: " + producto;
};


// FUNCIÓN 3: Función expresada
// Evalúa si el usuario puede realizar la compra.

const evaluarCompra = function(nombre, producto, ahorro, precio) {

    const diferencia = calcularDiferencia(ahorro, precio);

    if (diferencia > 0) {

        alert(
            crearMensaje(nombre, producto) +
            "\nPuedes comprarlo y te sobrarían $" + diferencia
        );

    } else if (diferencia === 0) {

        alert(
            crearMensaje(nombre, producto) +
            "\nPuedes comprarlo, pero gastarías todos tus ahorros."
        );

    } else {

        alert(
            crearMensaje(nombre, producto) +
            "\nNo puedes comprarlo. Te faltan $" + Math.abs(diferencia)
        );
    }
};


// DATOS DE ENTRADA

const nombre = prompt("¿Cuál es tu nombre?");
const ahorro = parseFloat(
    prompt("¿Cuánto dinero tienes ahorrado?")
);

let continuar = "si";


// SIMULADOR

while (continuar === "si") {

    const producto = prompt("¿Qué producto quieres comprar?");

    const precio = parseFloat(
        prompt("¿Cuánto cuesta el producto?")
    );

    // Invocamos la función
    evaluarCompra(nombre, producto, ahorro, precio);

    continuar = prompt(
        "¿Quieres consultar otro producto? Escribe si o no."
    ).toLowerCase();
}

alert("Gracias por utilizar el simulador.");