/*const producto1 = {
  nombre: 'celular',
  precio: 100000,
  stock: 2,
};

producto1.id = 'id123';
producto1.foto = 'https://i.postimg.cc/Jn2C5W84/galaxy1.webp';

console.log(producto1); 

class Product {
  constructor (id, title, price, stock, images, onsale,colors,description) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.stock = stock;
    this.images = images;
    this.onsale = onsale;
    this.colors=colors;
    this.description=description;
  }
  get getSupplier () {
    return this._supplier;
  }
  set setSupplier (newName) {
    this._supplier = newName;
  }

  sellUnits (units) {
    if (this.stock > units) {
      this.stock = this.stock - units;
    } else {
      this.stock = console.log ('Error no hay stock');
    }
  }
}

const prod1 = new Product (1, 'Laptop', 10, 3,
 ["https://es.pngtree.com/freepng/laptop-png_6034262.html",
  "https://es.pngtree.com/freepng/laptop-vector_7109475.html",
  "https://es.pngtree.com/freepng/office-supplies-laptop_4886243.html"], 
  true,"blanco","Nuevo");
const prod2 = new Product (2, 'Celular', 10,4,
   ["https://es.pngtree.com/freepng/black-mobile-phone-mockup-png_5810756.html",
    "https://es.pngtree.com/freepng/flat-mobile-phone_2514656.html",
    "https://es.pngtree.com/freepng/flat-style-hand-held-mobile-ins-point-praise-heart-shaped-emerging-instagram_4341834.html"
     ], true,"negro","Nuevo");
const prod3 = new Product (3, 'Bici', 2, 3, [
  "https://es.pngtree.com/freepng/bicycle-design-material_1168720.html",
  "https://es.pngtree.com/freepng/bicycle_7012353.html"
], true,"marron","Nuevo");
const prod4 = new Product (4, 'Cuaderno', 5, 7, [
  "https://es.pngtree.com/freepng/notebook_2132750.html",
  "https://es.pngtree.com/freepng/blue-notebook-writing-a-diary-cartoon-illustration-hand-drawn-notebook-illustration_3874723.html"
], true,"blanco","Nuevo");
/*const prod5 = new Product (5, 'Fresa', 2, 1, [], true,"blanco","Nuevo");
const prod6 = new Product (6, 'Mandarina', 6, 6, [], true,"blanco","Nuevo");

const products = [prod1, prod2, prod3, prod4];

// Imprimir el array completo en consola
console.log(products);
// Imprimir el segundo elemento del array
console.log(products[1]);
// Imprimir la propiedad title del último elemento del array
console.log(products[products.length - 1].title);

// Agregar prod5 al inicio del array
products.unshift(prod5);
console.log("Después de unshift prod5:", products);

// Agregar prod6 al final del array
products.push(prod6);
console.log("Después de push prod6:", products);

// Quitar el primer elemento del array
const removedFirst = products.shift();
console.log("Elemento removido con shift:", removedFirst);
console.log("Array después de quitar el primer elemento:", products);

// Quitar el último elemento del array
const removedLast = products.pop();
console.log("Elemento removido con pop:", removedLast);
console.log("Array después de quitar el último elemento:", products);
// Imprimir el array completo en consola después de realizar cambios
console.log("Array completo de productos después de cambios:", products);


// Crear un array de productos
const products = [ prod1, prod2, prod3, prod4];

// Imprimir el array completo antes de realizar cambios
console.log("Array completo de productos:", products);

// Imprimir los detalles de cada producto
products.forEach((product, index) => {
    console.log(`Producto ${index + 1}:`, product);
}); */

class Product {
  constructor(id, name, image, price, description) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.price = price;
    this.description = description;
  }
}

// Crear seis instancias de la clase Product
const products = [
  new Product(1, "Laptop", "image1.jpg", 999, "High-performance laptop."),
  new Product(2, "Headphones", "image2.jpg", 199, "Noise-cancelling headphones."),
  new Product(3, "Smartphone", "image3.jpg", 699, "Latest model smartphone."),
  new Product(4, "Smartwatch", "image4.jpg", 249, "Smartwatch with fitness tracking."),
  new Product(5, "Camera", "image5.jpg", 549, "High-resolution camera."),
  new Product(6, "Tablet", "image6.jpg", 399, "Lightweight tablet with stylus."),]

