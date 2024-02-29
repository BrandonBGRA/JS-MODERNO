// Switch case

const metodoDePago = "cheque";

switch (metodoDePago) {
  case "efectivo":
    console.log(`Pagaste con ${metodoDePago}`);
    break;
  case "cheque":
    console.log(`Pagaste con ${metodoDePago}`);
    break;

  default:
    console.log(
      `Aun no has seleccionado un metodo de pago o tu metodo ${metodoDePago} no es valido `,
    );
    break;
}
