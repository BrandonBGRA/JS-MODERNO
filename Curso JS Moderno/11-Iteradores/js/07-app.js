const pendientes = ["Tarea", "Proyecto", "Comer", "Estudiar JS"];

const carrito = [
  { nombre: "Monitor 20 pulgadas", precio: 500 },
  { nombre: "Television 50 pulgadas", precio: 7000 },
  { nombre: "Tablet", precio: 4000 },
  { nombre: "Celular", precio: 15000 },
];

for (let pendiente of pendientes) {
  console.log(pendiente);
}

for (let producto of carrito) {
  console.log(
    `El producto: ${producto.nombre} tiene un precio de: $${producto.precio}`,
  );
}
