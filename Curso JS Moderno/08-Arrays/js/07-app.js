const carrito = [];

// Definir un producto
const producto = {
  nombre: "Pantalla de 50 pulgadas",
  precio: 2000,
};
const producto2 = {
  nombre: "Tostador",
  precio: 800,
};

const producto4 = {
  nombre: "Telefono 2",
  precio: 2000,
};

carrito.push(producto);
carrito.push(producto2);
carrito.push(producto4);

const producto3 = {
  nombre: "Teclado",
  precio: 500,
};

carrito.unshift(producto3);

console.table(carrito);

// Eliminar ultimo elemento de  un array

// carrito.pop();

// console.table(carrito);

// Eliminar primer elemento de un array
// carrito.shift();

carrito.splice(1, 1);
console.table(carrito);
