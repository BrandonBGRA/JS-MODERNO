// Object Literal
const producto = {
  nombre: "Pantalla de 50 pulgadas",
  precio: 5000,
  disponible: true,
};

//Object Constructor
function Producto(nombre, precio) {
  this.nombre = nombre;
  this.precio = precio;
  this.disponible = true;
}

const producto2 = new Producto("Monitor", 2000);
const producto3 = new Producto("Teclado", 1000);

console.log(producto2);
console.log(producto3);
