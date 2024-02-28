iniciarApp();

function iniciarApp() {
  console.log("iniciando App....");
  segundaFuncion();
}

function segundaFuncion() {
  console.log("Desde la segunda funcion");
  usuarioAutenticado("Brandon");
}

function usuarioAutenticado(nombre = "") {
  console.log("Autenticando Usuario... espere...");
  console.log(`Usuario autenticado exitosamente, Bienvenido: ${nombre}`);
}
