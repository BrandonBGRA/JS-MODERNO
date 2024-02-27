const carrito = [
  { nombre: "Monitor de 25 pulgadas", precio: "5000" },
  { nombre: "Audifonos", precio: "400" },
  { nombre: "Tablet", precio: "500" },
  { nombre: "Celular Samsung", precio: "10000" },
  { nombre: "Teclado", precio: "7600" },
  { nombre: "Memoria RAM", precio: "3000" },
];

for (let i = 0; i < carrito.length; i++) {
  console.log(`${carrito[i].nombre} Precio: ${carrito[i].precio}`);
}

carrito.forEach(function (producto) {
  console.log(`${producto.nombre} Precio: ${producto.precio}`);
});
