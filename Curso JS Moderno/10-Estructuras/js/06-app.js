const usuario = true;
const puedePagar = true;

if (usuario && puedePagar) {
  console.log("si puedes comprar");
} else if (!usuario) {
  console.log("Inicia sesion o saca una cuenta");
} else if (!puedePagar) {
  console.log("No tienes fondos suficientes");
}
