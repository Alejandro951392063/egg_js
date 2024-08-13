const comprar = () => {
  let totalApagar = 0;
  for (let index = 1; index <= 3; index++) {
    const nombre = prompt ('¿Que producto lleva?');

    let cantidad = Number (prompt ('¿Cuantas unidades?'));

    let precio = Number (prompt ('¿Cual es el precio?'));

    cosnt = subtotal = cantidad * precio;
    totalApagar = totalApagar + subtotal;
  }

  alert ('Total a pagar: ' + totalApagar);
  console.log ('Total ' + i  +  totalApagar);
};

const total1 = comprar ();
const total2 = comprar ();
const total3 = comprar ();  
const total = total1 + total2 + total3;
console.log ('Total a pagar: ' + total);
