// Creamos un objeto con propiedades

"use strict";

const producto = {
  nombre: "Pantalla de 50 pulgadas",
  precio: 5000,
  disponible: true,
};

Object.freeze(producto);

producto.imagen = "imagen.jpg";

console.log(producto);
// Esta propiedad nos va a permitir verificar si el objeto está congelado
// console.log(Object.isFrozen(producto));
