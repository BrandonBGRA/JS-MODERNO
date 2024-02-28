const reproductor = {
  cancion: "",
  reproducir: (numero = null) =>
    console.log(`Reproduciendo cancion con el id: ${numero}`),
  pausando: () => console.log(`Pausando cancion`),
  crearPlaylist: (nombre) => console.log(`Creando la playlist de ${nombre}`),
  reproducirPlaylist: (nombre, veces) =>
    console.log(`Reproduciendo la playlist de ${nombre} ${veces} veces`),

  set nuevaCancion(cancion) {
    this.cancion = cancion;
    console.log(`Añadiendo ${cancion}`);
  },
  get obtenerCancion() {
    console.log(`${this.cancion}`);
  },
};

reproductor.nuevaCancion = "Heaven";
reproductor.obtenerCancion;
reproductor.reproducir(30);
reproductor.reproducir(40);
reproductor.pausando();
reproductor.crearPlaylist("EDM");
reproductor.reproducirPlaylist("EDM", 7);

reproductor.borrar = (id = "") =>
  console.log(`Borrando cancion con el id: ${id}`);

reproductor.borrar(30);
