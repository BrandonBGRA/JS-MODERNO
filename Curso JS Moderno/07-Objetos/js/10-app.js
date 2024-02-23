const producto = {
  nombre: "Pantalla de 50 pulgadas",
  precio: 5000,
  disponible: true,
};

const medidas = {
  peso: "50kg",
  medida: "1m,",
};

// console.log(producto);
// console.log(medidas);

// Spread Operator o Rest Operator
const resultado2 = { ...producto, ...medidas };
console.log(resultado2);

const resultado = Object.assign(producto, medidas);
console.log(resultado);
