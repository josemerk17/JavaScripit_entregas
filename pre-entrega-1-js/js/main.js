// Solicitar datos al usuario
const nombre = prompt("¿Cual es tu nombre?");
const producto = prompt("¿Que producto quieres comprar?");

const precio = parseFloat(
    prompt("¿Cuanto cuesta el producto?")
);

const ahorro = parseFloat(
    prompt("¿Cuanto dinero tienes ahorrado?")
);

// Procesar la informacion
let diferencia = ahorro - precio;

// Crear mensaje con la informacion del usuario
const mensaje =
    "Hola " + nombre +
    ", quieres comprar " + producto +
    " por $" + precio +
    " y tienes $" + ahorro + " ahorrados.";

// Mostrar resultados
console.log(mensaje);
console.log("Despues de la compra tendrias: $" + diferencia);

alert(
    mensaje +
    "\nDespues de la compra tendrias: $" + diferencia
);