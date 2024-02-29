// Operador mayor que y menor que

const dinero = 1000;
const totalAPagar = 500;
const tarjeta = true;

if (dinero >= totalAPagar) {
  console.log("Si podemos pagar");
} else if (tarjeta) {
  console.log("Si puedo pagar por que tengo tarjeta");
} else {
  console.log("no hay fondos suficientes");
}
