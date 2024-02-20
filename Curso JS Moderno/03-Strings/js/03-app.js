const producto = "Monitor de 20 pulgadas ";
const precio = "30 USD ";

// Concatenar 2 variables
console.log(producto.concat(precio));
console.log(producto.concat("En Descuento"));

console.log(producto + "con un precio de: " + precio);
console.log("El producto " + producto + "tiene un precio de " + precio);
console.log("El producto ", producto, "tiene un precio de ", precio);

// Concantear con template strings
console.log(`El producto ${producto} tiene un precio de $${precio}`);
