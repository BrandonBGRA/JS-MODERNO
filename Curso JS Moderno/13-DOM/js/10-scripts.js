const enlace = document.createElement("A");

// Agregando el texto
enlace.textContent = "Nuevo Enlace";

// Añadiendo href
enlace.href = "/nuevo-enlace";

enlace.target = "_blank";

enlace.setAttribute("data-enlace", "nuevo-enlace");

// Seleccionar la navegación
const navegacion = document.querySelector(".navegacion");
navegacion.insertBefore(enlace, navegacion.children[0]);
// navegacion.appendChild(enlace);  // Es la forma basica de insertar cosas, es al final

// Crear un CARD
const parrafo1 = document.createElement("P");
parrafo1.textContent = "Concierto";
parrafo1.classList.add("categoria", "concierto");

const parrafo2 = document.createElement("P");
parrafo2.textContent = "Concierto de Rock";
parrafo2.classList.add("titulo");

const parrafo3 = document.createElement("P");
parrafo3.textContent = "$900 por persona";
parrafo3.classList.add("precio");

// Crear div con la clase de info
const info = document.createElement("div");
info.classList.add("info");
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

// Crear la imagen
const imagen = document.createElement("img");
imagen.src = "img/hacer2.jpg";

imagen.classList.add("img-fluid");

// Crear el card

const card = document.createElement("div");
card.classList.add("card");

// Asignar la imagen
card.appendChild(imagen);

//Asignar informacion
card.appendChild(info);

const contenedor = document.querySelector(".hacer .contenedor-cards");
contenedor.insertBefore(card, contenedor.children[0]);
