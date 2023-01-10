(() => {
  const login = (email: string, password: string) => {
    console.log(email, password);
  };
  login('dans@gmail.com', '123121312');

  //acá solo paso email y password, pero si realmente pasara muchos mas parametros, lo más comodo sería
  //hacer uso de objetos.

  //Acá abajo transformamos la primer función a formato "objeto".
  const login2 = (data: { email: string; password: number }) => {
    console.log(data.email, data.password);
  };
  login2({ email: 'dans@gmail.com', password: 123121312 });

  type sizes = 'S' | 'M' | 'L' | 'XL' | 'XXL';
  const products: any[] = [];

  const addProduct = (data: {
    title: string;
    createdAd: Date;
    stock: number;
    size?: sizes;
  }) => {
    products.push(data);
  };
  addProduct({
    title: 'Prod1',
    createdAd: new Date(2010, 1, 1),
    stock: 12,
  });

  addProduct({
    title: 'Prod2',
    createdAd: new Date(1990, 31, 3),
    stock: 18,
    size: 'L',
  });
  console.log(products);
})();
