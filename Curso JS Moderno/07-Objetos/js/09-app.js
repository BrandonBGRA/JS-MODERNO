// Creamos un objeto con propiedades

"use strict";

const producto = {
  nombre: "Pantalla de 50 pulgadas",
  precio: 5000,
  disponible: true,
};

Object.seal(producto);

// No lo permite
// producto.imagen = "imagen.jpg";
// delete producto.nombre;
// Si lo permite
producto.disponible = false;

console.log(producto);
console.log(Object.isSealed(producto));
