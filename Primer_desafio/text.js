class ProductManager {
    constructor() {
      this.products = [];
      this.lastId = 0;
    }
  
    getProducts() {
      return this.products;
    }
  
    getProductById(id) {
      const product = this.products.find(p => p.id === id);
      if (!product) {
        throw new Error(`Product with id ${id} not found`);
      }
      return product;
    }
  
    addProduct({ title, description, price, thumbnail, code, stock }) {
      if (this.products.some(p => p.code === code)) {
        throw new Error(`Product with code ${code} already exists`);
      }
      const id = ++this.lastId;
      const product = { id, title, description, price, thumbnail, code, stock };
      this.products.push(product);
      return product;
    }
  }
  
  // Uso de la clase ProductManager
  
  const productManager = new ProductManager();
  console.log(productManager.getProducts()); // []
  
  const newProduct = {
    title: 'producto prueba',
    description: 'Este es un producto prueba',
    price: 200,
    thumbnail: 'Sin imagen',
    code: 'abc123',
    stock: 25,
  };
  
  const product1 = productManager.addProduct(newProduct);
  console.log(product1); // { id: 1, ... }
  
  const products = productManager.getProducts();
  console.log(products); // [ { id: 1, ... } ]
  
  try {
    const product2 = productManager.addProduct(newProduct);
    console.log(product2);
  } catch (error) {
    console.error(error.message); // "Product with code abc123 already exists"
  }
  
  const productById = productManager.getProductById(1);
  console.log(productById); // { id: 1, ... }
  
  try {
    const productById2 = productManager.getProductById(2);
    console.log(productById2);
  } catch (error) {
    console.error(error.message); // "Product with id 2 not found"
  }
  