// CLASE PRODUCTO

class Producto {

    constructor(id, nombre, precio, categoria, stock) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
        this.stock = stock;
    }

    // Método para realizar una venta
    vender(cantidad) {

        if (cantidad <= this.stock) {
            this.stock = this.stock - cantidad;

            console.log(
                "Se vendieron " + cantidad +
                " unidades de " + this.nombre
            );

        } else {
            console.log(
                "No hay suficiente stock de " + this.nombre
            );
        }
    }

    // Método para mostrar información
    mostrarInformacion() {
        console.log(
            this.nombre +
            " | Precio: $" + this.precio +
            " | Categoría: " + this.categoria +
            " | Stock: " + this.stock
        );
    }
}


// CREAR OBJETOS

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


// ARRAY DE PRODUCTOS

const productos = [
    playera,
    tenis,
    sudadera
];


// FUNCIÓN PARA MOSTRAR PRODUCTOS

function mostrarProductos(lista) {

    console.log("PRODUCTOS DISPONIBLES");

    for (const producto of lista) {
        producto.mostrarInformacion();
    }
}


// MOSTRAR PRODUCTOS

mostrarProductos(productos);


// SOLICITAR UNA COMPRA

const productoBuscado = prompt(
    "¿Qué producto quieres comprar?"
);

let productoEncontrado = null;


// BUSCAR PRODUCTO

for (const producto of productos) {

    if (
        producto.nombre.toLowerCase() ===
        productoBuscado.toLowerCase()
    ) {
        productoEncontrado = producto;
    }
}


// REALIZAR COMPRA

if (productoEncontrado !== null) {

    const cantidad = parseInt(
        prompt("¿Cuántas unidades quieres comprar?")
    );

    productoEncontrado.vender(cantidad);

    alert(
        "Stock restante de " +
        productoEncontrado.nombre +
        ": " +
        productoEncontrado.stock
    );

} else {

    alert("El producto no existe.");
}


// MOSTRAR RESULTADOS FINALES

console.log("STOCK ACTUALIZADO");

mostrarProductos(productos);