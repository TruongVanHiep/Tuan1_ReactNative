class Product {
    constructor(public name: string, public price: number) {}
  }

  const products: Product[] = [
    new Product("Laptop", 1200),
    new Product("Mouse", 25),
    new Product("Keyboard", 80),
    new Product("Monitor", 300),
    new Product("USB Cable", 10),
  ];
  
  const sp = products.filter((product) => product.price > 100);
  
  console.log("Products với giá > 100:");
  console.log(sp);