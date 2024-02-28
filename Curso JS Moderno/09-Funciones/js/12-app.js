const carrito = [
  { nombre: "Monitor de 25 pulgadas", precio: "5000" },
  { nombre: "Audifonos", precio: "400" },
  { nombre: "Tablet", precio: "500" },
  { nombre: "Celular Samsung", precio: "10000" },
  { nombre: "Teclado", precio: "7600" },
  { nombre: "Memoria RAM", precio: "3000" },
];

const arreglo = carrito.map(producto => `${producto.nombre} Precio: ${producto.precio}`);

carrito.forEach((producto) => {
  console.log(`${producto.nombre} Precio: ${producto.precio}`);
});

console.log(arreglo);
