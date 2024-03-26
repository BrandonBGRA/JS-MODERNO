const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];
const meses2 = ["Agosto", "Septiembre"];
const meses3 = ["Octubre", "Noviembre", "Diciembre"];

// .concant (Uninir 2 o mas arreglos)
const resultado = meses.concat(meses2, meses3);

console.log(resultado);

//Spread Operator
const resultado2 = [...meses, ...meses2, ...meses3];


console.log(resultado2);
