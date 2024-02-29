const autenticado = true;
const puedePagar = true;

console.log(
  autenticado || puedePagar ? "Si esta autenticado" : "No esta autenticado",
);

if (autenticado) {
  console.log("Si esta autenticado");
} else {
  console.log("No esta autenticado");
}
