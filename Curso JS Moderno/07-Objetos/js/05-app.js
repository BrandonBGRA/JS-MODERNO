// Construimos el objeto
const producto = {
  nombre: "Monitor de 20 pulgadas",
  precio: 300,
  disponible: true,
  informacion: {
    medidas: {
      peso: "1kg",
      medida: "1m",
    },
    fabricacion: {
      pais: "China",
    },
  },
};
delete producto.informacion.fabricacion.pais;
console.log(producto);

console.log(producto.informacion);
console.log(producto.informacion.peso);
