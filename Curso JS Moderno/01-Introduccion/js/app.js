const nombre = // prompt("Cual es tu nombre?");
  // Toma el nombre y lo muestra en el HTML
  (document.querySelector(".contenido").innerHTML =
    `${nombre} Esta Aprendiendo JS`);

/*
seleccionamos la clase contenido con document.querySelector
insertamos la informacion con .innerHTML
seleccionamos la variable con ${}, de esta forma se ingresa el nombre con la sentencia 'Esta Aprendiendo JS'
*/

const producto = "Monitor 20 pulgadas";
