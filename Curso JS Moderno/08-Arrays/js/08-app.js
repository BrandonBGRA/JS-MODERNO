const producto = {
  nombre: "Pantalla de 50 pulgadas",
  precio: 2000,
  disponible: true,
};

// Destructuring a un objeto
const { nombre } = producto;

console.log(nombre);

// Destructuring a un array
const numeros = [10, 20, 30, 40, 50];
const [, , tercero] = numeros;

console.log(tercero);
console.log();
