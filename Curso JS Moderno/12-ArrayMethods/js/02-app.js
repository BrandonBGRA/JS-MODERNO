const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];

const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Televisión", precio: 100 },
  { nombre: "Tablet", precio: 500 },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 700 },
];

meses.forEach((mes, i) => {
  if (mes === "Abril") {
    console.log(`El mes ${mes} esta en la posicion ${i}`);
  }
});

// Encontrar el indice de abril
const indice = carrito.findIndex((producto) => producto.precio === 500);
console.log(indice);
