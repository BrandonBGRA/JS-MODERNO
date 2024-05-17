// Seleccionar Elementos por su clase

const header = document.getElementsByClassName("header");
console.log(header);

const hero = document.getElementsByClassName("hero");
console.log(hero);

// Si las clases existen mas de una vez

const contenedores = document.getElementsByClassName("contenedor");
console.log(contenedores);

// Va a retornar un elemento html vacio
const noExiste = document.getElementsByClassName("no-existe");
console.log(noExiste);
