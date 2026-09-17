// ARRAY DE PRODUCTOS

const productos = [
    "Playera",
    "Pantalón",
    "Tenis",
    "Gorra",
    "Sudadera"
];


// FUNCIÓN PARA MOSTRAR LOS PRODUCTOS

function mostrarProductos(lista) {

    console.log("Productos disponibles:");

    for (const producto of lista) {
        console.log("Producto: " + producto);
    }
}


// MOSTRAR LISTA INICIAL

mostrarProductos(productos);


// AGREGAR PRODUCTOS

productos.push("Mochila");
productos.unshift("Calcetines");

console.log("Se agregaron nuevos productos.");


// ELIMINAR EL ÚLTIMO PRODUCTO

const productoEliminado = productos.pop();

alert("Se ha eliminado el elemento: " + productoEliminado);


// BUSCAR UN PRODUCTO

const productoBuscado = prompt(
    "¿Qué producto quieres buscar?"
);


// VALIDAR SI EXISTE

if (productos.includes(productoBuscado)) {

    const posicion = productos.indexOf(productoBuscado);

    alert(
        "El producto " + productoBuscado +
        " sí existe y está en el índice " + posicion
    );

} else {

    alert(
        "El producto " + productoBuscado +
        " no se encuentra en la lista."
    );
}


// MODIFICAR UN PRODUCTO

const indiceModificar = 2;

productos.splice(
    indiceModificar,
    1,
    "Camisa"
);

console.log("Se modificó el producto del índice " + indiceModificar);


// MOSTRAR LISTA ACTUALIZADA

mostrarProductos(productos);