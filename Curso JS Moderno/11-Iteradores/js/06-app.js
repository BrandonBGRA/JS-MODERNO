// forEach

const pendientes = ["Tarea", "Proyecto", "Comer", "Estudiar JS"];

pendientes.forEach((pendiente, index) => {
  console.log(`${index} ${pendiente}`);
});

// Recordemos que los array function se pueden declarar en una sola linea
// pendientes.forEach((pendiente1) => console.log(pendiente1));

const carrito = [
  { nombre: "Monitor 20 pulgadas", precio: 500 },
  { nombre: "Television 50 pulgadas", precio: 7000 },
  { nombre: "Tablet", precio: 4000 },
];

carrito.forEach((producto) => console.log(producto.nombre));
// map te crea un arreglo nuevo y forEach unicamente lo recorre pero no te crea nada
const nuevoCarrito = carrito.map((productos) => productos);
console.log(nuevoCarrito);
