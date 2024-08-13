/*function calcularVelocidad () {
  const distancia = 10;
  const tiempo = 2;
  const velocidad = distancia / tiempo;
  console.log ('La velocidad del móvil es ' + velocidad);
}

calcularVelocidad();
calcularVelocidad();
calcularVelocidad();*/

const calcularVelocidad= (distancia,tiempo) =>{
     const velocidad = distancia / tiempo;
    console.log ('La velocidad del móvil es ' + velocidad);
     return velocidad;
  }

  const velocidad1 = calcularVelocidad(4,2);
console.log("La velocidad de Usuario 1 es " + velocidad1);

const velocidad2 = calcularVelocidad(13,4);
console.log("La velocidad de Usuario 2 es " + velocidad2);

const velocidad3 = calcularVelocidad(35,8);
console.log("La velocidad de Usuario 3 es " + velocidad3);