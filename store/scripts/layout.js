/*const navSelector = document.getElementById("nav");

const options = [
  { title: "Ofertas", linkTo: "./outlet.html", opts: ["Laptops", "Audio", "Auriculares"] },
  { title: "Cómo comprar", linkTo: "./how.html", opts: ["Formas de pago", "Envios", "Devoluciones"] },
  { title: "Costos y tarifas", linkTo: "./taxs.html", opts: ["Impuestos", "Facturación"] },
  { title: "Mis pedidos", linkTo: "./orders.html", opts: ["Pedir nuevamente", "Lista de deseos"] },
  { title: "Garantía de Entrega", linkTo: "./warranty.html", opts: [] },
  ];

  for (let option of options) {
    const anchor = document.createElement("a");
    anchor.className = "nav-button"
    anchor.textContent = option.title
    anchor.href = option.linkTo
    navSelector.appendChild(anchor)
  } */

// Selecciona el elemento con id="nav"
const navSelector = document.getElementById ('nav');

// Define las opciones de navegación
const options = [
  {title: 'Ofertas', linkTo: './outlet.html'},
  {title: 'Cómo comprar', linkTo: './how.html'},
  {title: 'Costos y tarifas', linkTo: './taxs.html'},
  {title: 'Mis pedidos', linkTo: './orders.html'},
  {title: 'Garantía', linkTo: './warranty.html'},
];

// Itera sobre las opciones y crea los elementos de la barra de navegación
for (let option of options) {
  const anchor = document.createElement ('a');
  anchor.className = 'nav-button';
  anchor.textContent = option.title;
  anchor.href = option.linkTo;
  navSelector.appendChild (anchor);
}

/*const footerSelector = document.querySelector("#footer"); 
  
const options2= [
    { title: "Productos", linkTo: "./products.html", opts: ["Laptops", "Audio", "Auriculares"] },
    { title: "Servicios", linkTo: "./services.html", opts: ["Formas de pago", "Garantía", "Devoluciones"] },
    { title: "Información", linkTo: "./info.html", opts: ["Impuestos", "Política de privacidad"] },
    { title: "Contáctanos", linkTo: "./contact.html", opts: ["Email", "Teléfono"] },
    { title: "Redes Sociales", linkTo: "./social.html", opts: [] },
  ];

  for (let option of options2) {
    // Crear el contenedor de la columna
    const column = document.createElement("div");
    column.className = "footer-column"; // Clase para estilos
  
    // Crear el título de la columna
    const title = document.createElement("a");
    title.className = "footer-title";
    title.textContent = option.title;
    title.href = option.linkTo;
    column.appendChild(title);
  
    // Crear las opciones de la columna
    for (let item of option.opts) {
      if (item) {
        const listItem = document.createElement("p");
        listItem.textContent = item;
        column.appendChild(listItem);
      }
    }
  
    // Agregar la columna al pie de página
    footerSelector.appendChild(column);
  }*/
