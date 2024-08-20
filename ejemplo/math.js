
function palindrome() {
    let x = -5.67;
    let y = 7.89;
    let z = 4.23;
    let w = 12.34;
     // Devuelve el valor absoluto de x
    console.log("Math.abs(x):", Math.abs(x)); 
     // Redondea x hacia arriba al siguiente entero
    console.log("Math.ceil(x):", Math.ceil(x)); 
    // Redondea x hacia abajo al entero más cercano
    console.log("Math.floor(x):", Math.floor(x));
    // Redondea x al entero más cercano  
    console.log("Math.round(x):", Math.round(x));  
    // Devuelve el valor máximo entre x, y, z, w
    console.log("Math.max(x, y, z, w):", Math.max(x, y, z, w));  
    // Devuelve el valor mínimo entre x, y, z, w
    console.log("Math.min(x, y, z, w):", Math.min(x, y, z, w)); 
    // Devuelve un número pseudoaleatorio entre 0 y 1 
    console.log("Math.random():", Math.random());  
}

palindrome();