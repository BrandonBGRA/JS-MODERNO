const numero1 = 20;
const numero2 = "20";
const numero3 = 30;

// Revisar si dos numeros son iguales
// == no es tan estricto no valida el tipo de dato
console.log(numero1 == numero2);

//Comparador estricto validando el tipo de dato
console.log(numero1 === numero2);
// Comparamos estrictamente pero cambiamos el valor de numero2 de string a number (entero)
console.log(numero1 === parseInt(numero2));

const password1 = "admin";
const password2 = "Admin";

console.log(password1 != password2);
console.log(numero1 !== numero2);
console.log(numero1 !== parseInt(numero2));
