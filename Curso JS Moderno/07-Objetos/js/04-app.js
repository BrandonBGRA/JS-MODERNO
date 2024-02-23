// Construimos el objeto
const producto = {
  nombre: "Monitor de 20 pulgadas",
  precio: 300,
  disponible: true,
};

// const nombre = producto.nombre;
// console.log(nombre);

// Creamos una variable extrayendo un atributo de un objeto con Destructuring
const { nombre, precio } = producto;
console.log(nombre);
console.log(precio);
