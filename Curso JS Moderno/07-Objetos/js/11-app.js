const producto = {
  nombre: "Pantalla de 50 pulgadas",
  precio: 5000,
  disponible: true,
  mostrarInfo: function () {
    console.log(
      `El Producto: ${this.nombre} tiene un precio de: $ ${this.precio}`,
    );
  },
};

producto.mostrarInfo();
