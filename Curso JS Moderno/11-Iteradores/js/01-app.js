//for (let i = 0; i <= 10; i++) {
//  console.log(`Numero: ${i}`);
// }

for (let i = 1; i <= 2; i++) {
  if (
    i % 2 === 0
      ? console.log(`El Numero ${i} es Par`)
      : console.log(`El numero ${i} es Impar`)
  );
}

const carrito = [
  { nombre: "Monitor 20 pulgadas", precio: 5000 },
  { nombre: "Tablet", precio: 4000 },
  { nombre: "Audifonos", precio: 600 },
  { nombre: "Pila Recargable", precio: 300 },
];

console.log(carrito[0]);

for (let i = 0; i < carrito.length; i++) {
  console.log(carrito[i]);
}
