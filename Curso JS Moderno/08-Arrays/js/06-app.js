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

const producto3 = {
  nombre: "Teclado",
  precio: 500,
};

let resultado;

resultado = [...carrito, producto];
resultado = [...resultado, producto2];

console.table(resultado);
