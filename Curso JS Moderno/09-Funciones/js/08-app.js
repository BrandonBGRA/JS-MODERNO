function sumar(a, b) {
  return a + b;
}

const resultado = sumar(10, 20);

console.log(resultado);

// Ejemplo mas avanzado
let total = 0;
function agregarCarrito(precio) {
  return (total += precio);
}
function calcularImpuesto(total) {
  return total * 1.15;
}

total = agregarCarrito(500);
total = agregarCarrito(1000);

const totalPagar = calcularImpuesto(total);

console.log(`El total a pagar es ${totalPagar}`);
