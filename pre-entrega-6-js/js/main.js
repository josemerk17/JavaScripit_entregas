// CLASE PRODUCTO

class Producto {

    constructor(id, nombre, precio, categoria, stock) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
        this.stock = stock;
    }
}


// OBJETOS

const playera = new Producto(
    1,
    "Playera",
    700,
    "Ropa",
    10
);

const tenis = new Producto(
    2,
    "Tenis",
    1500,
    "Calzado",
    5
);

const sudadera = new Producto(
    3,
    "Sudadera",
    1200,
    "Ropa",
    8
);

const gorra = new Producto(
    4,
    "Gorra",
    500,
    "Accesorios",
    15
);

const mochila = new Producto(
    5,
    "Mochila",
    900,
    "Accesorios",
    6
);


// ARRAY DE OBJETOS

const productos = [
    playera,
    tenis,
    sudadera,
    gorra,
    mochila
];


console.log("PRODUCTOS DISPONIBLES");
console.log(productos);


// MENÚ

const opcion = prompt(
    "¿Qué quieres hacer?\n" +
    "1 - Buscar producto por nombre\n" +
    "2 - Buscar producto por ID\n" +
    "3 - Filtrar productos por precio\n" +
    "4 - Ver precios con descuento"
);


// OPCIÓN 1 - FIND

if (opcion === "1") {

    const nombreBuscado = prompt(
        "Escribe el nombre del producto:"
    );

    const productoEncontrado = productos.find(
        producto =>
            producto.nombre.toLowerCase() ===
            nombreBuscado.toLowerCase()
    );

    if (productoEncontrado) {

        console.log("Producto encontrado:");
        console.log(productoEncontrado);

        alert(
            productoEncontrado.nombre +
            " cuesta $" +
            productoEncontrado.precio
        );

    } else {

        alert("Producto no encontrado.");
    }


// OPCIÓN 2 - FIND

} else if (opcion === "2") {

    const idBuscado = parseInt(
        prompt("Ingresa el ID del producto:")
    );

    const productoPorId = productos.find(
        producto => producto.id === idBuscado
    );

    if (productoPorId) {

        console.log("Producto encontrado por ID:");
        console.log(productoPorId);

        alert(
            "Producto: " +
            productoPorId.nombre
        );

    } else {

        alert("No existe un producto con ese ID.");
    }


// OPCIÓN 3 - FILTER

} else if (opcion === "3") {

    const precioMaximo = parseFloat(
        prompt("¿Cuál es tu presupuesto máximo?")
    );

    const productosFiltrados = productos.filter(
        producto => producto.precio <= precioMaximo
    );

    console.log(
        "Productos dentro de tu presupuesto:"
    );

    console.log(productosFiltrados);

    if (productosFiltrados.length > 0) {

        alert(
            "Encontramos " +
            productosFiltrados.length +
            " productos dentro de tu presupuesto."
        );

    } else {

        alert(
            "No hay productos dentro de ese presupuesto."
        );
    }


// OPCIÓN 4 - MAP

} else if (opcion === "4") {

    const preciosConDescuento = productos.map(
        producto => {
            return {
                nombre: producto.nombre,
                precioOriginal: producto.precio,
                precioDescuento: producto.precio * 0.90
            };
        }
    );

    console.log("PRECIOS CON 10% DE DESCUENTO");
    console.log(preciosConDescuento);

    alert(
        "Los precios con descuento están disponibles en la consola."
    );


} else {

    alert("Opción no válida.");
}