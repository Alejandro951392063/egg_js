function titleFormat (texto) {
  if (texto.length === 0) {
    return 'Invalid input';
  }

  const primeraLetra = texto.charAt (0).toUpperCase ();
  const restOfString = texto.slice (1).toLowerCase ();
  const formato = primeraLetra + restOfString;

  console.log (formato);

  return formato.length;
}

console.log (titleFormat ('hello world'));
console.log (titleFormat ('HELLO world'));
console.log (titleFormat ('HellO WOrLd'));
