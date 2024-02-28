const aprendiendo = function (nombre = "") {
  console.log(`Aprendiendo ${nombre}`);
};

aprendiendo("JS");

const aprendiendo2 = (tecnologia, tecnologia2) =>
  `Aprendiendo ${tecnologia} y la tecnologia ${tecnologia2}`;

console.log(aprendiendo2("PHP", "Node JS"));
