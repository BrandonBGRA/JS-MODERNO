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

// Destructuring con objetos anidados

const {
  informacion: {
    fabricacion,
    fabricacion: { pais },
  },
} = producto;

console.log(pais);
console.log(fabricacion);
