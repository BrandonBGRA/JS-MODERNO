// Construimos el objeto
const producto = {
  nombre: "Monitor de 20 pulgadas",
  precio: 300,
  disponible: true,
};

// Agregar nuevas propiedades al objeto
producto.imagen = "imagen.jpg";

// Eliminar atributos de un objeto
delete producto.imagen;

console.log(producto);
