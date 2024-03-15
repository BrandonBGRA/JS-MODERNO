const pendientes = ["Tarea", "Proyectos", "Comer", "Estudiar JS"];

const carrito = [
  { nombre: "Monitor 20 pulgadas", precio: 500 },
  { nombre: "Television 50 pulgadas", precio: 7000 },
  { nombre: "Tablet", precio: 4000 },
  { nombre: "Celular", precio: 15000 },
];

const carro = {
  año: 1999,
  modelo: "Ford",
};

for (let pendiente in pendientes) {
  console.log(pendiente);
}

for (let model in carro) {
  console.log(model);
}

for (let modelo in carro) {
  console.log(`${carro[modelo]}`);
}

for (let [llave, valor] of Object.entries(carro)) {
  console.log(llave, valor);
}
