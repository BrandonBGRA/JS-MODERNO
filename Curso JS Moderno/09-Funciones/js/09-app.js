const reproductor = {
  reproducir: function (numero) {
    console.log(`Reproduciendo cancion con el id: ${numero}`);
  },
  pausando: function () {
    console.log(`Pausando cancion`);
  },
};

console.log(reproductor);

reproductor.reproducir(30);
reproductor.reproducir(40);
reproductor.pausando();

reproductor.borrar = function (id = "") {
  console.log(`Borrando cancion con el id: ${id}`);
};

reproductor.borrar(30);
