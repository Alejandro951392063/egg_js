const productsSelector = document.getElementById("products");


let productsTemplate = products.map(product => `
    <article class="product-card">
      <img src="${product.image}" alt="${product.name}" class="product-image">
      <h2 class="product-name">${product.name}</h2>
      <p class="product-price">$${product.price}</p>
      <p class="product-description">${product.description}</p>
    </article>
  `).join('');

  productsSelector.innerHTML = productsTemplate;