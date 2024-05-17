//const navegacion = document.querySelector(".navegacion");

// console.log(navegacion);
// console.log(navegacion.childNodes); // Los espacios en blanco son considerados elementos
// console.log(navegacion.children); // Este no reconoce los espacios

// console.log(navegacion.children[1].nodeName);
// console.log(navegacion.children[1].nodeType);

const card = document.querySelector(".card");
card.children[1].children[1].textContent = "Nuevo Heading desde consola";
console.log(card.children[1].children[1].textContent);

console.log(card.children[0]);

card.children[0].src = "img/hacer3.jpg";

// Traversing de Hijo a Padre

console.log(card.parentElement.parentElement.parentElement);

// nextElementSibling se uiliza para obtener el siguiente elemento
console.log(card);
console.log(card.nextElementSibling);


