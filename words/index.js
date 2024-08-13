const frase = prompt ('Ingrese una palabra o frase');
const cantidad = frase.length;

const mensajeCantidad = 'Cantidad de caracteres : ' + cantidad;
console.log (mensajeCantidad);
alert (mensajeCantidad);

const fraseMinusculas = frase.toLowerCase ();

const fraseMayusculas = frase.toUpperCase ();

const minMay = fraseMinusculas + fraseMayusculas;
alert (minMay);
