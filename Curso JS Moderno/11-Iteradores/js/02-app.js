const carrito = [
  { nombre: "Monitor 20 pulgadas", precio: 5000 },
  { nombre: "Tablet", precio: 4000 },
  { nombre: "Audifonos", precio: 600, descuento: true },
  { nombre: "Pila Recargable", precio: 300, descuento: false },
];


for (let i = 0; i < carrito.length; i++) {
  if (carrito[i].descuento) {
    console.log(`El producto ${carrito[i].nombre} tiene descuento`);
    continue;
  }
  console.log(carrito[i].nombre);
}

for (let i = 0; i <= 10; i++) {
  if (i === 5) {
    console.log(`Este es el numero ${i}`);
    continue;
  }

  console.log(`Numero: ${i}`);
}
