(() => {
  type sizes = 'S' | 'M' | 'L' | 'XL' | 'XXL';

  function createProductToJson(
    title: string,
    createdAt: Date,
    stock: number,
    size: sizes
  ) {
    return { title, createdAt, stock, size };
  }
  const producto1 = createProductToJson('P1', new Date(), 12, 'M');
  console.log(producto1);
  console.log(producto1.createdAt);
  console.log(producto1.title);

  const createProductToJsonV2 = (
    title: string,
    createdAt: Date,
    stock: number,
    size: sizes
  ) => {
    return { title, createdAt, stock, size };
  };
})();
