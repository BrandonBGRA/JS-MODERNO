const encabezado = document.querySelector("h1");

// Asignando un color a un valor de html desde JS
// encabezado.style.backgroundColor = "red";
// encabezado.style.fontFamily = "Arial";
// encabezado.style.textTransform = "uppercase";

const card = document.querySelector(".card");
card.classList.add("nueva-clase", "segunda-nueva-clase");
card.classList.remove("nueva-clase");
console.log(card.classList);
