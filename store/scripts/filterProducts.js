/*function captureText(event) {
   // console.log("capturado");

    console.log("Tecla presionada:", event.key);
    console.log("Código de tecla:", event.code);
    console.log("Código de tecla (keyCode):", event.target.value);
}

//const searchSelector = document.querySelector("#search");

//searchSelector.addEventListener("keyup", captureText);

//searchSelector.addEventListener("keyup", event => captureText(event));

const searchSelector = document.querySelector("#search");
searchSelector.addEventListener("keyup", event => captureText(event)); */
// Función para capturar el texto del input y filtrar productos

function captureText(event) {
    // Captura el valor del input
    const searchText = event.target.value;
    
    // Filtra los productos
    const filteredProducts = products.filter(product => 
        product.title.includes(searchText) ||
        product.description.includes(searchText)
    );
    
    // Actualiza la vista con los productos filtrados
    renderProducts(filteredProducts);
}

// Función para renderizar los productos en la vista
function renderProducts(products) {
    const productContainer = document.getElementById('products');
    productContainer.innerHTML = ''; // Limpia los productos actuales

    // Agrega cada producto al contenedor
    products.forEach(product => {
        const productCard = `
            <a class="product-card" href="./details.html">
                <img class="product-img" src="https://i.postimg.cc/kX8PKZpq/ipad2.jpg" alt="${product.title}" />
                <div class="product-info">
                    <span class="product-title">${product.title}</span>
                    <span class="product-description">${product.description}</span>
                    <div class="product-price-block">
                        <span class="product-price">${product.price}</span>
                        <span class="product-discount">${product.discount}</span>
                    </div>
                    <div class="product-tax-policy">
                        Incluye impuesto País y percepción AFIP
                    </div>
                </div>
            </a>
        `;
        productContainer.innerHTML += productCard;
    });
}

// Agregar el event listener al input
document.getElementById('search').addEventListener('input', captureText);