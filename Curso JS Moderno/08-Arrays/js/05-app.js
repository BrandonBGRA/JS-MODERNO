const meses = ["Enero", "Febrero", "Marzo"];

meses.push("Abril");
console.table(meses);

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

carrito.push(producto);
carrito.push(producto2);

const producto3 = {
  nombre: "Teclado",
  precio: 500,
};

carrito.unshift(producto3);

console.table(carrito);
