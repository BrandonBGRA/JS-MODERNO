const producto = "Monitor de 20 Pulgadas";

// .replace() nos ayuda a reemplazar un valor
console.log(producto);
console.log(producto.replace("Pulgadas", '"'));
console.log(producto.replace("Monitor", "Monitor Curvo"));

// .slice() para cortar un valor
console.log(producto.slice(0, 10));

// Alternativa a slice
console.log(producto.substring(0, 10));

const usuario = "Juan";
console.log(usuario.substring(0, 1));
console.log(usuario.charAt(0));
