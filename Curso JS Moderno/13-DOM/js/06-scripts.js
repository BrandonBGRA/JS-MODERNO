const encabezado = document.querySelector(".contenido-hero h1");
console.log(encabezado);

console.log(encabezado.innerText); // No va a encontrar un texto que tenga un hidden (texto oculto)
console.log(encabezado.textContent);
console.log(encabezado.innerHTML);

const nuevoHeading = "Nuevo Heading";
document.querySelector(".contenido-hero h1").textContent = nuevoHeading;

const imagen = document.querySelector(".card img");
console.log(imagen);

// imagen.src = "img/hacer2.jpg"; // --> Asi editamos un imagen
