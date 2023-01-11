(() => {
    //Acá aprendemos directamente a tipear objetos.
  type sizes = "S" | "M" | "L" | "XL" | "XXL";
  type product = {
    title: string;
    createdAd: Date;
    stock: number;
    size?: sizes;
  };

  const products: product[] = [];

  const addProduct = (data: product) => {
    products.push(data);
  };

  addProduct({
    title: "Prod1",
    createdAd: new Date(2010, 1, 1),
    stock: 12,
  });

  addProduct({
    title: "Prod2",
    createdAd: new Date(1990, 31, 3),
    stock: 18,
    size: "L",
  });
  console.log(products);
  products.push({
    title: "Prod3",
    createdAd: new Date(2090, 31, 3),
    stock: 88,
    size: "L",
  });

})();
